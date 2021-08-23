import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

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
          <img className='banner-img' src="https://source.unsplash.com/random/625x270" />
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
}

export default Home;
