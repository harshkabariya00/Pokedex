import "./App.css";
import Pokedex from "./components/Pokedex";
import React, { useState, useEffect } from "react";
import Page from "./components/Page";
// import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [permanentPokemon, setPermanentPokemon] = useState([]);
  // const [currentPage, setCurrentPage] = useState(0);
  const [offset, setOffset] = useState(0);

  const fetchData = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=80")
      .then((response) => response.json())
      .then((data) => {
        setPermanentPokemon(data.results.map((p) => p));
        setPokemon(data.results.map((p) => p).slice(0, 8));
      });
  };

  useEffect(() => {
    // axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
    //   setPokemon(res.data.results.map((p) => p.name));
    // });
    fetchData();
  }, []);

  return (
    <div className="App">
      <Pokedex pokemon={pokemon} />
      <Page
        setPokemon={setPokemon}
        pokemon={permanentPokemon}
        offset={offset}
        setOffset={setOffset}
      />
    </div>
  );
}

export default App;
