import { combineReducers } from "redux";

import articles from "./articlesReducer";
import singleArticle from "./singleArticleReducer";
import topics from "./topicsReducer";

const reducer = combineReducers({

articles,
singleArticle,
topics,


});

export default reducer;