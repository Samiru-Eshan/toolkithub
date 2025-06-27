import React, { useState } from 'react';
import { tools } from '../utils/toolsData';
import { Link } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 2) {
      setResults(
        tools.filter(tool => 
          tool.name.toLowerCase().includes(value.toLowerCase()) ||
          tool.description.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search tools..."
        className="w-full px-4 py-2 rounded-full"
        value={query}
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg max-h-96 overflow-auto">
          {results.map(tool => (
            <Link
              key={tool.id}
              to={tool.path}
              className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setQuery('')}
            >
              <div className="font-medium">{tool.name}</div>
              <div className="text-sm text-gray-500">{tool.description}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
