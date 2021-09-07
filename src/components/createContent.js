import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <div>
        <h1>create</h1>
        <form
          action=""
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title" />
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit" value="" />
          </p>
        </form>
      </div>
    );
  }
}

export default CreateContent;
