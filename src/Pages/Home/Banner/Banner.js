import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CustomButton from '../../../Component/Common/CustomButton';

const Banner = () => {
  return (
    <div className='home-banner'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={12} lg={6}>
            <div className="home-banner-text">
              <h1>Welcome to the World of  <span>Programming!</span></h1>
              <p>Ea deserunt ut ut nostrud non Lorem mollit amet pariatur quis id sit. Irure non culpa id cupidatat
                nostrud nulla. Sunt pariatur adipisicing nisi eiusmod et irure.</p>
              <div className="banner-btn">
                <CustomButton>Get Started</CustomButton>
                <a href="https://www.youtube.com/watch?v=vQMo2Sg1p-Y" className="video-button"><i
                  className="play-btn"></i><span>Watch video</span></a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div className="home-banner-img">
              <img className="rotate img-fluid" src="https://i.ibb.co/G0PBFbf/370-3704903-programmer-illustration-hd-png-download-removebg-preview.png" alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;