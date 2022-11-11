import React from 'react';
import './About.css';
import selfPic from '../images/intro.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import selfie from '../images/self.jpg';
import client2 from '../images/client2.jpg';
import client1 from '../images/client1.jpg';
const About = () => {

  return (

    <div className="p-5 text-center">
      <h1 className="mb-5">About Us</h1>
      <div className="center">
        <Row>
          <Col sm>

            <img src={selfPic} alt="" />
          </Col>
          <Col>
            Hi, this is Max, I provide Online Digital Driver's Training and in-car driving learning in Kitchener,
            Waterloo, Cambridge, Palmerston, and Mount Forest for more than 12 years.
            <br></br>
            <br></br>
            As a Ministry certified instructor, I respect my students and committed to provide high-quality training
            of safe and defensive driving education. Also, I undergo annual criminal background checks so that there is no
            worries of learning to drive with me. I am always learning, thus I always have up-to-date knowledge of the
            traffic Law and Regulations.
            <br></br>
            <br></br>
            Our 40-hour in-car+online, Ministry of Transportation Approved
            Beginner Driver Education (BDE) course is available.
          </Col>
          <Col sm>
            <img src={client1} alt="" />
          </Col>
          <Col sm>
            <img src={client2} alt="" />
          </Col>
          <Col sm>
            <img src={selfie} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
