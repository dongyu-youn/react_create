import React, { Component } from "react";

class Control extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode("create");
              }.bind(this)}
            >
              create
            </a>
            {/* <a href="" onClick={funciton(e){
              e.preventDefault();
              this.props.onChangeMode
          }.bind(this)}>
            create
          </a> */}
          </li>
          <li>
            <a href="">update</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Control;
