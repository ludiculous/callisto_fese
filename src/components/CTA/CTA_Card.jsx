import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

export class CTA_Card extends Component {
  renderFeatures() {
    return (
      this.props.features.map((feature, index) => {
        return (<li key={index}>{feature}</li>)
      })
    )
  }

  render() {
    return (
      <Col xs={this.props.size} className="CTA_Card">
        <div className="CTA_Card_Top CTA_Card_Section">
          <span className="CTA_Category CTA_Card_Section">{this.props.category}</span>
          <span className="CTA_Title"><strong>Callisto </strong>{this.props.title}</span>
          <p className="CTA_Description">{this.props.description}</p>
          <span>Features Include:</span>
          <ul className="CTA_Features">{this.renderFeatures()}</ul>
        </div>
        <div className="CTA_Card_Bottom">
          <button className="CTA_Button">{this.props.btnTxt}</button>
        </div>
      </Col>
    )
  }
}

export default CTA_Card;