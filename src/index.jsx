import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'core-js/stable';
import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
// info - import dependecy
import { App } from './views/app/App';
import './views/app/app.scss';
import './i18n';

ReactDOM.render(
    <Suspense fallback={null}>
        <App />
    </Suspense>,
    document.getElementById('app')
);

// info - pwa service worked active
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
