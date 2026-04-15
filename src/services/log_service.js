/**
 * LogService for centralized diagnostic logging.
 * Environment controlled via isLoggingEnabled.
 */

const isLoggingEnabled = process.env.NODE_ENV === 'development';

class LogService {
  static info(message, data = {}) {
    if (isLoggingEnabled) {
      console.info(`[INFO] ${message}`, data);
    }
  }

  static warning(message, data = {}) {
    if (isLoggingEnabled) {
      console.warn(`[WARNING] ${message}`, data);
    }
  }

  static error(message, error = null) {
    if (isLoggingEnabled) {
      console.error(`[ERROR] ${message}`, error);
    }
    // Here you could integrate with Sentry or Bugsnag in production
  }
}

export default LogService;
