import React, { useContext, useEffect,  } from "react";
import {useHistory} from "react-router-dom"
import { LogContext } from "./LogProvider.js";
// import "./game.css";

export const LogList = (props) => {
  const { logs, getLogs, setLogs } = useContext(LogContext);
  

  useEffect(() => {
    getLogs();
  }, []);
console.log("This is props", props.match.params)
console.log("This is types", logs)
  return (
    <article className="logs">
      <h1>
        This is your log of past breaths
      </h1>
      {logs.map((log) => {
        return (
          <section key={`game--${log.id}`} className="game">
            <h1 className="game__title">
            User Id of created log - {log.user} 
            </h1>
            <div className="game__players">
              This is the ID number of log: {log.journal}
            </div>
            <div className="game__skillLevel">
              Date log was created on {log.date}
            </div>
            <div className="game__skillLevel">Amount of time breathing was done for {log.time} minutes</div>
            <button
          className="btn btn-2 btn-sep icon-create"
          onClick={() => {
            props.history.push({ pathname: `/logs/${log.id}` });
          }}
        >
          View this Log 
        </button>
          </section>
        );
      })}
    </article>
  );
};
