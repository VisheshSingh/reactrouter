import React, { Component } from "react";

class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => {
        return this.setState({
          posts: posts
        });
      });
  }
  render() {
    const { posts } = this.state;
    let postList = posts.length ? (
      posts.map(post => {
        return (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })
    ) : (
      <p>Loading posts...</p>
    );
    return (
      <div className="home">
        <h1>Home</h1>
        <div>{postList}</div>
      </div>
    );
  }
}

export default Home;
