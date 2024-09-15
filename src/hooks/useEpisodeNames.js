import { useState, useEffect } from 'react';

export const useEpisodeNames = (episodeUrls) => {
  const [episodeNames, setEpisodeNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEpisodeNames = async () => {
      setLoading(true);
      setError(null);

      const episodeIds = episodeUrls.map(url => url.split('/').pop());

      try {
        const fetchEpisodeData = episodeIds.map(id =>
          fetch(`https://rickandmortyapi.com/api/episode/${id}`).then(response => response.json())
        );

        const episodesData = await Promise.all(fetchEpisodeData);
        setEpisodeNames(episodesData.map(episode => episode.name));
      } catch (err) {
        setError(err);
        console.error('Error fetching episode names:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodeNames();
  }, [episodeUrls]);

  return { episodeNames, loading, error };
};