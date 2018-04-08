import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import CTA_Card from "./CTA_Card";
import {Card1, Card2} from "variables";

export class CTA extends Component {
  renderCards(){
    return(
      <Row className="CTA_Card_Wrapper">
        <CTA_Card category={Card1.category} title={Card1.title} description={Card1.description} features={Card1.features} btnTxt={Card1.btnTxt} size={Card1.size} first={Card1.first}/>
        <CTA_Card category={Card2.category} title={Card2.title} description={Card2.description} features={Card2.features} btnTxt={Card2.btnTxt} size={Card2.size}/>
      </Row>
    )
  }

  render() {
    return (
      <Grid fluid className="Section CTA_Wrapper CTA_Section">
        <Row className="CTA_Header_Wrapper">
          <span className="CTA_Header">Our Products</span>
        </Row>
        {this.renderCards()}
      </Grid>
    );
  }
}

export default CTA;