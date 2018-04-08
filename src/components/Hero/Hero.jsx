import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Portrait from "assets/img/person1.png";
import {Motion, spring} from "react-motion";

class Hero extends Component {

  render() {
    return (
      <Grid fluid className="Section Hero">
       <div className="Hero_Portrait">
        <img src={Portrait} />
       </div>

        <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {damping: 100})}}>
          {(style) => (
            <div className="Hero_CTA"
              style={{
                opacity: style.opacity
              }}
            >
              <h2 className="Hero_CTA_Title">Tech to Combat Sexual Assault</h2>
              <p className="Hero_CTA_Description">We are stronger. Together.</p>
              <button className="Hero_CTA_Btn"><a href="#"> Learn more </a></button>
            </div>
          )}
        </Motion>

        <Motion defaultStyle={{x: 2000, opacity: 0}} style={{x: spring(0, {stiffness:120, damping: 40}), opacity: spring(1, {stiffness:120, damping: 60})}}>
          {(style) => (
          <div className="Hero_Quote"
            style={{
              transform: `translateX(${style.x}px)`,
              opacity: style.opacity
            }}>
            <p>&#39; why are you questioning the victom here?
            let&apos;s flip it. let&apos;s talk about what the predator is doing.  &#39;</p>
            <div className="h-line"></div>
          </div>
          )}
        </Motion>
      </Grid>
    )
  }
}

export default Hero;

