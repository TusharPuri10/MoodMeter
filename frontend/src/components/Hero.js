import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Hero.css';
import { SignInButton } from '@clerk/clerk-react';

const Hero = ({ title, subtitle, image, buttons, user}) => (
  <section className="hero">
    <div className="hero-content">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
      <div className="hero-buttons">
        {user.isSignedIn ? (
          buttons.map((button, index) => (
            <button
              key={index}
              className="hero-button"
              style={{ backgroundColor: '#50a3f7' }}
              onClick={button.onClick}
            >
              {button.text}
            </button>
          ))
        ) : (
          <SignInButton
            style={{ backgroundColor: '#50a3f7' }}
            className="hero-button"
            redirectUrl="https://mood-meter-one.vercel.app/v1/home"
          />
        )}
      </div>
    </div>
    <div className="hero-image">
      <img src={image} alt={title} width={360}/>
    </div>
    <div className="custom-shape-divider-top-1706428842">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill" />
      </svg>
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Hero;