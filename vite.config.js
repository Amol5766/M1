// vite.config.js
import react from 'react';
export default {
build: {
rollupOptions: {
external: [react,'react-intersection-observer']
  }
 }
};
