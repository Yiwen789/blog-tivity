import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';



import GlobalStyle from './globalStyle';


class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <div>
          <GlobalStyle />
          <BrowserRouter basename="/blog-tivity">
            <div>
              <Header />
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/detail/:id" exact component={Detail}></Route>
                <Route path="/write" exact component={Write}></Route>
                <Route path="/login" exact component={Login}></Route>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider> 
      

    )
  }
}


export default App;
