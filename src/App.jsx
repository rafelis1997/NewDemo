import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'aframe-gif-shader'
import 'mind-ar/dist/mindar-image-aframe.prod.js';

import './styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

function App() {
  return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  )
}

export default App
