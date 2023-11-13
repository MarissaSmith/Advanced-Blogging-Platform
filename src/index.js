import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import the Provider
import store from './redux/store'; // Import your Redux store
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the App component with the Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

