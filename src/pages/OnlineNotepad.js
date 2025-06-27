import React, { useState, useEffect } from 'react';

const OnlineNotepad = () => {
  const [content, setContent] = useState(localStorage.getItem('notepad') || '');

  useEffect(() => {
    localStorage.setItem('notepad', content);
  }, [content]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Online Notepad</h1>
      <textarea
        className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing your notes here..."
      />
      <div className="mt-4 flex justify-between">
        <button 
          onClick={() => setContent('')}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear
        </button>
        <button 
          onClick={() => navigator.clipboard.writeText(content)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};