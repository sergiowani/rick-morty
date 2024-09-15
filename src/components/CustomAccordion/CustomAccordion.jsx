import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';
import './CustomAccordion.css';

export const CustomAccordion = ({ eventKey, iconSrc, title, children, loading, error, className }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleAccordionToggle = () => {
    setIsCollapsed(prevState => !prevState);
  };

  return (
    <Accordion className={`custom-accordion ${className} mt-3`} activeKey={isCollapsed ? null : eventKey}>
      <Accordion.Item eventKey={eventKey} className={isCollapsed ? '' : 'expanded'}>
        <Accordion.Header
          className="d-flex flex-column justify-content-center align-items-center"
          onClick={handleAccordionToggle}
        >
          <img src={iconSrc} alt={title} className='accordion-img' />
          <span className='accordion-title'>{title}</span>
        </Accordion.Header>
        <Accordion.Body className='accordion-body'>
          {loading && <p>Loading...</p>}
          {error && <p>Error loading {title.toLowerCase()}</p>}
          {children}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

CustomAccordion.propTypes = {
  eventKey: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  className: PropTypes.string,
};