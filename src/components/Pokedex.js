import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex(props) {
  //   let defaultProps = {
  //     pokemon: [
  //       { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  //       { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  //       { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  //       { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  //       { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  //       { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  //       { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  //       { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  //     ],
  //   };
  return (
    <div className="Pokedex">
      <h1>Pokedex!</h1>
      <div className="Pokedex-cards">
        {props.pokemon.map((p) => (
          <Pokecard
            url={p.url}
            key={p.name}
            // id={p.id}
            name={p.name}
            // type={p.type}
            // exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
