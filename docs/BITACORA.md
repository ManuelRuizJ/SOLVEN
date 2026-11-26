**Fecha:** 18 de noviembre de 2026  
**Equipo:** Jesus, Sebas y Antonio

---

## 1. REGISTRO DE ACTIVIDADES POR INTEGRANTE

### Antonio
* Configuración inicial del git flow en el repo de jesus y publicación de develop.
* Carga del resumen ejecutivo que mandé en la inscripción a la expo en la carpeta docs/
* Diseño del diagrama de arquitectura
* Creación del .gitignore del proyecto
* Estructura de la bitácora

## Jesus
* Creación del repo en GitHub y gestión de colaboradores (Antonio, Sebas (y el profe))
* Estructura inicial del proyecto: carpetas `docs/`, `backend/` y `frontend/` con su README
* Diagrama entidad-relación con las tablas usuarios, categorias, movimientos y recomendaciones (fuente `.drawio` y PNG)
* `requirements.txt` y `.env.example` del backend, sin secretos
* Base de FastAPI con configuración por variables de entorno (Pydantic Settings), CORS y endpoint `/api/health`
* Base de datos PostgreSQL 18 en un contenedor de Docker
* Conexión a la base con SQLModel (`crear_tablas()` y `SessionDep`, como en clase)
* Modelos de datos en SQLModel según el diagrama ER, con relaciones y llaves foráneas
* Autenticación: registro (`/api/auth/register`), inicio de sesión con JWT (`/api/auth/login`), contraseñas cifradas con bcrypt y ruta protegida `/api/auth/me`
* README del proyecto: integrantes, tecnologías, instalación, variables de entorno, cómo correrlo en local, usuario de prueba y estado del avance
* Trabajo con git flow: ramas `feature/*` integradas a `develop` mediante pull requests (#1 a #4)


##Sebas

---
## 2. Declaración de IA

###Antonio
* **Herramientas utilizadas:** Gemini y Gemini
* **Propósito del uso**
    *Claude la utilicé más que nada antes de mandar el resumen a la expo. Teníamos que hacer una introducción larga y con fuentes, entonces me apoyé más de la IA para rellenar esos espacios
    *Gemini para resolver mis dudas sobre el flujo del trabajo con Git