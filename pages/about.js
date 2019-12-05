import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import { Row, Col } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <BaseLayout
        title="Shaun Collins - Learn about Ajax27"
        {...this.props.auth}
      >
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">
                  Feel free to read short description about me.
                </p>
                <img style={{ borderRadius: '50%' }} src={'/static/images/ajax27me.png'} />
              </div>
            </Col>
            <Col md="6">
              <div className="fadein about">
                <p>
                  My name is Shaun Collins and I am self taught software
                  engineer and freelance developer.{" "}
                </p>
                <p>
                  I have been building Websites and applications for
                  several years and working on a wide range of
                  technologies and projects from PHP development for E-Commerce
                  platforms to modern mobile and web applications in React, Angular, Express and
                  Node.
                </p>
                <p>
                  I started my working career in the British Army joining the Junior Leaders Regiment Royal
                  Engineers at Dover Barracks and went on to serve in just about every continent on earth
                  meeting many different people and experiencing the many cultures that come with that.
                </p>
                <p>
                  After leaving the army several years later I went on to serve in a private capacity for several
                  governments and agencies but still in the security business.
                  About 4 years ago after being wounded I decided to try something different, something constructive
                  and after buying my first laptop I decided to teach myself to code.
                </p>
                <p>
                  My other interests include Rugby Union, Rock Climbing and on occasion packing my rucksack and
                  getting back to nature!
                </p>
              </div>
            </Col>
          </Row>
          <span className="service-link">Business Site: {' '}{' '} &copy; 2016 - 2019
              <a className="footer" href="https://ajax27.com">&nbsp; Ajax27.com</a>
          </span>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
