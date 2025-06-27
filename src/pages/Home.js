import React from 'react';
import { toolsByCategory } from '../utils/toolsData';
import ToolCard from '../components/ToolCard';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="ToolKitHub - Free Online Tools Collection"
        description="Your all-in-one online toolkit with free web tools for developers, writers, and everyday use."
        keywords="online tools, web tools, free tools, word counter, JSON formatter, calculators"
      />
      
      <section className="py-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your All-In-One Online Toolkit</h1>
          <p className="text-xl mb-8">Free web tools for developers, writers, and everyday use</p>
          <div className="max-w-md mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for tools..." 
              className="w-full px-4 py-3 rounded-full text-gray-800 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {Object.entries(toolsByCategory).map(([category, tools]) => (
        <section key={category} className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="mr-2">{tools[0].icon}</span>
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Home;