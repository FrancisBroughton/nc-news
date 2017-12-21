import { combineReducers } from "redux";

import articles from "./articles.reducer";
import eachArticle from "./eachArticle.reducer";

const reducer = combineReducers({
articles,
eachArticle,

});

export default reducer;