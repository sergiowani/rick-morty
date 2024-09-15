import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './CharacterCard.css';

export const CharacterCard = ({ character, onClick }) => {
  const statusClass = `status-${character.status.toLowerCase()}`;

  return (
    <Col sm={6} md={4} lg={3} className='d-flex justify-content-center align-items-center p-3'>
      <Card 
        style={{ width: '15rem', textAlign: 'center', cursor: 'pointer' }} 
        onClick={() => onClick(character)}
        className='animation-card'
      >
        <Card.Img
          variant="top"
          src={`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`}
          alt={`Image of ${character.name}`}
        />
        <ListGroup className="list-group-flush">
          <div className="character-name-wrapper">
            <ListGroup.Item className="character-name p-2">
              {character.name}
            </ListGroup.Item>
            <div className="character-name-tooltip">
              {character.name}
            </div>
          </div>
          <ListGroup.Item className="character-id p-2">{character.id}</ListGroup.Item>
          <ListGroup.Item className='p-2'>
            <span className={statusClass}>{character.status}</span> | {character.species} | {character.gender}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
};