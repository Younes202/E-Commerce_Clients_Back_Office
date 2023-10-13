import React, { useState } from 'react';

function Category() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const electronicsCategories = [
    'Smartphones',
    'Laptops',
    'Audio & Headphones',
    'Cameras & Photography',
    'Gaming',
    'Wearable Tech',
    'Smart Home',
    'Accessories & Components',
    'DIY Electronics',
    'Security & Surveillance',
  ];

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    setShowCategories(value !== ''); // Show categories only if there's a search term.
  };

  const filteredCategories = electronicsCategories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen">
      <main className="max-w-screen-xl mx-auto px-4 py-8">
        <br />
        <br />
        <br />
        <form>
          <div className="relative flex">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-border-blue-500"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
              value={searchTerm}
              onChange={handleSearchChange}
            />

            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
              onClick={(e) => e.preventDefault()}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>

          {showCategories && (
            <div
              id="dropdown"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full h-13 dark:bg-gray-700"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                {filteredCategories.map((category, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </main>
    </div>
  );
}

export default Category;
