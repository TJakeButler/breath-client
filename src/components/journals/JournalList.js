import React, { useContext, useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
import { JournalContext } from "./JournalProvider.js";
import { useForm } from "react-hook-form";
// import "./game.css";

export const JournalList = (props) => {
  const history = useHistory()
  const { journals, getJournals, setJournals, createJournal } = useContext(JournalContext);
  const { register, handleSubmit } = useForm();
  
  const [currentJournal, setCurrentJournal] = useState({
    
    entry: "Default journal entry"
})

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
        
        <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                    const journal = {
                        entry: currentJournal.entry
                    }
                    // Send POST request to your API
                    createJournal(journal)
                        .then(() => history.push("/journals"))
                }}
                className="btn btn-primary">Create Breath Log</button>
          </section>
        );
      })}
    </article>
  );
};
