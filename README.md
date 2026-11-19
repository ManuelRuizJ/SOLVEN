# SOLVEN

# Resumen del proyecto SOLVEN

**SOLVEN** es una plataforma web orientada a la gestión, administración y análisis de finanzas personales. Su objetivo es ofrecer a los usuarios una herramienta que les permita registrar ingresos, gastos, cuentas bancarias, tarjetas de crédito, deudas y presupuestos, así como visualizar su comportamiento financiero mediante indicadores, reportes y recomendaciones personalizadas.

El desarrollo del proyecto se fundamenta en la importancia de las **interfaces de programación de aplicaciones (APIs)** como mecanismos de comunicación e integración entre los diferentes componentes de un sistema. A través de una API REST desarrollada con **FastAPI**, el frontend construido con **React** puede comunicarse con el backend, solicitar información, registrar movimientos financieros y consultar resultados de análisis de manera estructurada y segura.

La conexión entre estos componentes permite establecer una arquitectura organizada en la que cada tecnología cumple una función específica. **PostgreSQL** se encarga del almacenamiento y administración de la información; el backend procesa las solicitudes, aplica las reglas de negocio y realiza los cálculos financieros; mientras que el frontend presenta los datos mediante una interfaz intuitiva y accesible.

Asimismo, el proyecto contempla la integración de una API externa de inteligencia artificial, cuya función será interpretar los indicadores financieros previamente calculados por el sistema y generar explicaciones, observaciones y recomendaciones personalizadas. Esto demuestra cómo las APIs facilitan la incorporación de servicios externos y amplían las capacidades de una aplicación sin necesidad de desarrollar todas sus funcionalidades desde cero.

En este sentido, SOLVEN busca demostrar la relevancia de la creación de  APIs para lograr la interoperabilidad, modularidad, escalabilidad e integración de tecnologías dentro de un proyecto de software. La comunicación eficiente entre el frontend, backend, base de datos y servicios externos permite construir una solución integral, donde los datos no solamente se almacenan, sino que se procesan y transforman en información útil para apoyar la toma de decisiones financieras.

## Estructura del repositorio

```
solven/
├── docs/        # Arquitectura, modelo de datos, contrato de la API, indicadores y declaración de uso de IA
├── backend/     # API REST con FastAPI + SQLAlchemy + Alembic + PostgreSQL
└── frontend/    # Interfaz con React (Vite)
```

Cada carpeta tiene un `README.md` con lo que va ahí. Docker (`Dockerfile` y `docker-compose.yml`) se agrega cuando se vea en clase.

## TODO
- [ ] Alcance MVP, equipo y roles
- [ ] Cómo correrlo en local (ver `backend/README.md` y `frontend/README.md`)
- [ ] Cómo correrlo con Docker (`docker compose up --build`)
- [ ] Enlace al despliegue




# TODO: modelado de datos, daigrama