import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <div key={post.id} className="card post">
            <img
              src={`http://robohash.org/${post.id}?set=set2`}
              alt={`robot${post.id}`}
            />
            <div className="content">
              <Link to={"/" + post.id}>
                <h2 className="title">{post.title}</h2>
              </Link>
              <p className="body">{post.body}</p>
            </div>
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
