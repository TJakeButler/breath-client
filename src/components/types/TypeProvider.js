import React, { useState } from "react"

export const TypeContext = React.createContext()

export const TypeProvider = (props) => {
    const [ types, setTypes ] = useState([])

    console.log("This is props", props)
    console.log("This is types", types)

    
    const getTypes = () => {
        return fetch("http://localhost:8000/types", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(response => response.json())
        .then(setTypes)
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
        <TypeContext.Provider value={{ types, getTypes, setTypes }} >
            { props.children }
        </TypeContext.Provider>
    )
}