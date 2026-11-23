# SOLVEN — Backend (FastAPI)

## Estructura
```
backend/
├── app/
│   ├── main.py          # app FastAPI, router /api, CORS y /api/health
│   ├── config.py        # Pydantic Settings (lee el .env)
│   ├── database.py      # engine, crear_tablas() y SessionDep de SQLModel
│   ├── security.py      # hash de contraseñas y JWT
│   ├── dependencies.py  # get_current_user (UsuarioActual)
│   ├── models.py        # tablas SQLModel (usuarios, categorias, movimientos, recomendaciones)
│   ├── schemas.py       # modelos Pydantic de entrada/salida
│   ├── routers/         # auth (listo); TODO: transactions, metrics, insights
│   └── services/        # TODO: cálculo de indicadores e integración con la IA
├── requirements.txt     # TODO: dependencias desde un venv limpio 
└── .env.example         # TODO: variables (DATABASE_URL, JWT_SECRET, IA_PROVIDER...)
```

## Cómo correrlo (TODO)
1. `python -m venv venv && source venv/bin/activate`
2. `pip install -r requirements.txt`
3. `cp .env.example .env` y llenar los valores
4. `fastapi dev app/main.py` → http://localhost:8000/docs
