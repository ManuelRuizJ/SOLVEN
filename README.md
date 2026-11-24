# SOLVEN

# Resumen del proyecto SOLVEN

**SOLVEN** es una plataforma web orientada a la gestión, administración y análisis de finanzas personales. Su objetivo es ofrecer a los usuarios una herramienta que les permita registrar ingresos, gastos, cuentas bancarias, tarjetas de crédito, deudas y presupuestos, así como visualizar su comportamiento financiero mediante indicadores, reportes y recomendaciones personalizadas.

El desarrollo del proyecto se fundamenta en la importancia de las **interfaces de programación de aplicaciones (APIs)** como mecanismos de comunicación e integración entre los diferentes componentes de un sistema. A través de una API REST desarrollada con **FastAPI**, el frontend construido con **React** puede comunicarse con el backend, solicitar información, registrar movimientos financieros y consultar resultados de análisis de manera estructurada y segura.

La conexión entre estos componentes permite establecer una arquitectura organizada en la que cada tecnología cumple una función específica. **PostgreSQL** se encarga del almacenamiento y administración de la información; el backend procesa las solicitudes, aplica las reglas de negocio y realiza los cálculos financieros; mientras que el frontend presenta los datos mediante una interfaz intuitiva y accesible.

Asimismo, el proyecto contempla la integración de una API externa de inteligencia artificial, cuya función será interpretar los indicadores financieros previamente calculados por el sistema y generar explicaciones, observaciones y recomendaciones personalizadas. Esto demuestra cómo las APIs facilitan la incorporación de servicios externos y amplían las capacidades de una aplicación sin necesidad de desarrollar todas sus funcionalidades desde cero.

En este sentido, SOLVEN busca demostrar la relevancia de la creación de  APIs para lograr la interoperabilidad, modularidad, escalabilidad e integración de tecnologías dentro de un proyecto de software. La comunicación eficiente entre el frontend, backend, base de datos y servicios externos permite construir una solución integral, donde los datos no solamente se almacenan, sino que se procesan y transforman en información útil para apoyar la toma de decisiones financieras.

## Integrantes

| Nombre | GitHub |
|---|---|
| Jesús Manuel Ruiz Fuentes | [@ManuelRuizJ](https://github.com/ManuelRuizJ) |
| Antonio Vázquez | [@antoniovazquezm](https://github.com/antoniovazquezm) |
| Sebastián Eugenio Reyes | [@user1228-szp](https://github.com/user1228-szp) |

## Tecnologías

- **Backend:** Python 3.14, FastAPI, SQLModel, Pydantic Settings
- **Base de datos:** PostgreSQL 18 (en un contenedor de Docker)
- **Seguridad:** JWT (PyJWT) y hash de contraseñas con bcrypt (pwdlib)
- **Inteligencia artificial:** Google Gemini (`google-genai`), con un modo `mock` para desarrollo
- **Frontend:** React + Vite (pendiente)

## Estructura del repositorio

```
solven/
├── docs/        # Resumen ejecutivo, diagramas ER y de arquitectura, bitácora
├── backend/     # API REST con FastAPI + SQLModel + PostgreSQL
└── frontend/    # Interfaz con React (Vite)
```

## Documentación

- [Resumen ejecutivo](docs/SOLVEN_Resumen_Ejecutivo.docx)
- Diagrama entidad-relación: [imagen](docs/diagrama-er.png) · [fuente draw.io](docs/diagrama-er.drawio)
- [Diagrama de arquitectura](docs/diagrama-arquitectura.jpg)
- [Bitácora del equipo y declaración de uso de IA](docs/BITACORA.md)

## Instalación

Requisitos: Python 3.12 o superior, Docker y Git.

```bash
git clone https://github.com/ManuelRuizJ/SOLVEN.git
cd SOLVEN/backend
python -m venv venv
source venv/bin/activate        # En Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env            # Después llenar los valores
```

## Variables de entorno

Se definen en `backend/.env`, que nunca se sube al repositorio. La plantilla está en [`backend/.env.example`](backend/.env.example).

| Variable | Descripción | Ejemplo |
|---|---|---|
| `DATABASE_URL` | Conexión a PostgreSQL | `postgresql+psycopg://solven:solven@localhost:5432/solven` |
| `SQL_ECHO` | Muestra en consola las consultas SQL | `false` |
| `JWT_SECRET_KEY` | Clave para firmar los tokens | `python -c "import secrets; print(secrets.token_hex(32))"` |
| `JWT_ALGORITHM` | Algoritmo de firma del JWT | `HS256` |
| `JWT_EXPIRE_MINUTES` | Minutos de vigencia del token | `60` |
| `CORS_ORIGINS` | Orígenes permitidos del frontend, separados por comas | `http://localhost:5173` |
| `IA_MODO` | `mock` para respuestas simuladas o `gemini` para usar la API real | `mock` |
| `GEMINI_API_KEY` | Clave de la API de Gemini (solo con `IA_MODO=gemini`) | |
| `GEMINI_MODEL` | Modelo de Gemini a usar | |

## Cómo ejecutarlo en local

1. Levantar PostgreSQL en Docker (la primera vez):
   ```bash
   docker run -d --name solven-db -e POSTGRES_USER=solven -e POSTGRES_PASSWORD=solven -e POSTGRES_DB=solven -p 5432:5432 -v solven-db:/var/lib/postgresql postgres:18
   ```
   Las siguientes veces basta con `docker start solven-db`.
2. Arrancar la API desde `backend/` con el entorno virtual activo:
   ```bash
   fastapi dev app/main.py
   ```
3. Abrir la documentación en http://localhost:8000/docs y probar `GET /api/health`, que debe responder `{"status": "ok", "database": "ok"}`.

### Usuario de prueba

| Correo | Contraseña |
|---|---|
| `admin@mail.com` | `admin1234` |

La base de datos empieza vacía, así que la primera vez hay que crear el usuario con `POST /api/auth/register` desde `/docs`:

```json
{ "nombre": "Admin", "correo": "admin@mail.com", "contrasena": "admin1234" }
```

Después, en `/docs`, se presiona **Authorize** y se escribe el correo en `username` y la contraseña en `password`. Con eso, Swagger manda el token en cada petición y `GET /api/auth/me` devuelve los datos del usuario.

### Endpoints disponibles

| Método | Ruta | Descripción | Requiere token |
|---|---|---|---|
| GET | `/api/health` | Verifica la conexión con la base de datos | No |
| POST | `/api/auth/register` | Registra un usuario (JSON: `nombre`, `correo`, `contrasena`) | No |
| POST | `/api/auth/login` | Inicia sesión (formulario: `username` = correo, `password`) y devuelve el JWT | No |
| GET | `/api/auth/me` | Devuelve el usuario del token | Sí |

## Estado del avance

- [x] Repositorio con git flow (`main`, `develop`, `feature/*`)
- [x] Resumen ejecutivo, diagrama ER y diagrama de arquitectura
- [x] Configuración por variables de entorno (`.env.example`)
- [x] Base de FastAPI conectada a PostgreSQL con SQLModel y endpoint `/api/health`
- [x] Modelos de datos (usuarios, categorías, movimientos, recomendaciones)
- [x] Registro e inicio de sesión con JWT
- [ ] Registro de movimientos en lenguaje natural con Gemini
- [ ] Métricas e insights mensuales
- [ ] Frontend en React
- [ ] Docker Compose y despliegue


## Despliegue

Pendiente. El enlace se agregará cuando el proyecto esté desplegado.
