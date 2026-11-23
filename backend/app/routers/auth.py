from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlmodel import select

from app.database import SessionDep
from app.dependencies import UsuarioActual
from app.models import Usuario
from app.schemas import Token, UsuarioIn, UsuarioPublico
from app.security import crear_token, hashear_contrasena, verificar_contrasena

router = APIRouter(prefix="/auth", tags=["Autenticación"])


@router.post("/register", response_model=UsuarioPublico, status_code=status.HTTP_201_CREATED)
def registrar(datos: UsuarioIn, session: SessionDep):
    correo = datos.correo.lower()
    if session.exec(select(Usuario).where(Usuario.correo == correo)).first():
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="El correo ya está registrado")

    usuario = Usuario(
        nombre=datos.nombre,
        correo=correo,
        contrasena_hash=hashear_contrasena(datos.contrasena),
    )
    session.add(usuario)
    session.commit()
    session.refresh(usuario)
    return usuario


# El formulario de OAuth2 usa "username"; aquí el username es el correo
@router.post("/login", response_model=Token)
def iniciar_sesion(
    formulario: Annotated[OAuth2PasswordRequestForm, Depends()], session: SessionDep
):
    correo = formulario.username.lower()
    usuario = session.exec(select(Usuario).where(Usuario.correo == correo)).first()
    if usuario is None or not verificar_contrasena(formulario.password, usuario.contrasena_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Correo o contraseña incorrectos",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return Token(access_token=crear_token(usuario.id))


@router.get("/me", response_model=UsuarioPublico)
def usuario_actual(usuario: UsuarioActual):
    return usuario
