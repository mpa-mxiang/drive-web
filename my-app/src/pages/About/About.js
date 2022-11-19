import React from 'react';
import './About.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import selfPic from '../../images/intro.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import selfie from '../../images/self.jpg';
import client2 from '../../images/client2.jpg';
import client1 from '../../images/client1.jpg';

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/about"
  >
    About
  </Link>,
];

const About = () => {
  return (
    <div className="p-4 text-center">
      <Stack>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
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
            <h5>Friendly Instructor</h5>
            <p>
              As a Ministry certified instructor, I respect my students and
              committed to provide high-quality training of safe and defensive
              driving education, assisting you to get the skills and safe
              driving knowledge you need to pass your tests and get your
              license.
            </p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="columns content">
          <div className="content-container">
            <h5>Safety Measures</h5>
            <p>
              I undergo annual criminal background checks so that there is no
              worries of learning to drive with me. I am always learning, thus I
              always have up-to-date knowledge of the traffic Law and
              Regulations.
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
              Please browse the site and get in touch with us if you want to
              register or if you need further information. We sincerely hope
              that you will find this site useful and find what you are looking
              for. Our 40-hour in-car+online, Ministry of Transportation
              Approved Beginner Driver Education (BDE) course is available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
