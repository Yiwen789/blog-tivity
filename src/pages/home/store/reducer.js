import { Container } from '@material-ui/core';
import { fromJS } from 'immutable'; //js对象转化为immutable对象
import * as constants from './constants';

const defualtState = fromJS({
  topicList: [] ,
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writerList: fromJS(action.writerList)
  }); 
};

const addArticleList = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.list),
    'articlePage': action.nextPage
  });
}

export default (state = defualtState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case constants.TOGGLE_SCROLL:
      return state.set('showScroll', action.show);
     default:
      return state;
  }
}