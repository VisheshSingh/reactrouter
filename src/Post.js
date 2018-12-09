import React, { Component } from "react";

class Post extends Component {
  state = {
    id: ""
  };

  componentDidMount() {
    let id = this.props.match.params.post_id;
    this.setState({
      id
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.id}</p>
      </div>
    );
  }
}

export default Post;
