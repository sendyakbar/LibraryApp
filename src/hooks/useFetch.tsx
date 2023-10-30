import {useState, useEffect} from 'react';

export const UseFetch = (action: Promise<any>) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function getData(): Promise<void> {
      try {
        setLoading(true);
        const response = await action;
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading, data, error};
};
