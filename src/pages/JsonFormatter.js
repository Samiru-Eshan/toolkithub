import React, { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

const JsonFormatter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (err) {
      setError('Invalid JSON: ' + err.message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">JSON Formatter</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <textarea
            className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono"
            placeholder='{"example":"json"}'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={formatJson}
            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Format JSON
          </button>
        </div>
        <div>
          <div className="relative">
            <textarea
              readOnly
              className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono bg-gray-50"
              value={error || output}
            />
            {output && !error && (
              <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 p-2 bg-gray-200 rounded"
                title="Copy to clipboard"
              >
                {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};