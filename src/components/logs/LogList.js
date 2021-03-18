import React, { useContext, useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
import { LogContext } from "./LogProvider.js";
import { TimeContext } from "../times/TimeProvider.js";
import { TypeContext } from "../types/TypeProvider.js";
// import "./game.css";

export const LogList = (props) => {
  const history = useHistory()
  const { logs, getLogs, setLogs, createLog } = useContext(LogContext);
  const { types, getTypes, setTypes } = useContext(TypeContext);
  
  useEffect(() => {
    getLogs();
  }, []);
  useEffect(() => {
    getTypes();
  }, []);

console.log("This is props", props.match.params)
console.log("This is logs", logs)
console.log("This is TYPES", types)

  return (
    <article className="logs">
      <h1>
        This is your log of past breaths
      </h1>
      {logs.map((log) => {
        console.log(log)
        return (
          <section key={`game--${log.id}`} className="game">
            <h1 className="game__title">
            The Breath Type You Selected: {log.type.name}  
            {/* User Id of created log - {log.user.id}  */}
            </h1>
            <div className="game__players">
              Your journal entry: {log.journal.entry}
            </div>
            <div className="game__skillLevel">
              Date log was created on {log.date}
            </div>
            <div className="game__skillLevel">Amount of time breathing was done for {log.time.minutes} minutes</div>
            
          </section>
        );
      })}
    </article>
  );
};
