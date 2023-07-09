import React from 'react';
import ReactDOM from 'react-dom/client';
import { Wrapper, type Status } from '@googlemaps/react-wrapper';
import { Provider } from 'react-redux';
import { store } from 'store';
import { App } from './App';
import './global-styles.module.css';

const render = (status: Status) => <h1>{status}</h1>;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Wrapper apiKey={process.env.REACT_APP_MAP_KEY} render={render}>
      <Provider store={store}>
        <App />
      </Provider>
    </Wrapper>
  </React.StrictMode>,
);
