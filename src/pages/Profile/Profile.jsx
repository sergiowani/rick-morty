import React from 'react';
import { Button, Col, Row, Accordion } from 'react-bootstrap';
import { useEpisodeNames } from '../../hooks/useEpisodeNames';
import { useNavigate } from 'react-router-dom';
import { CustomAccordion } from '../../components/CustomAccordion/CustomAccordion';
import './Profile.css';

export const Profile = ({ selectedCharacter }) => {
  const navigate = useNavigate();

  const { name, image, status, species, gender, location, episode } = selectedCharacter;

  const { episodeNames, loading, error } = useEpisodeNames(episode);

  const statusClass = `status-${status.toLowerCase()}`;
  const locationName = location?.name || 'Unknown';

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Row className='profile-row'>
      <Col xs={12} className='d-flex flex-column justify-content-center align-items-center p-0'>
        {/* datos esenciales */}
        <div className='div-profile-essential d-flex flex-column justify-content-center align-items-center'>
          <img src={image} alt={name} className='profile-img' />
          <span className='profile-name'>{name}</span>
          <div>
            <span className={statusClass}>{status}</span>
            <span> | {species} | {gender}</span>
          </div>
        </div>
        
        {/* datos localización */}
        <CustomAccordion
          eventKey="0"
          iconSrc="/src/assets/icons/loc.png"
          title="Locations"
          className="location-accordion"
        >
          {locationName}
        </CustomAccordion>

        {/* datos episodios */}
        <CustomAccordion
          eventKey="1"
          iconSrc="/src/assets/icons/camera.png"
          title="Episodes"
          loading={loading}
          error={error}
          className="episode-accordion"
        >
          {episodeNames.map((episodeName, index) => (
            <p key={index}>{episodeName}</p>
          ))}
        </CustomAccordion>
        
        <Button className='profile-button' onClick={handleBackClick}>Back</Button>
      </Col>
    </Row>
  );
};