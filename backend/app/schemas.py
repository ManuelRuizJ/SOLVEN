from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class UsuarioIn(BaseModel):
    nombre: str = Field(min_length=2, max_length=100)
    correo: EmailStr
    # bcrypt solo usa los primeros 72 bytes
    contrasena: str = Field(min_length=8, max_length=72)


class UsuarioPublico(BaseModel):
    id: int
    nombre: str
    correo: EmailStr
    rol: str
    creado_en: datetime


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
