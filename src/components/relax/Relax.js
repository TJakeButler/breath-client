import React, { useContext, useEffect, useState } from "react";
import {useHistory, useLocation, useParams} from "react-router-dom"
import { TypeContext } from "../types/TypeProvider.js";
import { LogContext } from "../logs/LogProvider.js";
import { TimeContext } from "../times/TimeProvider.js";
import { JournalContext } from "../journals/JournalProvider.js";
import Timer from "react-compound-timer";
import './Relax.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// import "./game.css";

export const Relax = (props) => {
  const params = useParams()
  const history = useHistory()
  const {getSingleType, singleType } = useContext(TypeContext);
  const {journals, getJournals, setJournals, createJournal} = useContext(JournalContext);
  const {createLog} = useContext(LogContext);
  const {times, getTimes} = useContext(TimeContext);
  const [formPost, setFormPost] = useState({})
  const [key, setKey] = useState(0);

//   const handleControlledInputChange = (event) =>{
//     const newPost = Object.assign({}, formPost)
//     newPost[event.target.name] = event.target.value
//     setFormPost(newPost)
// }


const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};


  const [currentLog, setCurrentLog] = useState({
    
    type: parseInt(params.id),
    journal: "",
    date: "",
    time: 3
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
  // useEffect(() => {
  //   getJournals()
  // }, []);
  // console.log("This is journals entries", journals)
  console.log("This is journals SingleType!!!", singleType)
  // console.log("This is params", params.id)
  console.log("This is currentLog", currentLog)
  // console.log("This is props", props)
  

  const changeLogState = (param) => {
    
    const newLogState = Object.assign({}, currentLog)
    newLogState.time = param
    setCurrentLog(newLogState)
}
//   const changeJournalState = (param) => {
    
//     const newJournalState = Object.assign({}, currentJournal)
//     newJournalState.entry = param
//     setCurrentJournal(newJournalState)
// }
// Logic for Breathing Circle Animation



// const totalTime = 7500;

// function breathAnimation() {
// const container = document.getElementById('container');
// const words = document.getElementById('text');

// const breatheTime = (totalTime / 5) * 2;
// const holdTime = totalTime / 5;
//   words.innerText = 'Breathe In!';
//   container.className = 'container grow';

//   setTimeout(() => {
//     words.innerText = 'Hold';

//     setTimeout(() => {
//       words.innerText = 'Breathe Out!';
//       container.className = 'container shrink';
//     }, holdTime);
//   }, breatheTime);
// }







//Ends Here

// let intervalReference 

// const myInterval = () => {
//   intervalReference = setInterval(breathAnimation, totalTime)
//   console.log("Start Breathing")
// }
// const myStopFunction = () => {
//   clearInterval(intervalReference);
//   console.log("Stop Breathing")
// }
  return (<>
  <div>
    <h1>{singleType.name}</h1>
    This is a {singleType.name} Breathing Technique
    You will inhale for {singleType.inhale} seconds
    You will then hold your breath for {singleType.hold} seconds
    Next you will exhale for {singleType.exhale} seconds
    Good job keep doing that for X amount of time
    <button onClick={() => { {changeLogState(1)}}}>1:00</button>
    <button onClick={() => { {changeLogState(2)}}}>2:00</button>
    <button onClick={() => { {changeLogState(3)}}}>3:00</button>
    {/* <button onClick={myInterval()}>Start the Breathing </button>
    <button onClick={myStopFunction()}>Stop Breathing </button> */}
                <button type="submit"
                onClick={evt => {
                  
                    // Prevent form from being submitted
                    evt.preventDefault()
                    const log = {
                        user: parseInt(currentLog.user),
                        type: parseInt(currentLog.type),
                        journal: currentLog.journal, 
                        date: currentLog.date,
                        time: currentLog.time
                    }
                    
                    // Send POST request to your API
                    createLog(log)
                        .then(res => res.json())
                        .then((log) => history.push(`/logs`))
                        .then(console.log("Create Log Button Clicked", log))
                }}
                className="btn btn-primary">Create Breath Log</button>

                
</div>

<div>
{/* <Timer
    initialTime={180000}
    startImmediately={false}
    direction="backward"
>
    {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
            <div>
                
                <Timer.Minutes /> minutes
                <Timer.Seconds /> seconds
                
            </div>
            <div>{timerState}</div>
            <br />
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </React.Fragment>
    )}
</Timer> */}

</div>
<div className="DeepBreath">
    <CountdownCircleTimer
        {...timerProps}
        key={key}
        colors={[["#EF798A"]]}
        duration={currentLog.time * 60}
        initialRemainingTime={currentLog.time * 60}
        onComplete={() => [true, 0]}
      >
        {renderTime("minutes", currentLog.time)}
      </CountdownCircleTimer>
    </div>
    <div className="button-wrapper">
        <button onClick={() => setKey(prevKey => prevKey + 1)}>
          Restart Timer
        </button>
      </div>
<div className="DeepBreath">
      <CountdownCircleTimer
        {...timerProps}
        key={key}
        colors={[["#218380"]]}
        duration={singleType.inhale}
        initialRemainingTime={singleType.inhale}
        onComplete={() => [true, 1000]}
      >
        {renderTime("Inhale", singleType.inhale)}
      </CountdownCircleTimer>
    </div>
<div className="DeepBreath">
      <CountdownCircleTimer
        {...timerProps}
        key={key}
        colors={[["#218380"]]}
        duration={singleType.exhale}
        initialRemainingTime={singleType.exhale}
        onComplete={() => [true, 1000]}
      >
        {renderTime("Exhale", singleType.exhale)}
      </CountdownCircleTimer>
    </div>
<div className="DeepBreath">
      <CountdownCircleTimer
        {...timerProps}
        key={key}
        colors={[["#218380"]]}
        duration={singleType.hold}
        initialRemainingTime={singleType.hold}
        onComplete={() => [true, 1000]}
      >
        {renderTime("Hold", singleType.hold)}
      </CountdownCircleTimer>
    </div>
      
    </>
  )
  }
