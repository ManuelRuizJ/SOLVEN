from typing import Annotated

import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer

from app.config import settings
from app.database import SessionDep
from app.models import Usuario

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")


def get_current_user(token: Annotated[str, Depends(oauth2_scheme)], session: SessionDep) -> Usuario:
    credenciales_invalidas = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Token inválido o expirado",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        datos = jwt.decode(token, settings.jwt_secret_key, algorithms=[settings.jwt_algorithm])
        usuario_id = int(datos["sub"])
    except (jwt.InvalidTokenError, KeyError, ValueError):
        raise credenciales_invalidas

    usuario = session.get(Usuario, usuario_id)
    if usuario is None:
        raise credenciales_invalidas
    return usuario


UsuarioActual = Annotated[Usuario, Depends(get_current_user)]
