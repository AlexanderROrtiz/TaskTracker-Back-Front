import { CONFIG } from '../config';
import { logger } from '../utils/logger';

//const base = `${CONFIG.API_BASE_URL}/api/${CONFIG.API_VERSION}/tasks`;
const base = `${CONFIG.API_BASE_URL}/api/tasks`;

export async function getTasks() {
  const t0 = performance.now();
  try {
    logger.info('GET /tasks - request');
    const res = await fetch(base, {
      headers: {
        'Accept': 'application/json',
        'X-Trace-Id': logger.getTraceId(),
      },
    });

    if (!res.ok) {
      const text = await res.text();
      logger.warn('GET /tasks - non-ok', { status: res.status, text });
      throw new Error(`Error ${res.status}: ${text || 'No content'}`);
    }

    const data = await res.json();
    logger.info('GET /tasks - success', { count: Array.isArray(data) ? data.length : 0, ms: (performance.now() - t0).toFixed(1) });
    return data;
  } catch (err) {
    logger.error('GET /tasks - fail', { error: err?.message });
    throw err;
  }
}

export async function createTask({ name, description }) {
  const t0 = performance.now();
  try {
    logger.info('POST /tasks - request', { nameLength: name?.length || 0 });
    const res = await fetch(base, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Trace-Id': logger.getTraceId(),
      },
      body: JSON.stringify({ name, description }),
    });

    const contentType = res.headers.get('content-type') || '';
    const body = contentType.includes('application/json') ? await res.json() : await res.text();

    if (!res.ok) {
      logger.warn('POST /tasks - non-ok', { status: res.status, body });
      throw new Error(typeof body === 'string' ? body : (body?.message || 'Error creando la tarea'));
    }

    logger.info('POST /tasks - success', { ms: (performance.now() - t0).toFixed(1) });
    return body;
  } catch (err) {
    logger.error('POST /tasks - fail', { error: err?.message });
    throw err;
  }
}
