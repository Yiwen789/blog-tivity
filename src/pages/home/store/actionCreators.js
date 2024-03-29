import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  writerList: result.writerList, 
})

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage: nextPage
}) 

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/blog-tivity/api/home.json').then((res) => {
      const result = res.data.data;
      
      dispatch(changeHomeData(result));
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    console.log('click');
    axios.get('/blog-tivity/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      console.log(result);
      dispatch(addHomeList(result, page + 1));
    })
  }
} 

export const toggleScroll = (show) => ({
  type: constants.TOGGLE_SCROLL,
  show
})