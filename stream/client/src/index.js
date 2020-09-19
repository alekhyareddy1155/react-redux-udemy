import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';


import { Provider } from 'react-redux';
import { createStore } from 'redux';

// const store=createStore(reducers);

const store = createStore(reducers, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
);