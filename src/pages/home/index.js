import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          {/* https://source.unsplash.com/ */}
          <img alt='' className='banner-img' src="https://source.unsplash.com/random/625x270" />
          <Topic />
          <List />

        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
  }
}


const mapDispatch = (dispatch) => ({
  changeHomeData() {
      const action = actionCreators.getHomeInfo();
      dispatch(action);
  }
});

export default connect(null, mapDispatch)(Home);
