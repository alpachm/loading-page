import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import InfoPokemon from './components/InfoPokemon';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<InfoPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
