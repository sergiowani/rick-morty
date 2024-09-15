import React from 'react';
import { Col } from 'react-bootstrap';
import './Filter.css';

export const Filter = ({ selectedFilter, onFilterChange }) => {
  return (
    <Col xs={12} className='d-flex justify-content-center align-items-center p-0'>
      <div className="button-group">
        <span
          className={`filter-option ${selectedFilter === 'all' ? 'selected' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All
        </span>
        <span
          className={`filter-option ${selectedFilter === 'alive' ? 'selected' : ''}`}
          onClick={() => onFilterChange('alive')}
        >
          Alive
        </span>
        <span
          className={`filter-option ${selectedFilter === 'dead' ? 'selected' : ''}`}
          onClick={() => onFilterChange('dead')}
        >
          Dead
        </span>
        <span
          className={`filter-option ${selectedFilter === 'unknown' ? 'selected' : ''}`}
          onClick={() => onFilterChange('unknown')}
        >
          Unknown
        </span>
      </div>
    </Col>
  );
};