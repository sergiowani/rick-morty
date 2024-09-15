import React from 'react';
import { Row } from 'react-bootstrap';
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { useRickAndMortyCharacters } from '../../hooks/useRickAndMortyCharacters';
import { Filter } from '../../components/Filter/Filter';
import { LoadMore } from '../../components/LoadMore/LoadMore';

export const Home = ({ onCharacterSelect }) => {
  const [statusFilter, setStatusFilter] = React.useState('all');
  const { visibleCharacters, loadMoreCharacters, loading, hasMore } = useRickAndMortyCharacters(statusFilter);

  const handleFilterChange = (filterValue) => {
    setStatusFilter(filterValue);
  };

  return (
    <>
      <Row>
        <Filter selectedFilter={statusFilter} onFilterChange={handleFilterChange} />
      </Row>
      <Row>
        {visibleCharacters.map(character => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={() => onCharacterSelect(character)}
          />
        ))}
      </Row>
      <Row>
        <LoadMore
          loading={loading}
          hasMore={hasMore}
          loadMoreCharacters={loadMoreCharacters}
        />
      </Row>
    </>
  );
};

