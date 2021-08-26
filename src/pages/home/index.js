import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { BackTop } from './style';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style';

class Home extends PureComponent {
  
  handleScrollTop () {
    window.scrollTo(0, 0);
  }

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
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
        
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollShow) 
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
      dispatch(actionCreators.getHomeInfo());
  },
  changeScrollShow() { 
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.toggleScroll(true))
      } else {
        dispatch(actionCreators.toggleScroll(false))
      }
  }
});

export default connect(mapStateToProps, mapDispatch)(Home);
