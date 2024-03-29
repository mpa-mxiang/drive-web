import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaAddressBook } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';

import './HeaderBanner.css';

function HeaderBanner() {
  return (
    <div className="header-banner">
      <Container fluid="lg">
        <div style={{ display: 'flex' }}>
          <Stack direction="horizontal" gap={3}>
            <div>
              <a>
                <FaMapMarkerAlt />
                <span>Kitchener-Waterloo and Cambridge</span>
              </a>
            </div>
            <div className="vr" />
            <div>
              <a href="tel:PHONE_NUM">
                <FaPhone />
                <span>+1(226)972-6161</span>
              </a>
            </div>
            <div className="vr" />
          </Stack>
        </div>
      </Container>
    </div>
  );
}

export default HeaderBanner;
