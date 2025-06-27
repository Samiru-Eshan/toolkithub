import React, { useState } from 'react';
import SEO from '../components/SEO';

const WordCounter = () => {
  const [text, setText] = useState('');
  
  const countWords = () => text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const countChars = () => text.length;
  const countSentences = () => text.split(/[.!?]+/).filter(Boolean).length;
  const countParagraphs = () => text.split(/\n\s*\n/).filter(Boolean).length;

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Word Counter | ToolKitHub" 
        description="Free online word counter tool that counts words, characters, sentences, and paragraphs."
        keywords="word counter, character counter, text analysis"
      />
      
      <h1 className="text-3xl font-bold mb-6">Word Counter</h1>
      <textarea
        className="w-full h-64 p-4 border border-gray-300 rounded-lg mb-6"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Words</h3>
          <p className="text-2xl font-bold">{countWords()}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Characters</h3>
          <p className="text-2xl font-bold">{countChars()}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Sentences</h3>
          <p className="text-2xl font-bold">{countSentences()}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Paragraphs</h3>
          <p className="text-2xl font-bold">{countParagraphs()}</p>
        </div>
      </div>
    </div>
  );
};

export default WordCounter;