import { useState, useEffect } from 'react';

const useHome = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        // Mock data - replace with actual API call
        const mockData = {
          title: 'e-commerce',
          subtitle: 'Welcome to our online store',
          subtitle2: 'This is my First Full Stack Project',

          featuredProducts: []
        };
        setData(mockData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  return { data, loading, error };
};

export default useHome;
