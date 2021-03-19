import React, { useContext, useEffect, useState } from "react";
import {useHistory, useLocation, useParams} from "react-router-dom"
import { TypeContext } from "../types/TypeProvider.js";
import { LogContext } from "../logs/LogProvider.js";
import { TimeContext } from "../times/TimeProvider.js";
import { JournalContext } from "../journals/JournalProvider.js";
// import "./game.css";

export const Relax = (props) => {
  const params = useParams()
  const history = useHistory()
  const {getSingleType, singleType } = useContext(TypeContext);
  const {journals, getJournals, setJournals, createJournal} = useContext(JournalContext);
  const {createLog} = useContext(LogContext);
  const {times, getTimes} = useContext(TimeContext);
  const [formPost, setFormPost] = useState({})

  const handleControlledInputChange = (event) =>{
    const newPost = Object.assign({}, formPost)
    newPost[event.target.name] = event.target.value
    setFormPost(newPost)
}
  

  const [currentLog, setCurrentLog] = useState({
    
    type: parseInt(params.id),
    journal: null,
    date: "",
    time: 1
})
  const [currentJournal, setCurrentJournal] = useState({
    
    entry: "Default journal entry"
})
  
  useEffect(() => {
    getSingleType(parseInt(props.match.params.id))
  }, []);
  useEffect(() => {
    getTimes()
  }, []);
  useEffect(() => {
    getJournals()
  }, []);
  console.log("This is journals entries", journals)
  // console.log("This is params", params.id)
  console.log("This is currentLog", currentLog)
  // console.log("This is props", props)
  

  const changeLogState = (param) => {
    
    const newLogState = Object.assign({}, currentLog)
    newLogState.time = param
    setCurrentLog(newLogState)
}
  const changeJournalState = (param) => {
    
    const newJournalState = Object.assign({}, currentJournal)
    newJournalState.entry = param
    setCurrentJournal(newJournalState)
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
                        .then(res => res.json())
                        .then((log) => history.push(`/journals/forms/${log.id}`))
                        .then(console.log(log))
                }}
                className="btn btn-primary">Create Breath Log</button>
    
    </>
  )
  }
