import React from "react";
import fetchSingleArticle from "../actions/fetchSingleArticle.actions";
import { connect } from "react-redux";

class SingleArticle extends React.Component {
  componentDidMount() {
    this.props.fetchSingleArticle(this.props.match.params.id);
  }

  render() { 
    console.log('hello', this.props)
    return (
      
      <div>
        <h1> article</h1>
          <p>{this.props.article}</p>
        {/* <div>
          {this.props.articles && this.props.articles.map(article => {
            {
              if (article._id === this.props.match.params.articles_id) {
                return (
                  <div >
                    <strong>{article.title} </strong>

                    <p>{article.body}</p>
                    <p>
                      <small>{article.created_by}</small>
                    </p>
                    <div>
                      <p>{article.votes}</p>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //comments: state.comments.data,
  article: state.data,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  fetchSingleArticle: id => {
    dispatch(fetchSingleArticle(id));
  }
  // fetchComments: id => {
  //   dispatch(fetchComments(id));
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle);