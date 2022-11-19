import React from 'react';
import './About.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import selfPic from '../../images/intro.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import selfie from '../../images/self.jpg';
import client2 from '../../images/client2.jpg';
import client1 from '../../images/client1.jpg';

const About = () => {
  return (
    <div className="p-5 text-center">
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            About Me
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Hi, this is Max, I provide Online Digital Driver's Training and
            in-car driving learning in Kitchener, Waterloo, Cambridge,
            Palmerston, and Mount Forest for more than 12 years.
            <br></br>
            As a Ministry certified instructor, I respect my students and
            committed to provide high-quality training of safe and defensive
            driving education. Also, I undergo annual criminal background checks
            so that there is no worries of learning to drive with me. I am
            always learning, thus I always have up-to-date knowledge of the
            traffic Law and Regulations.
            <br></br>
            Our 40-hour in-car+online, Ministry of Transportation Approved
            Beginner Driver Education (BDE) course is available.
          </Typography>
        </Container>
      </Box>
      <div className="section-container">
        <div
          className="columns image"
          style={{
            backgroundImage: `url(${selfie})`,
          }}
        >
          &nbsp;
        </div>
        <div className="columns content">
          <div className="content-container">
            <h5>Why do we use it?</h5>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="columns content">
          <div className="content-container">
            <h5>Why do we use it?</h5>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
        <div
          className="columns image"
          style={{
            backgroundImage: `url(${client1})`,
          }}
        >
          &nbsp;
        </div>
      </div>
      <div className="section-container">
        <div
          className="columns image"
          style={{
            backgroundImage: `url(${client2})`,
          }}
        >
          &nbsp;
        </div>
        <div className="columns content">
          <div className="content-container">
            <h5>Why do we use it?</h5>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
