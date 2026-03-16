import React from 'react';

const BookmarkButton = ({ isSaved, onToggle, loading, className = "" }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggle();
      }}
      disabled={loading}
      className={`p-3 rounded-full transition-all duration-300 backdrop-blur-md ${
        isSaved 
          ? 'bg-red-500/20 text-red-500 border border-red-500/30' 
          : 'bg-gray-900/60 text-gray-400 border border-white/10 hover:border-white/30 hover:text-white'
      } ${className}`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={isSaved ? "currentColor" : "none"} 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={`w-5 h-5 transition-transform duration-300 ${isSaved ? 'scale-110' : 'group-hover:scale-110'}`}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
  );
};

export default BookmarkButton;
