import { useState } from 'react';

export default function TaskForm({ onSubmit, submitting }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    const ok = await onSubmit({ name: name.trim(), description: description.trim() });
    if (ok) {
      setName('');
      setDescription('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Crear nueva tarea</h2>

      <label htmlFor="name">Nombre *</label>
      <input
        id="name"
        name="name"
        placeholder="Ej: Revisar reporte"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        disabled={submitting}
      />

      <label htmlFor="description">Descripción</label>
      <textarea
        id="description"
        name="description"
        placeholder="Detalles de la tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={submitting}
        rows={3}
      />

      <button type="submit" disabled={submitting || !name.trim()}>
        {submitting ? 'Guardando...' : 'Guardar'}
      </button>
    </form>
  );
}
