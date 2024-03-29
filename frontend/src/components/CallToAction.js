import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CallToAction.css';

const CallToAction = ({ title, ctaText, image }) => (
  <section className="call-to-action">
    <div className="cta-content">
      <h2 className="cta-title">{title}</h2>
      <a href='https://github.com/TusharPuri10/MoodMeter/discussions/2' target='_blank'  rel="noreferrer" >
      <button className="cta-button">{ctaText}</button>
      </a>
    </div>
    <div className="cta-image">
      <img src={image} alt={title} width={180} />
    </div>
  </section>
);

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CallToAction;