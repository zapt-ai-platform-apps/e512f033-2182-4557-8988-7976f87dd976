import React, { useState } from 'react';
import DownloadLinks from './DownloadLinks';
import { generateCharacter } from '../api/generateCharacter';

export default function CharacterGenerator() {
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [characterUrl, setCharacterUrl] = useState(null);
  const [animationsUrl, setAnimationsUrl] = useState(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!description.trim()) {
      setError('Please enter a character description.');
      return;
    }
    setError('');
    setIsGenerating(true);
    console.log('Generating character for description:', description);
    try {
      const data = await generateCharacter(description);
      console.log('API response data:', data);
      setCharacterUrl(data.characterUrl);
      setAnimationsUrl(data.animationsUrl);
    } catch (err) {
      console.error('Error generating character:', err);
      setError('There was an error generating the character.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">AI-Powered 3D Character Generator</h1>
      <textarea
        className="w-full max-w-lg h-32 p-2 mb-4 border border-gray-300 rounded box-border"
        placeholder="Describe your character..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <button
        className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        onClick={handleGenerate}
        disabled={isGenerating}
      >
        {isGenerating ? 'Generating...' : 'Generate Character'}
      </button>
      {characterUrl && (
        <DownloadLinks characterUrl={characterUrl} animationsUrl={animationsUrl} />
      )}
      <div className="mt-8">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Made on ZAPT
        </a>
      </div>
    </div>
  );
}