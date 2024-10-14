// vite.config.js
import React from 'react';

export default {
build: {
rollupOptions: {
external: [React,'@fortawesome/react-fontawesome']
  }
 }
};
