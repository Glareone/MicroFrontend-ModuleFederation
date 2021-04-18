import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

window.renderCats = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  serviceWorkerRegistration.unregister();
};

window.unmountCats = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Cats-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorkerRegistration.unregister();
}