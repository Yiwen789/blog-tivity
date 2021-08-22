import React, { Component } from 'react';
import GlobalStyle from './globalStyle';
import Header from './common/header';

import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Header />
      </Provider>

    )
  }
}


export default App;
