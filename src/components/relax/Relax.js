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
    <fieldset>
          <div className="form-group">
            <label htmlFor="label">Journal Entry for this breathing session: </label>
            <input type="text" name="label" required autoFocus className="form-control"
              placeholder="Tag name"
              onChange={handleControlledInputChange}
              value={currentJournal.entry}
            />
          </div>
        </fieldset>

        <button type="submit"
          onClick={evt => {
            evt.preventDefault()
            createJournal()
            }}
          className="btn btn-primary">
          Create Journal Entry
        </button>

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


//   import React, { useContext, useState } from "react"
// import { TagContext } from "./TagProvider"
// export const TagForm = (props) => {
//     const {addTag} = useContext(TagContext)
//     const [tag, setTag] = useState({})
//     const handleControlledInputChange = (event) => {
//             const newTag = Object.assign({}, tag)
//             newTag[event.target.name] = event.target.value
//             setTag(newTag)
//         }
//     const constructNewTag = () => {
//             addTag({label: tag.label})
//             .then(() => props.history.push("/tags"))
//       }
//     return (
//     <>
//         <form className="tagForm">
//         <h2 className="tagForm__title">{editMode ? "Update Tag" : "Add Tag"}</h2>
//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="label">Tag label: </label>
//             <input type="text" name="label" required autoFocus className="form-control"
//               placeholder="Tag name"
//               onChange={handleControlledInputChange}
//               value={tag.label}
//             />
//           </div>
//         </fieldset>
//         <button type="submit"
//           onClick={evt => {
//             evt.preventDefault()
//             constructNewTag()
//             }}
//           className="btn btn-primary">
//           Make tag
//         </button>
//         <button onClick={() => {
//                     props.history.push(`/tags`)
//                 }}>Back
//         </button>
//       </form>
//     </>
//     )
// }