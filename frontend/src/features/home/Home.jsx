import React from 'react';
import HomeHeader from './components/HomeHeader';
import useHome from './hooks/useHome';

const Home = () => {
  const { data, loading, error } = useHome();

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-gray-200">
      <HomeHeader title={data?.title} subtitle={data?.subtitle} subtitle2={data?.subtitle2} />
      <main className="container mx-auto px-4 py-8">
        {/* Home content will go here */}
      </main>
    </div>
  );
};

export default Home;
