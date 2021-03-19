import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { JournalContext } from "./JournalProvider.js"
import { LogContext } from "../logs/LogProvider.js"

export const JournalForm = (props) => {
    const history = useHistory()
    const { createJournal } = useContext(JournalContext)
    // const { getSingleLog } = useContext(LogContext)
    const [currentJournal, setCurrentJournal] = useState({
        entry: ""
    })

    // useEffect(() => {
    //     getSingleLog(props.match.params.id)
    //     .then(setCurrentJournal)
        
    // }, [])

    const changeJournalState = (domEvent) => {
        const newJournalState = Object.assign({}, currentJournal)
        newJournalState[domEvent.target.name] = domEvent.target.value
        setCurrentJournal(newJournalState)
    }
    return (
        <form className = "companyForm">
            <h2 className = "companyForm__title">How did you feel about that breath session</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor = "entry">Entry:</label>
                    <textarea name = "entry" required className = "form-control" value = {currentJournal.entry} onChange={changeJournalState} />
                </div>
            </fieldset>
            <button type = "submit"
                onClick = {evt => {
                    evt.preventDefault()
                    const journal = {
                        entry: currentJournal.entry,
                        
                    }
                    createJournal(journal)
                        .then(() => history.push("/logs"))
                }}
                className= "companySaveButton">Add Journal Entry</button>
        </form>
    )
}