import React, { useContext, useEffect, useState } from "react";
import {useHistory, useLocation, useParams} from "react-router-dom"
import { TypeContext } from "../types/TypeProvider.js";
import { LogContext } from "../logs/LogProvider.js";
import { TimeContext } from "../times/TimeProvider.js";
import './Relax.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


export const Relax = (props) => {
  const params = useParams()
  const history = useHistory()
  const {getSingleType, singleType } = useContext(TypeContext);
  const {createLog} = useContext(LogContext);
  const {times, getTimes} = useContext(TimeContext);
  const [formPost, setFormPost] = useState({})
  const [key, setKey] = useState(0);

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

  
  useEffect(() => {
    getSingleType(parseInt(props.match.params.id))
  }, []);
  useEffect(() => {
    getTimes()
  }, []);
 
  
  const changeLogState = (param) => {
    
    const newLogState = Object.assign({}, currentLog)
    newLogState.time = param
    setCurrentLog(newLogState)
}

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
                        
                }}
                className="btn btn-primary">Create Breath Log</button>  
</div>

<div>

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
