import React from 'react';

export default function DownloadLinks({ characterUrl, animationsUrl }) {
  return (
    <div className="mt-6 text-center">
      <p className="mb-4 text-gray-900">Your character is ready!</p>
      <a
        className="cursor-pointer px-4 py-2 bg-green-500 text-white rounded mr-2"
        href={characterUrl}
        download="character_model"
      >
        Download Character
      </a>
      {animationsUrl && (
        <a
          className="cursor-pointer px-4 py-2 bg-green-500 text-white rounded"
          href={animationsUrl}
          download="character_animations"
        >
          Download Animations
        </a>
      )}
    </div>
  );
}