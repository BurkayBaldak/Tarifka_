import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function FetchData() {
    try {
      const {data: responseData} = await axios.get(url);
      setLoading(false);
      setData(responseData);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    FetchData();
  }, []);
  return {error, loading, data};
}
export default useFetch;
