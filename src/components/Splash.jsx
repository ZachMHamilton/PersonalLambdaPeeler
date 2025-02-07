import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, ThemeProvider } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddLinkIcon from '@mui/icons-material/AddLink';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Splash = () => {
  const theme = useTheme();

  return (
    <div id="splash">
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          backgroundColor: 'primary.main',
          top: 0,
        }}
      >
        <Toolbar>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', gap: '2em' }}>
              <RouterLink to="/">Home</RouterLink>
              <a href="//github.com/oslabs-beta/LambdaPeeler">Docs</a>
              <a href="https://linkedin.com/company/lambda-peeler">Contact</a>
            </div>
            <div>
              <RouterLink to="/login">Get Started</RouterLink>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div id="hero">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/Lambda_Potato-removebg-preview.png"
            style={{ width: '15em' }}
          ></img>
          <h1 style={{ fontSize: '4.8em' }}>LambdaPeeler</h1>
        </div>
        <p style={{ fontSize: '1.5em' }}>
          Lambda Peeler is a web-based dashboard tailored for AWS Lambda
          developers. It is meticulously designed to bridge the gap between
          managing Lambda functions and layers, simplifying AWS cloud
          operations.
        </p>
        <a
          href="https://medium.com/@greg.d.osborn/introducing-lambda-peeler-906b11261008"
          style={{ display: 'flex', alignItems: 'center', gap: '.1em' }}
        >
          Learn more <EastIcon color="secondary" />
        </a>
      </div>
      <div id="features">
        <h1>Features</h1>
        <div class="feature">
          <div class="featureDiscription">
            <h2>Connecting a function</h2>
            <AddLinkIcon fontSize="large" />
            <p>
              Effortlessly link multiple functions through our sleek, user
              interface. Behind the scenes, Lambda Peeler diligently conducts
              assessments, ensuring runtime and dependency compatibility.
            </p>
          </div>
          <img id="gif" src="/assets/connecting.gif"></img>
        </div>
        <div class="feature">
          <div class="featureDiscription">
            <h2>Removing a function</h2>
            <LinkOffIcon fontSize="large" />
            <p>
              Seamlessly disconnect functions with just a single click. Our
              intuitive dashboard ensures swift and effortless layer management,
              streamlining your AWS Lambda experience.
            </p>
          </div>
          <img id="gif" src="/assets/removing.gif"></img>
        </div>
        <div class="feature">
          <div class="featureDiscription">
            <h2>Failing Compatability</h2>
            <CancelOutlinedIcon fontSize="large" />
            <p>
              Our built-in compatibility testing feature cross-examines
              functions with layers, reducing the chance of introducing code
              breaking changes.
            </p>
          </div>
          <img id="gif" src="/assets/failing.gif"></img>
        </div>
      </div>
      <div id="team">
        <h1>Meet the Team</h1>
        <div id="people">
          <div class="person">
            <img
              src="/assets/nhat.jpeg"
              style={{ width: '15em', borderRadius: '15px' }}
            ></img>
            Nhat Trinh
            <div id="profileLinks">
              <IconButton href="https://www.linkedin.com/in/nhattrinh/">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/Nhat-Trinh1">
                <GitHubIcon />
              </IconButton>
            </div>
          </div>
          <div class="person">
            <img
              src="/assets/greg.jpeg"
              style={{ width: '15em', borderRadius: '15px' }}
            ></img>
            Greg Osborn
            <div id="profileLinks">
              <IconButton href="https://www.linkedin.com/in/gregdosborn/">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/greg-osborn">
                <GitHubIcon />
              </IconButton>
            </div>
          </div>
          <div class="person">
            <img
              src="/assets/michael.png"
              style={{ width: '15em', borderRadius: '15px' }}
            ></img>
            Michael Shand
            <div id="profileLinks">
              <IconButton href="https://www.linkedin.com/in/shand-michael/">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/shandie231">
                <GitHubIcon />
              </IconButton>
            </div>
          </div>
          <div class="person">
            <img
              src="/assets/zach.png"
              style={{ width: '15em', borderRadius: '15px' }}
            ></img>
            Zach Hamilton
            <div id="profileLinks">
              <IconButton href="https://www.linkedin.com/in/zach-m-hamilton/">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/ZachMHamilton">
                <GitHubIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
