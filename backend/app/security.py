from datetime import datetime, timedelta, timezone

import jwt
from pwdlib import PasswordHash
from pwdlib.hashers.bcrypt import BcryptHasher

from app.config import settings

password_hash = PasswordHash((BcryptHasher(),))


def hashear_contrasena(contrasena: str) -> str:
    return password_hash.hash(contrasena)


def verificar_contrasena(contrasena: str, contrasena_hash: str) -> bool:
    return password_hash.verify(contrasena, contrasena_hash)


def crear_token(usuario_id: int) -> str:
    expira = datetime.now(timezone.utc) + timedelta(minutes=settings.jwt_expire_minutes)
    datos = {"sub": str(usuario_id), "exp": expira}
    return jwt.encode(datos, settings.jwt_secret_key, algorithm=settings.jwt_algorithm)
