import React, { Component } from "react";
import {Motion} from "react-motion";

class Text_Block extends Component {

  render() {
    let align = this.props.align == "right" ? "align_right" : "align_left";
    let self = this;

    return (
      <div className={`Text_Block ${align}`}>
        <Motion defaultStyle={this.props.defaultStyles[0]} style={this.props.intStyles[0]}>
          {(style) => (
            <span className="Text_Block_Title" style={{marginLeft: style.marginLeft, opacity: style.opacity}}>{self.props.title}</span>
          )}
        </Motion>
        <Motion defaultStyle={this.props.defaultStyles[1]} style={this.props.intStyles[1]}>
          {(style) => (
            <p className="Text_Block_Description" style={{opacity: style.opacity}}>{self.props.description}</p>
          )}
        </Motion>
        <Motion defaultStyle={this.props.defaultStyles[2]} style={this.props.intStyles[2]}>
          {(style) => (
            <button className="Text_Block_Btn" style={{opacity: style.opacity}}><a>Learn more</a></button>
          )}
        </Motion>
        <Motion defaultStyle={this.props.defaultStyles[3]} style={this.props.intStyles[3]}>
          {(style) => (
            <span className="Text_Block_Number" style={{left: style.left, opacity: style.opacity}}>{self.props.number}</span>
          )}
        </Motion>
      </div>
    );
  }
}

export default Text_Block;
