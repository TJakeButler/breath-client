import React, { useContext, useEffect,  } from "react";
import {useHistory} from "react-router-dom"
import { TypeContext } from "./TypeProvider.js";
// import "./game.css";

export const TypeList = (props) => {
  const { types, getTypes, setTypes } = useContext(TypeContext);
  

  useEffect(() => {
    getTypes();
  }, []);
  

  return (
    <article className="types" style={{
      marginLeft: 50
    }}
    >
      <h1>
        Welcome to Let's Breathe
      </h1>
      <h3>
        Choose a breathing pattern below
      </h3>
      {types.map((type) => {
        return (
          <section style={{
            padding: 1,
            justifyContent: "center"
          }}>
            <h1>
            {type.name} 
            </h1>
            <div class="text-primary">
              <strong>Inhale for {type.inhale} seconds</strong>
            </div>
            <div class="text-secondary">
              <strong>Hold breath for {type.hold} seconds</strong>
            </div>
            <div class="text-info">
              <strong> Exhale for {type.exhale} seconds</strong>
              </div>
            <button
          type="button" class="btn btn-primary btn-lg"
          onClick={() => {
            props.history.push({ pathname: `/types/${type.id}` });
          }}
        >
          Select this breath 
        </button>
        <hr class="my-4"></hr>
          </section>
        );
      })}
    </article>
  );
};
