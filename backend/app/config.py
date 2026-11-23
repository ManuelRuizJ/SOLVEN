from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    # Base de datos
    database_url: str
    sql_echo: bool = False

    # Autenticación JWT
    jwt_secret_key: str = ""
    jwt_algorithm: str = "HS256"
    jwt_expire_minutes: int = 60

    # Origenes permitidos para el frontend
    cors_origins: str = "http://localhost:5173"

    # Inteligencia artificial
    ia_modo: str = "mock"
    gemini_api_key: str = ""
    gemini_model: str = ""

    @property
    def cors_origins_list(self) -> list[str]:
        return [
            origen.strip() for origen in self.cors_origins.split(",") if origen.strip()
        ]


settings = Settings()
