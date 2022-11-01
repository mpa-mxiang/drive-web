import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import self from '../../images/self.jpg';
import bde from '../../images/bde-course.png';
import client1 from '../../images/client1.jpg';

const About1 = () => {
  return (
    <Container>
      <h1>About Us</h1>
      <Row>
        <Col sm>
          <img src={self} alt="" />
        </Col>
        <Col sm={4}>
          Max's Driving School is one of the most respected schools in the KW
          area. Max's Driving School is committed to providing high-quality
          service of safe and defensive driving education. All of our
          in-className and in-car instructors are Ministry certified. They must
          undergo annual criminal background checks to maintain their teaching
          privileges. They all have up-to-date knowledge of the traffic Law and
          Regulations.
        </Col>
      </Row>
      <Row>
        <Col sm>
          Our 40-hour in-car+online, Ministry of Transportation Approved
          Beginner Driver Education (BDE) course is available. Upon successful
          completion of the study, the graduates will qualify for the Driver's
          Licence History. The Driver's Licence History provides proof of
          successful completion, and the insurance industry widely recognizes
          graduation from our BDE course and it. BDE graduates with a Driver's
          Licence History may be eligible for an insurance discount.{' '}
        </Col>
        <Col sm={4}>
          <img src={bde} alt="" />
        </Col>
      </Row>
      <Row>
        <Col sm>
          <img src={client1} alt="" />
        </Col>
        <Col sm={4}>
          All of our in-class and in-car instructors are Ministry
          certified. They must undergo annual criminal background checks to
          maintain their teaching privileges. They all have up-to-date knowledge
          of the traffic Law and Regulations.
        </Col>
      </Row>
    </Container>
  );
};

export default About1;
