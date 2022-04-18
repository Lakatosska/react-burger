import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/app/app';
import './index.css';
import { rootReducer } from './services/reducers/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));