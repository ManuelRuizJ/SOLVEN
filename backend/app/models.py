from datetime import date, datetime, timezone
from decimal import Decimal

from sqlalchemy import CheckConstraint, DateTime, Text
from sqlmodel import Field, Relationship, SQLModel


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

    categorias: list["Categoria"] = Relationship(
        back_populates="usuario", cascade_delete=True
    )
    movimientos: list["Movimiento"] = Relationship(
        back_populates="usuario", cascade_delete=True
    )
    recomendaciones: list["Recomendacion"] = Relationship(
        back_populates="usuario", cascade_delete=True
    )


class Categoria(SQLModel, table=True):
    __tablename__ = "categorias"

    id: int | None = Field(default=None, primary_key=True)
    # NULL = categoria del sistema, visible para todos los usuarios
    usuario_id: int | None = Field(
        default=None, foreign_key="usuarios.id", index=True, ondelete="CASCADE"
    )
    nombre: str = Field(max_length=50)
    tipo: str = Field(max_length=10)  # ingreso | gasto

    usuario: Usuario | None = Relationship(back_populates="categorias")
    movimientos: list["Movimiento"] = Relationship(back_populates="categoria")


class Movimiento(SQLModel, table=True):
    __tablename__ = "movimientos"
    __table_args__ = (CheckConstraint("monto > 0", name="ck_movimientos_monto"),)

    id: int | None = Field(default=None, primary_key=True)
    usuario_id: int = Field(foreign_key="usuarios.id", index=True, ondelete="CASCADE")
    categoria_id: int | None = Field(
        default=None, foreign_key="categorias.id", ondelete="SET NULL"
    )
    tipo: str = Field(max_length=10)  # ingreso | gasto | deuda
    monto: Decimal = Field(max_digits=12, decimal_places=2)
    descripcion: str | None = Field(default=None, max_length=255)
    contraparte: str | None = Field(default=None, max_length=100)
    direccion_deuda: str | None = Field(default=None, max_length=10)  # me_deben | debo
    saldada: bool = False
    saldada_en: datetime | None = Field(default=None, sa_type=DateTime(timezone=True))
    texto_original: str | None = Field(default=None, sa_type=Text)  # frase escrita
    fecha: date = Field(default_factory=date.today)
    creado_en: datetime = Field(default_factory=ahora, sa_type=DateTime(timezone=True))

    usuario: Usuario | None = Relationship(back_populates="movimientos")
    categoria: Categoria | None = Relationship(back_populates="movimientos")


class Recomendacion(SQLModel, table=True):
    __tablename__ = "recomendaciones"

    id: int | None = Field(default=None, primary_key=True)
    usuario_id: int = Field(foreign_key="usuarios.id", index=True, ondelete="CASCADE")
    mes: str = Field(max_length=7)  # 'AAAA-MM'
    contenido: str = Field(sa_type=Text)
    meta_ahorro: Decimal | None = Field(default=None, max_digits=12, decimal_places=2)
    generado_en: datetime = Field(default_factory=ahora, sa_type=DateTime(timezone=True))

    usuario: Usuario | None = Relationship(back_populates="recomendaciones")
