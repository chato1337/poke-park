import './App.css';
import PokeDex from './components/PokeDex';
import PokemonList from './components/PokemonList';
import PokemonState from './context/PokemonState'

function App() {
  return (
      <PokemonState>
        <h1>poke-mondongo</h1>
        <PokeDex />
        <PokemonList />
      </PokemonState>
  );
}

export default App;
