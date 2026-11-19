# SOLVEN — Backend (FastAPI)

## Estructura
```
backend/
├── app/
│   ├── main.py          # TODO: app FastAPI, router /api/v1, CORS
│   ├── config.py        # TODO: Pydantic Settings (lee el .env)
│   ├── database.py      # TODO: engine, sesión y get_db() de SQLAlchemy
│   ├── security.py      # TODO: hash de contraseñas y JWT
│   ├── dependencies.py  # TODO: get_current_user, require_role("admin")
│   ├── models/          # TODO: tablas SQLAlchemy (usuario, cuenta, categoria, movimiento, presupuesto)
│   ├── schemas/         # TODO: modelos Pydantic de entrada/salida
│   ├── routers/         # TODO: auth, cuentas, categorias, movimientos, presupuestos, indicadores, analisis, admin
│   └── services/        # TODO: cálculo de indicadores e integración con la IA
├── requirements.txt     # TODO: dependencias desde un venv limpio 
└── .env.example         # TODO: variables (DATABASE_URL, JWT_SECRET, IA_PROVIDER...)
```

## Cómo correrlo (TODO)
1. `python -m venv venv && source venv/bin/activate`
2. `pip install -r requirements.txt`
3. `cp .env.example .env` y llenar los valores
4. `alembic upgrade head`
5. `uvicorn app.main:app --reload` → http://localhost:8000/docs
