import { useEffect, useState } from "react";
import { fetchData } from '../helper/fetching';

const useAxios = ({url, method, headers = null, body = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    try {
      let result = await fetchData(url, method);
      setResponse(result.data);
    } catch (err) {
      setError(err);
      setResponse([]); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch()
  }, [url, method, headers, body]);
  return {response, error, loading}
};

export default useAxios;