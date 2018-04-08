import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Content from "components/Content/Content";
import Hero from "components/Hero/Hero";
import CTA from "components/CTA/CTA";


class Home extends React.Component {
  render() {
    return (
      <div className="Main__Container">
        <Grid fluid className="Section">
          <Hero />
          <Content />
          <CTA />
        </Grid>
      </div>
    )
  }
}

export default Home;