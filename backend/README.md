# TaskTracker API

## 🧩 Descripción
TaskTracker es una **API REST construida con .NET 8** siguiendo principios de **Clean Architecture** y **SOLID**. Permite la **creación y consulta de tareas** con trazabilidad y una arquitectura lista para escalar.

Actualmente usa un **repositorio en memoria**, pero puede migrarse fácilmente a SQL Server, PostgreSQL o MongoDB sin tocar la lógica de negocio.

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
cd TaskTracker-Back-Front/backend

## Restaurar dependencias
dotnet restore

### Ejecutar API
dotnet run --project TaskTracker.Api

### Probar endpoints
http://localhost:7107/swagger

### 🐳 Docker

docker build -t tasktracker-api .

### Ejecutar contenedor
docker run -d -p 7107:7107 --name tasktracker-api tasktracker-api

## Contacto
Cualquier duda o inquietud sobre el proyecto estare atento al chat en Linkedin: https://www.linkedin.com/in/roberth-ortiz-b526331a9/

¡Gracias por visitar este proyecto!