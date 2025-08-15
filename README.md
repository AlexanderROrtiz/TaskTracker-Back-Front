# 📝 TaskTracker - Fullstack App (.NET 8 + React/Vite)

TaskTracker es una aplicación **Fullstack** compuesta por:

- **Backend:** API REST en **.NET 8** con Clean Architecture.
- **Frontend:** Aplicación **React** (Vite) que consume la API.

El objetivo es permitir la **creación** y **consulta** de tareas con una arquitectura lista para escalar y un despliegue simple mediante **Docker Compose**.



## 📂 Estructura del Proyecto

/backend → TaskTracker API (.NET 8, Clean Architecture)
/frontend → TaskTracker Web (React + Vite)
/docker-compose.yml → Orquestación para levantar ambos servicios


Cada carpeta tiene su propio `README.md` con detalles específicos.


## 🚀 Funcionalidades

- **Backend (.NET 8)**
  - Crear tareas (`POST /api/tasks`)
  - Listar tareas (`GET /api/tasks`)
  - Validaciones y logging (`ILogger`)
  - Arquitectura limpia y desacoplada

- **Frontend (React/Vite)**
  - Crear tareas desde formulario
  - Listar tareas existentes
  - Custom Hook `useTasks`
  - Logger con niveles (`debug`, `info`, `warn`, `error`)



## 🔧 Requisitos

- **Docker** y **Docker Compose** instalados
- (Opcional) `.NET 8 SDK` y **Node.js 18+** para correr localmente



## 🐳 Despliegue con Docker Compose

Levantar **backend y frontend** juntos:


docker-compose up --build

## 🔍 Despliegue individual

## Backend
cd backend
docker build -t tasktracker-api .
docker run -d -p 5000:8080 tasktracker-api

## Frontend
cd frontend
docker build --build-arg VITE_API_BASE_URL=http://localhost:5000 -t tasktracker-web .
docker run -d -p 5173:80 tasktracker-web

## Contacto
Cualquier duda o inquietud sobre el proyecto estare atento al chat en Linkedin: https://www.linkedin.com/in/roberth-ortiz-b526331a9/

¡Gracias por visitar este proyecto!
