import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useTasks } from '../hooks/useTasks';

export default function TasksPage() {
  const { tasks, loading, error, submitting, addTask } = useTasks();

  return (
    <div className="container">
      <header>
        <h1>TaskTracker – Tareas</h1>
        <p className="muted">Crea y visualiza tareas (React + .NET 8)</p>
      </header>

      <TaskForm onSubmit={addTask} submitting={submitting} />

      {error ? <div className="error" role="alert">{error}</div> : null}

      <section>
        <h2>Listado</h2>
        <TaskList tasks={tasks} loading={loading} />
      </section>
    </div>
  );
}
