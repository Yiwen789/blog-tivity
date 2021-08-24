import { fromJS } from 'immutable'; //js对象转化为immutable对象

const defualtState = fromJS({
  topicList: [{
    id: 1,
    title: 'World News',
    imgUrl: 'https://source.unsplash.com/random/32x32'
  },
  {
    id: 2,
    title: 'Art',
    imgUrl: 'https://source.unsplash.com/random/32x32'
  }],
  articleList: [{
    id: 1,
    title: 'I am a title',
    description: 'I am the description',
    imgUrl: 'https://source.unsplash.com/random/150x100'
  }]
});

export default (state = defualtState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}