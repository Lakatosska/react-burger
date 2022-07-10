import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './services/store';
import { App } from './components/app/app';

import './index.css';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, 
  document.getElementById('root'));