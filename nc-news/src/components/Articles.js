import React from "react";
import { connect } from "react-redux";
import PT from "prop-types";
import fetchArticles from "../actions/fetchArticles.actions";
import { Link } from "react-router-dom"

class Articles extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    console.log('hello', this.props)
    return (
      <div>
        <h2>hello</h2>

       <p>{this.props.articles && this.props.articles.map((article, i) => {
          return (
            <ul>
              <li>{article._id}</li>
              <li>{article.title}</li>
              <li>{article.body}</li>
              <li>{article.created_by}</li>
              <li>{article.belongs_to}</li>
              <li>{article.votes}</li>
              <div className="box">
                <Link to={`/articles/${article._id}`} key={article._id}>
                  {article.title}
                </Link>
              </div>
            </ul>
          )
        })}
        </p> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.data,
  loading: state.loading,
  error: state.error
});

Articles.propTypes = {
    articles: PT.array.isRequired,
    loading: PT.bool.isRequired,
    error: PT.any,
    fetchArticles: PT.func.isRequired
  };

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => {
    dispatch(fetchArticles());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);