import * as types from './types';
import axios from 'axios';
// export const toggleTest = () => ({
//   type: types.TOGGLE_TEST
// });


const API_URL = "https://olie-chan-nc-news.herokuapp.com";

export const fetchArticlesRequest = () => ({
  type: types.FETCH_ARTICLES_REQUEST
});

export const fetchArticlesSuccess = (data) => ({
  type: types.FETCH_ARTICLES_SUCCESS,
  payload: data
});

export const fetchArticlesFailure = (error) => ({
  type: types.FETCH_ARTICLES_FAILURE,
  payload: error
});
    
export default () => {
    return (dispatch) => {
      dispatch(fetchArticlesRequest());
      return axios.get(`${API_URL}/api/articles`)
        .then(res => {
          console.log('****',res.data)
          dispatch(fetchArticlesSuccess(res.data.articles));
        })
        .catch(error => {
          dispatch(fetchArticlesFailure(error.message));
    });
  };
}