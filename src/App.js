import Header from './components/Header';
import Footer from './components/Footer';
import Pokedex from './pages/Pokedex';
//import PokemonCard from './components/PokemonCard'
import Pokemon from './pages/Pokemon';
import Dropdown from './components/Dropdown';
import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { PokemonContext } from './context/PokemonContext'

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [captured, setCaptured] = useState(false)
  const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
  const [pokemonCard, setPokemonCard] = useState([])
  const pokCardURL = pokemons.map(pokemon => pokemon.url)
  // console.log(pokCardURL)
  //console.log(pokemons)

  const fetchingPokemons = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    // console.log(data)
    setPokemons(data.results)
  }

  useEffect(() => {
    fetchingPokemons()
  }, [URL])

  const fetchingPokemonCard = async () => {
    //const res = await fetch(pokCardURL);
    const res = await Promise.all(pokCardURL.map(url => fetch(url).then((res)=> res.json())));

    console.log(res)

    setPokemonCard(res)
  }

  useEffect(() => {
    fetchingPokemonCard()

  }, [pokCardURL])

  const toggleCaptured = () => setCaptured(captured => !captured);

  const providerValue = {
    pokemons,
    captured,
    toggleCaptured,
  }

  return (
    <PokemonContext.Provider value={providerValue}>
      <Router>
        <Header />
        <Dropdown />
        <main className='main'>
          <Routes>
            <Route exact path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </PokemonContext.Provider>
  )
}

export default App;
