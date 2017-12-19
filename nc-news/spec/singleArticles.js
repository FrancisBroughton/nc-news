import { expect } from "chai";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import fetchSingleArticle, {
  fetchSingleArticleRequest,
  fetchSingleArticleSuccess,
  fetchSingleArticleFailure
} from "../src/actions/SingleArticle.action";

const API_URL = "https://northcoders-news-api.herokuapp.com/api";
const id = "583412925905f02e4c8e6e01";
const mockStore = configureMockStore([thunk]);

describe("async action creators", () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe("fetchSingleArticle", () => {
    it.only("dispatches FETCH_SINGLE_ARTICLE_SUCCESS when fetching ArticleById reponds with 200 and data", () => {
      nock(API_URL)
        .get(`/api/articles/${id}`)
        .reply(200, { ArticleById: [1, 2, 3] });

      const expectedActions = [
        fetchSingleArticleRequest(),
        fetchSingleArticleSuccess({ ArticleById: [1, 2, 3] })
      ];

      const store = mockStore();

      return store.dispatch(fetchSingleArticle(id)).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
    it("dispatches FETCH_SINGLE_ARTICLE_FAILURE when fetching ArticleById reponds with an error", () => {
      nock(API_URL)
        .get(`/api/articles/${id}`)
        .replyWithError({ message: "error" });

      const expectedActions = [
        fetchSingleArticleRequest(),
        fetchSingleArticleFailure("error")
      ];

      const store = mockStore();

      return store.dispatch(fetchSingleArticle(id)).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
});