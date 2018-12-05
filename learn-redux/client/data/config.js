import Raven from 'raven-js';

const sentry_key = '14548a59cc5a48f8a1ef6b18b92e3acf';
const sentry_app = '1338120';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
