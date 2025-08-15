# 🧭 TaskTracker Web (Frontend)

Aplicación React que consume la API **TaskTracker (.NET 8)** para crear y listar tareas. 
Construida con **buenas prácticas**: separación por capas (API, hooks, componentes, páginas), logger centralizado y manejo de errores robusto.

## ✅ Funcionalidades
- Crear una tarea (`name`, `description`)
- Listar tareas existentes
- Manejo de estado con `useState` y `useEffect` (y `useTasks` como custom hook)
- Trazabilidad con `logger` (niveles: `debug|info|warn|error`)
- Sin librerías externas (solo React + fetch)

## 🗂 Estructura
src/
api/ # Llamadas HTTP al backend
hooks/ # Custom hooks (useTasks)
components/ # UI reusable (TaskForm, TaskList)
pages/ # Pantallas (TasksPage)
utils/ # logger.js
config.js # Variables de configuración (API base, versión)


## 🔧 Requisitos
- Node.js 18+ (recomendado 20)
- Backend corriendo (por defecto en `http://localhost:7107` mapeado a .NET `8080` dentro del contenedor)

## 🚀 Desarrollo

cp .env.example .env
# Ajusta VITE_API_BASE_URL si es necesario
npm install
npm run dev

### 🧪 Endpoints consumidos

GET {API}/api/tasks

POST {API}/api/tasks

### 🐞 Trazabilidad y errores

El logger añade timestamp, level y traceId por sesión.

Configura el nivel con VITE_LOG_LEVEL en .env.

### 🐳 Docker

Build
docker build -t tasktracker-web --build-arg VITE_API_BASE_URL=http://localhost:5000 .

Run
docker run -d -p 5173:80 --name tasktracker-web tasktracker-web
# Front disponible en http://localhost:5173

