import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { JournalContext } from "./JournalProvider.js"
import { LogContext } from "../logs/LogProvider.js"

export const JournalForm = (props) => {
    const history = useHistory()
    const { createJournal } = useContext(JournalContext)
    const { getSingleLog, editLog } = useContext(LogContext)
    const [currentJournal, setCurrentJournal] = useState({
        entry: ""
    })

    useEffect(() => {
        getSingleLog(props.match.params.id)
        .then(setCurrentJournal)
        
    }, [])
    

    const changeJournalState = (domEvent) => {
        const newJournalState = Object.assign({}, currentJournal)
        newJournalState[domEvent.target.name] = domEvent.target.value
        setCurrentJournal(newJournalState)
    }
    return (
        <form className = "journalForm">
            <h2 className = "journalForm__title">How did you feel about that breath session</h2>
            <fieldset>
                <div className="form-group">
                    <label for="exampleTextarea" htmlFor = "journal">Entry:</label>
                    <textarea class="form-control" id="exampleTextarea" rows="3" name = "journal" required className = "form-control" value = {currentJournal.journal} onChange={changeJournalState} />
                </div>
            </fieldset>
            <button type="button" class="btn btn-success" type = "submit"
                onClick = {evt => {
                    evt.preventDefault()
                    const journal = {
                        id: parseInt(props.match.params.id),
                        time: currentJournal.time.id,
                        type: currentJournal.type.id,
                        user: currentJournal.user.id,
                        journal: currentJournal.journal,
                        
                    }
                    editLog(journal)
                        .then(() => history.push("/logs"))
                }}
                >Add Journal Entry</button>
        </form>
    )
}