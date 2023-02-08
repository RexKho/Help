import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session';
import * as businessActions from './store/business';
import { ModalProvider } from './context/modal';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter5Adapter } from 'use-query-params/adapters/react-router-5';
const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.businessActions = businessActions;
}

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

function Root() {
  return (
    <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>
          <QueryParamProvider adapter={ReactRouter5Adapter}>
            <App />
          </QueryParamProvider>
        </BrowserRouter>
      </Provider>
    </ModalProvider>
  );
}

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}