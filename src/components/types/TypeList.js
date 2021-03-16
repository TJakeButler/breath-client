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
      <header>
        <button
          className="btn btn-2 btn-sep icon-create"
          onClick={() => {
            props.history.push({ pathname: "/types" });
          }}
        >
          This is the Types Page
        </button>
      </header>
      {types.map((type) => {
        return (
          <section key={`game--${type.id}`} className="game">
            <div className="game__title">
              {type.name} Name of Breath 
            </div>
            <div className="game__players">
              {type.inhale} seconds needed to inhale
            </div>
            <div className="game__skillLevel">
              Secons to exhale {type.exhale}
            </div>
            <div className="game__skillLevel">Seconds to hold {type.hold}</div>
          </section>
        );
      })}
    </article>
  );
};
