import React, { useState } from "react"

export const JournalContext = React.createContext()

export const JournalProvider = (props) => {
    const [ journals, setJournals ] = useState([])

    const getJournals = () => {
        return fetch("http://localhost:8000/journals", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("app_token")}`
            }
        })
        .then(response => response.json())
        .then(setJournals)
    }
    
    const createJournal = (journal) => {
        return fetch(`http://localhost:8000/journals`, { 
        method: "POST",    
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("app_token")}`
        }, body: JSON.stringify(journal)
    })
        .then(getJournals)
        
    }
    

    return (
        <JournalContext.Provider value={{ journals, getJournals, setJournals, createJournal }} >
            { props.children }
        </JournalContext.Provider>
    )
}