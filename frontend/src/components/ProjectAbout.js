import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProjectAbout.css';

const ProjectAbout = ({ title, content }) => (
  <section className="about">
    <h2 className="about-title">{title}</h2>
    <div className="about-content" dangerouslySetInnerHTML={{ __html: content }} />
  </section>
);

ProjectAbout.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ProjectAbout;