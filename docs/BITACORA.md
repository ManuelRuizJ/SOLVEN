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
* Creación de feature/frontend para trabajar independiente.
* Configuracion de las rutas y estructura de las carpetas del front
* Variables de entorno para la comunicación con el backend.
* Implementación del cliente HTTP y los servicios de autenticación.
* Implementación del contexto de autenticación mediante JWT para administrar la sesión del usuario
* Desarrollo del front con un diseño estilo Liquid Glass inspirado en mi ASE 3 para darle el toque moderno
* Desarrollo del login y conexión con el servicio de auth del backend
* Interfaz del registro y formularios
* Implementación de rutas protegidas y control de acceso a las páginas privadas.
* Integración de los cambios de develop en feature/frontend para realizar pruebas de comunicación con el backend
* Hice un entrono local con Docker, Postgre y FastAPI para probar los auth en el login
* Implementación del sidebar, navegacion entre módulos y logout
* Desarrollo de: cuentas, movimientos, categorías, presupuesto y análisis financiero (con Recharts para las gráficas de ingresos y gastos)




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

### Antonio
* **Herramientas utilizadas:** Gemini y Chat
* **Propósito del uso**
    *Claude la utilicé más que nada antes de mandar el resumen a la expo. Teníamos que hacer una introducción larga y con fuentes, entonces me apoyé más de la IA para rellenar esos espacios
    *Gemini para resolver mis dudas sobre el flujo del trabajo con Git
    *Chat generó el estilo CSS para que la interfaz luciera estilo liquid glass.
    *Sugirió Recharts para visualizar de forma sencilla las finanzas.
    *Me ayudó a resolver mis conexiones al configurar mi docker y el front con FastAPI. Más que nada funcionó para tener una mayor comprensión del funcionamiento de docker.
