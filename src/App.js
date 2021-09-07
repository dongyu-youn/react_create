import React, { Component } from "react";
import Subject from "./components/Subject";
import Menu from "./components/Menu";
import Text from "./components/Text";
import Control from "./components/Control";
import CreateContent from "./components/createContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "read",
      welcome: { title: "welcome", sub: "World Web Wide" },
      subject: { title: "Web", sub: "World Wid Websa" },
      contents: [
        { id: 1, title: "HTML", desc: "Hi im HmTLML " },
        { id: 2, title: "CSS", desc: "Hi im HmTLML " },
        { id: 3, title: "JS", desc: "Hi im HmTLML " },
      ],
    };
  }

  render() {
    var _title = null;
    var _desc = null;
    var _article = null;
    console.log(_title);
    if (this.state.mode === "read") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.sub;
    } else if (this.state.mode === "welcome") {
      _title = this.state.contents[1].title;
      _desc = this.state.contents[1].desc;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            this.state.contents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
          }}
        ></CreateContent>
      );
    }
    return (
      // Only html
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
        ></Subject> */}
        <header>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
              this.setState({
                mode: "welcome",
              });
            }.bind(this)}
          >
            {this.state.subject.title}
          </a>
          <h3> {this.state.subject.sub}</h3>
        </header>
        <Menu
          data={this.state.contents}
          onChangePage={function (e) {
            this.setState({ mode: "read" });
          }.bind(this)}
        ></Menu>{" "}
        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        ></Control>
        {_article}
        <div title={_title} desc={_desc}>
          <h4>{this.props.title}</h4>hello world
          {this.props.desc}
        </div>{" "}
      </div>
    );
  }
}

export default App;
