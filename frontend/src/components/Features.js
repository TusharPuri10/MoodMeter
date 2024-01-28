import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Features.css';

const Features = ({ title, features }) => (
  <section className="features">
    <h2 className="features-title">{title}</h2>
    <div className="features-grid">
      {features.map(({ title, content }, index) => (
        <div key={index} className="features-item">
          <h3 className="features-item-title">{title}</h3>
          <p className="features-item-content">{content}</p>
        </div>
      ))}
    </div>
  </section>
);

Features.propTypes = {
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Features;