import "./Pokecard.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import React, { useEffect, useState } from "react";
import pokemonType from "../types.json";
// import stared from "./stared.json";
//import fs from "fs";

// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// grass, poison, water, fire, normal, flying

function Pokecard(props) {
  // let imgSrc = props.url;

  const [image, setImage] = useState("");
  const [types, setTypes] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  function getFavorites() {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      return JSON.parse(favorites);
    } else {
      return [];
    }
  }

  function addToFavorites(newFavorite) {
    const favorites = getFavorites();
    favorites.push(newFavorite);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  function removeFromFavorites(favoriteToRemove) {
    const favorites = getFavorites();
    const indexToRemove = favorites.indexOf(favoriteToRemove);
    if (indexToRemove > -1) {
      favorites.splice(indexToRemove, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }

  function toggleFavorite() {
    if (isFavorite) {
      removeFromFavorites(props.name);
      setIsFavorite(false);
    } else {
      addToFavorites(props.name);
      setIsFavorite(true);
    }
  }

  const fetchData = () => {
    return fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setTypes(data.types);
        setImage(data.sprites.front_default);
      });
  };

  useEffect(() => {
    const favorites = getFavorites();
    if (favorites.includes(props.name)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
    fetchData();
  }, []);

  return (
    <div className="Pokecard">
      <StarRateIcon
        className="starOutlineIcon"
        onClick={toggleFavorite}
        style={{ color: isFavorite ? "orange" : "grey" }}
      />
      <h1 className="heading">{props.name}</h1>
      <img className="image" src={image} alt={props.name} />
      <div>{props.type}</div>
      {/* <div>EXP:{props.exp}</div> */}
      <div className="typeContainer">
        {types.map((p) => (
          <div
            className="styledText"
            style={{
              backgroundColor:
                typeof pokemonType.find(({ type }) => type === p.type.name) !=
                "undefined"
                  ? pokemonType.find(({ type }) => type === p.type.name).color
                  : "grey",
            }}
          >
            {p.type.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokecard;
