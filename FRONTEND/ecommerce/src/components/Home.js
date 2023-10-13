import React from 'react';

function Home() {
  const backgroundImageUrl = 'your-image-url-here.jpg'; // Replace with the actual URL or path to your image
  return (
    <div       style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
    <div className="bg-white dark:bg-gray-800 h-screen flex flex-col justify-center items-center">
      <main className="max-w-screen-xl mx-auto px-4 py-8 text-center mt-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
          Elevate Your Shopping Experience with Us Today!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Discover Endless Possibilities
        </p>
      </main>
    </div>

    </div>
  );
}

export default Home;
