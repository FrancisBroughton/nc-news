import axios from "axios";
import * as types from "./types";
 
const API_URL = "https://northcoders-news-api.herokuapp.com/api";
 
export const fetchSingleArticleRequest = () => ({
  type: types.FETCH_SINGLE_ARTICLE_REQUEST
 });
 
export const fetchSingleArticleSuccess = data => ({
  type: types.FETCH_SINGLE_ARTICLE_SUCCESS,
  data: data
});

export const fetchSingleArticleFailure = error => ({
  type: types.FETCH_SINGLE_ARTICLE_FAILURE,
  data: error
});

export default id => {
  return dispatch => {
    dispatch(fetchSingleArticleRequest());
    return axios
      .get(`${API_URL}/articles/${id}`)
      .then(res => {
        console.log('check', res.data)
        dispatch(fetchSingleArticleSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchSingleArticleFailure(error.message));
      });
  };
};