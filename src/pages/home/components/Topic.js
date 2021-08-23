import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img
            className='topic-pic'
            src='https://source.unsplash.com/random/32x32' />
          News
        </TopicItem>
        <TopicItem>
          <img
            className='topic-pic'
            src='https://source.unsplash.com/random/32x32' />
          News
        </TopicItem>
        <TopicItem>
          <img
            className='topic-pic'
            src='https://source.unsplash.com/random/32x32' />
          News
        </TopicItem>
        <TopicItem>
          <img
            className='topic-pic'
            src='https://source.unsplash.com/random/32x32' />
          News
        </TopicItem>
      </TopicWrapper>
    );
  }
}

export default Topic;