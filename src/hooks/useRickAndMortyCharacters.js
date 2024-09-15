import { useEffect, useState } from "react";
import useAxios from "../hooks/useFetch";

export const useRickAndMortyCharacters = (statusFilter) => {
  const [page, setPage] = useState(1); // Comienza por la página 1
  const [visibleCharacters, setVisibleCharacters] = useState([]); // Personajes visibles por grupos de 8
  const [remainingCharacters, setRemainingCharacters] = useState([]); // Almacena el resto de los personajes para la próxima carga
  const [hasMore, setHasMore] = useState(true); // Para controlar si hay más personajes por cargar

  const charactersPerLoad = 8; // Número de personajes por carga

  // Si el filtro es "all", no se incluye el parámetro de filtro en la URL
  const statusQuery = statusFilter !== 'all' ? `&status=${statusFilter}` : '';
  const url = `https://rickandmortyapi.com/api/character?page=${page}${statusQuery}`;
  
  const { response, loading, error } = useAxios({ url, method: 'get' });

  // Este efecto resetea los personajes visibles y otros estados cuando cambia el filtro
  useEffect(() => {
    // Reiniciar la página y personajes visibles al cambiar el filtro
    setPage(1);
    setVisibleCharacters([]);
    setRemainingCharacters([]);
    setHasMore(true); // Reseteamos `hasMore` a true al cambiar de filtro
  }, [statusFilter]);

  // Este efecto se ejecuta cuando llega la respuesta de la API
  useEffect(() => {
    if (response?.results) {
      const allCharacters = [...remainingCharacters, ...response.results]; // Combina los personajes sobrantes con los nuevos
      const visible = allCharacters.slice(0, charactersPerLoad); // Toma solo los primeros 8 personajes
      const remaining = allCharacters.slice(charactersPerLoad); // Deja el resto para la siguiente carga

      setVisibleCharacters(prev => [...prev, ...visible]);
      setRemainingCharacters(remaining); // Actualiza los personajes sobrantes

      // Si no hay más páginas en la API y tampoco personajes restantes, no hay más personajes por cargar
      if (!response.info.next && remaining.length === 0) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } else {
      // Si la respuesta no tiene resultados y el filtro aplicado no devuelve personajes
      setHasMore(false);
    }
  }, [response]);

  const loadMoreCharacters = () => {
    if (remainingCharacters.length > 0) {
      const visible = remainingCharacters.slice(0, charactersPerLoad); // Toma los primeros 8 personajes
      const remaining = remainingCharacters.slice(charactersPerLoad); // Actualiza los personajes sobrantes

      setVisibleCharacters(prev => [...prev, ...visible]);
      setRemainingCharacters(remaining);

      if (remaining.length === 0) {
        setPage(prev => prev + 1); // Si no quedan más sobrantes, avanzamos de página
      }
    } else {
      setPage(prev => prev + 1); // Si no hay personajes sobrantes, pasamos a la siguiente página
    }
  };

  return { visibleCharacters, loadMoreCharacters, loading, error, hasMore };
};