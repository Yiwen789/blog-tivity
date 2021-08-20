import React, { Fragment, Component } from 'react';
import GlobalStyle from './globalStyle';
import Header from './common/header';


class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
      </Fragment>

    )
  }
}


export default App;
