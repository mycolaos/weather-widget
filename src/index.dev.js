import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.dev';

// import configureStore from './store/configureStore.dev'
// const store = configureStore()

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(Root)
if (module.hot) module.hot.accept('./Root.dev', () => {
  render(Root)
});
