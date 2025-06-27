import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ tool }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className={`p-4 ${tool.color} text-white`}>
        <tool.icon className="h-8 w-8" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
        <p className="text-gray-600 mb-4">{tool.description}</p>
        <Link 
          to={tool.path} 
          className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Use Tool
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;