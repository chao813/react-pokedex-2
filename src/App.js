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
  return (
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
  );
}

export default App;
