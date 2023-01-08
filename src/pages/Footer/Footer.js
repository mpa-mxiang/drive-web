import React from 'react';
import { FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer itemScope="" itemType="http://schema.org/localBusiness" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <span>Call and see why we are different.</span>
            <ul className="list-unstyled">
              <li className="footer-sprite phone">
                <FaPhone />
                Phone:{' '}
                <strong>
                  <span>
                    <a href="tel:PHONE_NUM">1-226-972-6161</a>
                  </span>
                </strong>
              </li>
              <li className="footer-sprite email">
                <a href="mailto:maxamin@hotmail.com">
                  <span itemProp="email">maxamin@hotmail.com </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="letter-spacing-1">EXPLORE OUR SITE</h4>
            <ul className="footer-links list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/packages">Packages</a>
              </li>
              <li>
                <a href="/Booking">Calendar</a>
              </li>
              <li>
                <a href="/clients">Success Clients</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          © 2022 <span itemProp="name">Max's Driving School</span> Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
