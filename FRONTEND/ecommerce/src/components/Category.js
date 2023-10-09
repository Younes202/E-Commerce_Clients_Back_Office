import React from 'react';

function Category() {
  // Inline style to set the background color of the body
  const bodyStyle = {
    backgroundColor: 'white',
  };

  return (
    <div style={bodyStyle} className="h-screen">
      <br />
      <br />

      <main className="max-w-screen-xl mx-auto px-4 py-8">
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            About Our Ecommerce Store
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Welcome to our online marketplace! We are dedicated to providing you with the best shopping experience.
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Our store offers a wide range of products, from electronics to fashion, and everything in between. We take pride in delivering quality products to your doorstep.
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            If you have any questions or need assistance, please feel free to contact us.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Category;
