from datetime import datetime, timezone

from sqlalchemy import DateTime
from sqlmodel import Field, SQLModel


def ahora() -> datetime:
    return datetime.now(timezone.utc)


class Usuario(SQLModel, table=True):
    __tablename__ = "usuarios"

    id: int | None = Field(default=None, primary_key=True)
    nombre: str = Field(max_length=100)
    correo: str = Field(max_length=255, unique=True, index=True)
    contrasena_hash: str = Field(max_length=255)
    rol: str = Field(default="usuario", max_length=20)
    creado_en: datetime = Field(default_factory=ahora, sa_type=DateTime(timezone=True))
