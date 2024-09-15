import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Head.css';

export const Head = ({ title, selectedCharacter }) => (
  <Navbar expand="lg" fixed="top" className='navbar-color p-0'>
    <Container fluid className="position-relative p-0">
      <div className="navbar-content d-flex justify-content-center">
        <div className="navbar-center d-flex justify-content-center">
          <Navbar.Brand className="title">
            {title}
          </Navbar.Brand>
        </div>
        {selectedCharacter && (
          <Link
            to={`/profile/${selectedCharacter.id}`}
            className="navbar-right d-flex align-items-center text-decoration-none"
          >
            <img
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              className="me-2"
            />
            <Navbar.Text>My profile</Navbar.Text>
          </Link>
        )}
      </div>
    </Container>
  </Navbar>
);