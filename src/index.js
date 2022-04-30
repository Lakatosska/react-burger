import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.css';
import { Provider } from 'react-redux';
import { store } from '../src/services/store';



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));