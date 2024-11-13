import React from 'react';
import './Technology.css'; 
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 
import { SiGmail } from 'react-icons/si'; // Gmail

const Technology = () => {
  return (
    <div className="technology-container">
      <h1 className="title1">RENGA</h1> <br />
      <h5 className="subtitle">Technologies</h5>
      
      <div className="section">
        <h6 className="section-title">Cloud Engineer</h6>
        <ul className="section-list">
          <li>Introduction to Cloud Computing</li>
          <li>Cloud computing service providers</li>
          <li>Amazon Web Services (AWS)</li>
          <li>Microsoft Azure</li>
          <li>DevOps</li>
        </ul>
      </div>

      <div className="section">
        <h6 className="section-title">Artificial Intelligence & Machine learning</h6>
        <ul className="section-list">
          <li>Introduction to AI & ML</li>
          <li>Python programming language</li>
          <li>Tensorflow</li>
          <li>Machine learning models training</li>
          <li>Model deployment & prediction</li>
          <li>Cloud ML tools</li>
        </ul>
      </div>

      <div className="section">
        <h6 className="section-title">Full stack developer training</h6>
        <ul className="section-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>PHP programming language</li>
          <li>PHP & JS Frameworks</li>
          <li>Server setup & hosting</li>
        </ul>
      </div>

      <div className="section">
        <h6 className="section-title">Company</h6>
        <ul className="section-list">
          <li>Knowledge base</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Career</li>
        </ul>
      </div>

      <div className="contact-section">
        <h6 className="contact-title">Get In Touch</h6>
        <p className="contact-info">Learn to Make More Calls:</p>
        <p className="website-link">www.rengatechnologies.com</p>

        <div className="social-links">
          {/* Facebook, Gmail, Instagram, LinkedIn Icons */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={30} color= "rgba(0, 0, 0, 1)"/>
          </a>
          <a href="mailto:info@rengatechnologies.com" target="_blank" rel="noopener noreferrer">
            <SiGmail size={30} color= "rgba(0, 0, 0, 1)" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color= "rgba(0, 0, 0, 1)" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={30} color= "rgba(0, 0, 0, 1)" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Technology;
