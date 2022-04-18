import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import App from './components/app/app';
import './index.css';
import { rootReducer } from './services/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Redux DevTools 
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 

// расширитель хранилища
const enhancer = composeEnhancers(applyMiddleware(thunk));

// инициализируем хранилище
const store = createStore(rootReducer, enhancer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));