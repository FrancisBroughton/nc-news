import axios from "axios";
import * as types from "./types";
 
const API_URL = "https://northcoders-news-api.herokuapp.com/api";
 
export const fetchSingleArticleRequest = () => ({
  type: types.FETCH_SINGLE_ARTICLE_REQUEST
 });
 
export const fetchSingleArticleSuccess = data => ({
  type: types.FETCH_SINGLE_ARTICLE_SUCCESS,
  payload: data
});

export const fetchSingleArticleFailure = error => ({
  type: types.FETCH_SINGLE_ARTICLE_FAILURE,
  payload: error
});

export default id => {
  return dispatch => {
    dispatch(fetchSingleArticleRequest());
    return axios
      .get(`${API_URL}/Articles/${id}`)
      .then(res => {
        dispatch(fetchSingleArticleSuccess(res.data.articles));
      })
      .catch(error => {
        dispatch(fetchSingleArticleFailure(error.message));
      });
  };
};