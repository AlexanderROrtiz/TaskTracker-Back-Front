# TaskTracker API

## Descripción
TaskTracker es una **API REST construida con .NET 8** siguiendo principios de **Clean Architecture** y **SOLID**.
Su objetivo es permitir la **creación y consulta de tareas** de forma sencilla, pero con una arquitectura lista para escalar a entornos de producción.

Actualmente utiliza un **repositorio en memoria** para el almacenamiento de datos, pero gracias a la separación en capas, puede migrarse fácilmente a **SQL Server**, **PostgreSQL** o **MongoDB** sin modificar la lógica de negocio.


## 🚀 Funcionalidades
- **Crear tareas** mediante `POST /api/tasks`
- **Listar todas las tareas** mediante `GET /api/tasks`
- **Validaciones** para evitar datos incompletos
- **Trazabilidad y logging** con `ILogger`


## 🗂 Estructura del Proyecto

TaskTracker.sln

├── TaskTracker.Api # Capa de presentación (Controllers, configuración API)
├── TaskTracker.Application # Casos de uso, DTOs, servicios
├── TaskTracker.Domain # Entidades, interfaces, reglas de negocio
├── TaskTracker.Infrastructure # Persistencia en memoria (extensible a SQL/Mongo)

## 📡 Endpoints

### Crear Tarea
Para crear una nueva tarea, envía una solicitud `POST` al endpoint `/api/tasks` con el siguiente cuerpo en formato JSON:

**POST** /api/tasks

   json
{
  "name": "Task 1- Revisar reporte",
  "description": "Analizar métricas de ventas"
}

### Listar Tareas
Para obtener todas las tareas, realiza una solicitud `GET` al endpoint `/api/tasks`.

**GET** /api/tasks

[
  {
    "id": "b3c6e4a2-8b55-4c3e-8b67-91e4cb905f84",
    "name": "Task 1- Revisar reporte",
    "description": "Analizar métricas de ventas"
  }
]

### Instalación y Ejecución

git clone https://github.com/AlexanderROrtiz/TaskTracker-Back-Front.git
cd tasktracker

## Restaurar dependencias
dotnet restore

### Ejecutar API
dotnet run --project TaskTracker.Api

### Probar endpoints
https://localhost:5001/swagger

### Construir imagen DOCKER
docker build -t tasktracker-api .

### Ejecutar contenedor
docker run -d -p 5000:8080 --name tasktracker tasktracker-api

## Contacto
Cualquier duda o inquietud sobre el proyecto estare atento al chat en Linkedin: https://www.linkedin.com/in/roberth-ortiz-b526331a9/

¡Gracias por visitar este proyecto!