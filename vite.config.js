// vite.config.js
import React from 'react';

export default {
build: {
rollupOptions: {
external: [React,'react-intersection-observer']
  }
 }
};
