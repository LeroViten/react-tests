import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();
    axios
      .get(url)
      .then(res => {
        setLoading(false);
        setData(res.data);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
        setError('An error occurred while getting data 😟');
      });
    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
