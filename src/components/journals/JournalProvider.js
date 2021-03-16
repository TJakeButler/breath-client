import React, { useState } from "react"

export const JournalContext = React.createContext()

export const JournalProvider = (props) => {
    const [ journals, setJournals ] = useState([])

    console.log("This is props", props)
    console.log("This is journals", journals)

    
    const getJournals = () => {
        return fetch("http://localhost:8000/journals", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(response => response.json())
        .then(setJournals)
    }
    
    // const createGame = (game) => {
    //     return fetch(`http://localhost:8000/games`, { 
    //     method: "POST",    
    //     headers:{
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Authorization": `Token ${localStorage.getItem("lu_token")}`
    //     }, body: JSON.stringify(game)
    // })
    //     .then(setGames)
        
    // }
    
    // const getGameTypes = () => {
        
    //     return fetch("http://localhost:8000/gametypes", { headers:{
    //         "Authorization": `Token ${localStorage.getItem("lu_token")}`
    //     } })
        
    //         .then(response => response.json())
    //         .then(setTypes)
    // }

    return (
        <JournalContext.Provider value={{ journals, getJournals, setJournals }} >
            { props.children }
        </JournalContext.Provider>
    )
}