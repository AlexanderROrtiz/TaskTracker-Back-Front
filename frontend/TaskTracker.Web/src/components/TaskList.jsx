export default function TaskList({ tasks, loading }) {
  if (loading) return <div className="muted">Cargando tareas...</div>;
  if (!tasks?.length) return <div className="muted">No hay tareas aún.</div>;

  return (
    <ul className="list">
      {tasks.map(t => (
        <li key={t.id} className="item">
          <div className="title">{t.name}</div>
          {t.description ? <div className="desc">{t.description}</div> : null}
          <div className="id">ID: {t.id}</div>
        </li>
      ))}
    </ul>
  );
}
