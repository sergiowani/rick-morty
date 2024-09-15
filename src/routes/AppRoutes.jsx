import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Container } from 'react-bootstrap';
import { Head } from '../components/Head/Head';
import { useState } from 'react';
import { Profile } from '../pages/Profile/Profile';
import './AppRoutes.css';

const AppRoutes = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const location = useLocation(); // useLocation para obtener la ruta actual

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <>
      <Container fluid>
        {location.pathname !== `/profile/${selectedCharacter?.id}` && (
          <header>
            <nav>
              <Head 
                title="Rick&Morty" 
                selectedCharacter={selectedCharacter} 
              />
            </nav>
          </header>
        )}
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<Home onCharacterSelect={handleCharacterSelect} />} 
            />
            <Route 
              path="/profile/:id" 
              element={<Profile selectedCharacter={selectedCharacter}  />} 
            />
          </Routes>
        </main>
      </Container>
    </>
  );
};

export default AppRoutes;
