import React, { useContext, useEffect,  } from "react";
import {useHistory} from "react-router-dom"
import { JournalContext } from "./JournalProvider.js";
// import "./game.css";

export const JournalList = (props) => {
  const { journals, getJournals, setJournals } = useContext(JournalContext);
  

  useEffect(() => {
    getJournals();
  }, []);
console.log("This is journals", journals)
  return (
    <article className="types">
      <header>
      </header>
      {journals.map((journal) => {
        return (
          <section key={`game--${journal.id}`} className="game">
            <div className="game__title">
            Here are journal entries - {journal.entry} 
            </div>
            
            
            <button
          className="btn btn-2 btn-sep icon-create"
          onClick={() => {
            props.history.push({ pathname: `/types/${journal.id}/delete` });
          }}
        >
          Delete 
        </button>
            <button
          className="btn btn-2 btn-sep icon-create"
          onClick={() => {
            props.history.push({ pathname: `/types/${journal.id}/edit` });
          }}
        >
          Edit 
        </button>
          </section>
        );
      })}
    </article>
  );
};
