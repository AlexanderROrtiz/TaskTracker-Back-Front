// Logger liviano con niveles, timestamps y traceId por sesión.
// Único punto para trazabilidad en el front.

const LEVELS = { debug: 10, info: 20, warn: 30, error: 40 };
const currentLevel = (import.meta.env.VITE_LOG_LEVEL || 'info').toLowerCase();

function getTraceId() {
  const key = 'tt_trace_id';
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
    localStorage.setItem(key, id);
  }
  return id;
}

function log(level, message, meta) {
  if (LEVELS[level] < LEVELS[currentLevel]) return;
  const time = new Date().toISOString();
  const trace = getTraceId();
  const payload = { time, level, trace, message, ...meta };

  // Consola
  /* eslint-disable no-console */
  if (level === 'error') console.error('[TaskTracker]', payload);
  else if (level === 'warn') console.warn('[TaskTracker]', payload);
  else if (level === 'info') console.info('[TaskTracker]', payload);
  else console.log('[TaskTracker]', payload);

  // Aquí podrías enviar a un backend de logs (fetch a /logs)
}

export const logger = {
  debug: (msg, meta = {}) => log('debug', msg, meta),
  info:  (msg, meta = {}) => log('info', msg, meta),
  warn:  (msg, meta = {}) => log('warn', msg, meta),
  error: (msg, meta = {}) => log('error', msg, meta),
  getTraceId,
};
