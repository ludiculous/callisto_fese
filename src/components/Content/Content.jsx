import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Text_Block from "./Text_Block";
import {TransitionMotion, spring, presets} from "react-motion";
import {ReactMotionLoop} from "react-motion-loop";
import {IntStyles, DefaultStyles} from "variables";

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false,
      rendered: false
    }
  }

  componentDidMount() {
    document.body.addEventListener("scroll", this.handleScroll.bind(this), false)
  }

  handleScroll(e) {
    let doc = document.documentElement;
    let height = window.innerHeight ;
    let top = document.body.scrollTop

    if(top >= (height - height / 4) && this.state.rendered == false) {
      this.setState({scrolled: true})
      this.setState({rendered: true});
    }

  };

  renderTextBlocks() {
    let blocks = [
      {
        title : "Who we are",
        description : "Callisto is a non-profit organization that creates technology to combat sexual assault and harassment. Our technology is designed to empower survivors with options to seek support and identify repeat perpetrators. Callisto Campus is our flagship online system, which enables student survivors to document and report sexual assault and help identify repeat perpetrators.",
        number: "O1",
        align: "left",
      },
      {
        title: "What we do",
        description : "Callisto's platform provides victims with trauma-sensitive options for reporting sexual assault and harassment. Currently in place across 13 partner campuses, Callisto is expanding in 2018 to serve professional industries.",
        number: "O2",
        align: "right",
      }
    ];

    if(this.state.scrolled) {
      return (
        blocks.map((block, index) => {
           window.removeEventListener("scroll", this.handleScroll.bind(this))
          return (<Text_Block key={index} title={block.title} description={block.description} number={block.number} align={block.align} defaultStyles={DefaultStyles[index]} intStyles={IntStyles[index]} />)
        })
      );
    } else {
      return (<div></div>)
    }
  }

  renderScroller() {
    let top;
    this.state.scrolled ? top = 60 : top = 50;

    return(
      <ReactMotionLoop
        styleFrom={{top: top}}
        styleTo={{top: spring(60, {stiffness: 120, damping:40})}}
      >
      {(style) => (
        <div className="Scroll_Down_Wrapper"
          style={{
            top: style.top
          }}
        >
          <span>Scroll</span>
          <span>Down</span>
          <div className="v-line"></div>
        </div>
      )}
      </ReactMotionLoop>
    )
  }

  render() {
    const self = this;

    return (
      <Grid fluid className="Section Content_Section">
        {this.renderScroller()}
        <Row className="Text_Block_Wrapper">
          {this.renderTextBlocks()}
        </Row>
      </Grid>
    )
  }
}

export default Content;