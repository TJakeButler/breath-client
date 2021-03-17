import React, { useContext, useEffect,  } from "react";
import {useHistory} from "react-router-dom"
import { TypeContext } from "./TypeProvider.js";
// import "./game.css";

export const TypeList = (props) => {
  const { types, getTypes, setTypes } = useContext(TypeContext);
  

  useEffect(() => {
    getTypes();
  }, []);
  
console.log("This is types", types)
  return (
    <article className="types">
      <h1>
        This is Type List
      </h1>
      {types.map((type) => {
        return (
          <section key={`game--${type.id}`} className="game">
            <h1 className="game__title">
            Name of Breath - {type.name} 
            </h1>
            <div className="game__players">
              Inhale for {type.inhale} seconds
            </div>
            <div className="game__skillLevel">
              Hold breath for {type.hold} seconds
            </div>
            <div className="game__skillLevel">Exhale for {type.exhale} seconds</div>
            <button
          className="btn btn-2 btn-sep icon-create"
          onClick={() => {
            props.history.push({ pathname: `/types/${type.id}` });
          }}
        >
          Select this breath 
        </button>
          </section>
        );
      })}
    </article>
  );
};
