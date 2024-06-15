import './assets/App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Stoic from './components/Stoic';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import photoData from './photoData.json';
import Pokedex from './components/Pokedex';
import PokemonCard from './components/PokemonCard';
import PhotoGallery from './components/PhotoGallery';
import PhotoCard from './components/PhotoCard';

function App() {
//   const container = document.getElementById('homepage');
//   let isDark = false;
//   function toggleDarkMode(event) {
//     event.preventDefault();
//     isDark = container.classList.contains('dark');
//     if (isDark) {
//         container.classList.remove('dark');
//         container.classList.add('light');
//     }
//     else {
//         container.classList.remove('light');
//         container.classList.add('dark');
//     } 
//   }
//   <body id='homepage'>
//   <button id="darkModeButton" onClick={toggleDarkMode}>Toggle Dark Mode</button>
// </body>
  
  return (
    <div>
      <Header />
      <Navigation />
      <Footer />
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/photos" element={<PhotoGallery />} />
          <Route path="/photos/photo/:photoID" element={<PhotoCard photoData={photoData} />} />
          <Route path="/stoic" element={<Stoic />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/pokemon/:pokemonID" element={<PokemonCard />} />
          <Route path="*" element={<Home />} /> {/* Wild card route */}
      </Routes>
    </div>
  );
}

export default App;
