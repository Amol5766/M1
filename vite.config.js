import React from 'react';

export default {
  build: {
    rollupOptions: {
      external: [
        React,
        '@fortawesome/react-fontawesome',
        'react-intersection-observer' // Add this line
      ]
    }
  }
};
