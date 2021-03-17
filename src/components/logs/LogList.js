import React, { useContext, useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
import { LogContext } from "./LogProvider.js";
import { TimeContext } from "../times/TimeProvider.js";
// import "./game.css";

export const LogList = (props) => {
  const history = useHistory()
  const { logs, getLogs, setLogs, createLog } = useContext(LogContext);
  // const { times, getTimes, setTimes, getSingleTime, singleTime, setSingleTime } = useContext(TimeContext);
  
  const [currentLog, setCurrentLog] = useState({
    minutes: 1,
    
})
  const [currentTime, setCurrentTime] = useState({
    minutes: "",
    type: 1,
    journal: 1,
    date: "",
    time: 1
})

  useEffect(() => {
    getLogs();
  }, []);

console.log("This is currentLog", currentLog)
console.log("This is props", props.match.params)
console.log("This is logs", logs)

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
            Unique Log ID {log.id}  
            User Id of created log - {log.user} 
            </h1>
            <div className="game__players">
              This is the ID number of log: {log.journal}
            </div>
            <div className="game__skillLevel">
              Date log was created on {log.date}
            </div>
            <div className="game__skillLevel">Amount of time breathing was done for {log.time} minutes</div>
            {/* <button
          className="btn btn-2 btn-sep icon-create"
          onClick={() => {
            props.history.push({ pathname: `/logs/${log.id}` });
          }}
        >
          View this Log 
        </button> */}
        <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const log = {
                        user: parseInt(currentLog.user),
                        type: parseInt(currentLog.type),
                        journal: parseInt(currentLog.journal),
                        date: currentLog.date,
                        time: parseInt(currentLog.time)

                    }

                    // Send POST request to your API
                    createLog(log)
                        .then(() => history.push("/"))
                }}
                className="btn btn-primary">Create Breath Log</button>
          </section>
        );
      })}
    </article>
  );
};
