import React from "react";
import Typed from "react-typed";

import BaseLayout from "../components/layouts/BaseLayout";

import { Button, Container, Row, Col } from "reactstrap";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    };

    // this.roles = [
    //   "Developer",
    //   "Tech Lover",
    //   "Team Player",
    //   "Course Creator",
    //   "React.js",
    //   "Angular"
    // ];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 4000);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;
    return (
      <BaseLayout
        title="Ajax27 - Shaun Collins Home Page"
        className={`cover ${isFlipping ? "cover-1" : "cover-0"}`}
        {...this.props.auth}
        headerType="index"
      >
        <div className="main-section">
          <div className="background-image">
            {/* <img src="/static/images/background-index.png" /> */}
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? "isFlipping" : ""}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack JavaScript Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my Portfolio!
                        </div>
                      </div>
                      <img
                        className="image"
                        alt="Ajax27 Card"
                        src="/static/images/section-1a.png"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> JavaScript Node and React </h2>
                        <div className="hero-section-content-intro">
                          Everything that you need for quality Development!
                        </div>
                      </div>
                      <img
                        className="image"
                        alt="Ajax27 Card"
                        src="/static/images/section-1b.png"
                      />
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  {isAuthenticated && (
                    <h3 style={{ color: "#2d0166" }}>Welcome {user.name}</h3>
                  )}
                  <h1>
                    Welcome to the portfolio website of Ajax27. Get informed,
                    collaborate and discover projects I have been working on!
                  </h1>
                </div>
                <Typed
                  className="self-typed"
                  loop
                  typeSpeed={40}
                  strings={[
                    "Welcome to Ajax27's Portfolio",
                    "I love Full-Stack JavaScript, building websites and applications!",
                    "If you would like to collaborate on a project please feel free to contact me and we could build something GREAT!"
                  ]}
                  fadeOut={true}
                  fadeOutDelay={1000}
                  loopCount={0}
                  showCursor
                  cursorChar="..."
                />
                <div className="hero-welcome-bio">
                  <h4>Feel free to check out my Blog</h4>
                </div>
              </Col>
            </Row>
            <span className="service-link">Business Site: {' '}{' '} &copy; 2016 - 2019
              <a className="footer" href="https://ajax27.com">&nbsp; Ajax27.com</a>
            </span>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
