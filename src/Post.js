import React, { Component } from "react";

class Post extends Component {
  state = {
    post: ""
  };

  componentDidMount() {
    let id = this.props.match.params.post_id;
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(res => res.json())
      .then(post => {
        return this.setState({
          post: post
        });
      });
  }
  render() {
    const { title, body } = this.state.post;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
