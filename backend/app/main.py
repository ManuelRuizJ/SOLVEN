from contextlib import asynccontextmanager

from fastapi import APIRouter, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.exc import SQLAlchemyError
from sqlmodel import select

from app.config import settings
from app.database import SessionDep, crear_tablas
from app.routers import auth


@asynccontextmanager
async def lifespan(app: FastAPI):
    crear_tablas()
    yield


app = FastAPI(
    title="SOLVEN API",
    description="API de finanzas personales para estudiantes",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api = APIRouter(prefix="/api")


@api.get("/health", tags=["Salud"])
def health(session: SessionDep):
    try:
        session.exec(select(1))
    except SQLAlchemyError:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="No hay conexión con la base de datos",
        )
    return {"status": "ok", "database": "ok"}


api.include_router(router=auth.router)

app.include_router(api)
