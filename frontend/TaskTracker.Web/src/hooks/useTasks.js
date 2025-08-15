import { useEffect, useState, useCallback } from 'react';
import { getTasks, createTask } from '../api/tasksApi';
import { logger } from '../utils/logger';

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e?.message || 'Error obteniendo tareas');
    } finally {
      setLoading(false);
    }
  }, []);

  const addTask = useCallback(async (payload) => {
    setSubmitting(true);
    setError('');
    try {
      await createTask(payload);
      await fetchTasks(); // re-sync
      logger.debug('Task added and refreshed list');
      return true;
    } catch (e) {
      setError(e?.message || 'Error creando la tarea');
      return false;
    } finally {
      setSubmitting(false);
    }
  }, [fetchTasks]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return { tasks, loading, error, submitting, fetchTasks, addTask };
}
