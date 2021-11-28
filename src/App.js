import Header from "./components/Header";
import Footer from "./components/Footer";
import Pokedex from "./pages/Pokedex";
//import PokemonCard from './components/PokemonCard'
import Pokemon from "./pages/Pokemon";
import Dropdown from "./components/Dropdown";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { PokemonContext } from "./context/PokemonContext";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const URL = "https://pokeapi.co/api/v2/pokemon/?limit=5";
  const [capturedPokemonCards, setCapturedPokemonCards] = useState([]);
  const [notCapturedPokemonCards, setNotCapturedPokemonCards] = useState([]);

  const fetchingPokemons = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    var allPokemonInfo = [];

    data.results.forEach(async poke => {
      let pokemonDetailsResults = await fetch(poke.url).then(res => res.json());
      poke = {...poke, ...pokemonDetailsResults}
      allPokemonInfo.push(poke);
      setPokemons([...allPokemonInfo]);
    });
  };

  useEffect(() => {
    fetchingPokemons();
  }, [URL]);

  // const fetchingPokemonCard = async () => {
  //   //const res = await fetch(pokCardURL);
  //   const res = await Promise.all(pokCardURL.map(url => fetch(url).then((res)=> res.json())));
    
  //   console.log(res)
    
  //   setPokemonCard(res)
  //   }
    
  //   useEffect(() => {
  //   fetchingPokemonCard()
    
  //   }, [pokCardURL])

  const providerValue = {
    pokemons,
    setPokemons,
    capturedPokemonCards,
    setCapturedPokemonCards,
    notCapturedPokemonCards,
    setNotCapturedPokemonCards,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      <Router>
        <Header />
        <Dropdown />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </PokemonContext.Provider>
  );
}

export default App;
