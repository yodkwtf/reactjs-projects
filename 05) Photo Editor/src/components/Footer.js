import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      Created by
      <a
        href="http://yodkwtf.netlify.app"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        {' '}
        Deekayy
      </a>
      <a
        href="https://twitter.com/yodkwtf"
        target="_blank"
        rel="noreferrer"
        className="icon"
        id="twitter"
      >
        <FaTwitter className="fa" />
      </a>{' '}
      <a
        href="https://www.instagram.com/yodkwtf"
        target="_blank"
        rel="noreferrer"
        className="icon"
        id="instagram"
      >
        <FaInstagram className="fa" />
      </a>{' '}
      <a
        href="https://www.linkedin.com/in/durgesh-chaudhary/"
        target="_blank"
        rel="noreferrer"
        className="icon"
        id="linkedin"
      >
        <FaLinkedin className="fa" />
      </a>
    </footer>
  );
};

export default Footer;
