import { Col } from 'react-bootstrap';
import './LoadMore.css';

export const LoadMore = ({ loading, hasMore, loadMoreCharacters }) => {
  return (
    <Col xs={12} className='d-flex justify-content-center align-items-center p-0'>
      {loading && <h2>Cargando...</h2>}
      {!loading && hasMore && (
        <span onClick={loadMoreCharacters} className='load-more-text'>
          Load more
        </span>
      )}
      {!hasMore && <h2>No hay más personajes para cargar</h2>}
    </Col>
  );
};