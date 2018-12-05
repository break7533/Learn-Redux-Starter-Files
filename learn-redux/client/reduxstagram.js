import React from 'react';
import { render } from 'react-dom';
import BRouter from './components/Router';
import css from './styles/style.styl';
import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
	tags: {
		git_commit: '1234sas',
		userLevel: 'editor'
	}
}).install();

logException(new Error('download failed'), {
	email: 'wesbos@gmail.com'
});

Raven.captureMessage('Common error, just message me');
Raven.showReportDialog();

render(<BRouter />, document.getElementById('root'));
