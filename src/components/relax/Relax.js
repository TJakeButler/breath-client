import React, { useContext, useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
import { TypeContext } from "../types/TypeProvider.js";
import { LogContext } from "../logs/LogProvider.js";
import { TimeContext } from "../times/TimeProvider.js";
// import "./game.css";

export const Relax = (props) => {
  const history = useHistory()
  const {getSingleType, singleType } = useContext(TypeContext);
  const {createLog} = useContext(LogContext);
  const {times, getTimes} = useContext(TimeContext);
  

  const [currentLog, setCurrentLog] = useState({
    
    type: 2,
    journal: 2,
    date: "",
    time: 2
})
  
  useEffect(() => {
    getSingleType(parseInt(props.match.params.id))
  }, []);
  useEffect(() => {
    getTimes()
  }, []);
  console.log("This is time", times)
  console.log("This is currentLog", currentLog)
  console.log("This is props", props)
  console.log("This is singleType", singleType)

  const changeLogState = (param) => {
    
    const newLogState = Object.assign({}, currentLog)
    newLogState.time = param
    setCurrentLog(newLogState)
}

  return (<>
    <h1>{singleType.name}</h1>
    This is a {singleType.name} Breathing Technique
    You will inhale for {singleType.inhale} seconds
    You will then hold your breath for {singleType.hold} seconds
    Next you will exhale for {singleType.exhale} seconds
    Good job keep doing that for X amount of time
    <button onClick={() => { {changeLogState(1)}}}>1:00</button>
    <button onClick={() => { {changeLogState(2)}}}>2:00</button>
    <button onClick={() => { {changeLogState(3)}}}>3:00</button>
    
    <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const log = {
                        user: parseInt(currentLog.user),
                        type: parseInt(currentLog.type),
                        journal: parseInt(currentLog.journal), 
                        date: currentLog.date,
                        time: currentLog.time

                    }

                    // Send POST request to your API
                    createLog(log)
                        .then(() => history.push("/logs"))
                }}
                className="btn btn-primary">Create Breath Log</button>
    </>
  )
  }
