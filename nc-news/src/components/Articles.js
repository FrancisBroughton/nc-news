import React from "react";
import { connect } from "react-redux";

import fetchArticles from "../actions/fetchArticles";

class Articles extends React.Component {
  
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    console.log(this.props)
    return (
      <div>
      
        <p>articles here</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.data.payload,
  loading: state.data.loading,
  error: state.data.error
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => {
    dispatch(fetchArticles());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);