import React, { useState } from "react"

export const LogContext = React.createContext()

export const LogProvider = (props) => {
    const [ logs, setLogs ] = useState([{type:{}, user:{}, time:{}}]);
    const [singleLog, setSingleLog] = useState({});

    // console.log("This is props", props)
    // console.log("This is logs", logs)
    // console.log("This is singleLog", singleLog)
    const deleteLog = (logId) => {
        return fetch(`http://localhost:8000/logs/${logId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("app_token")}`
            }
        })
        .then(getLogs)
    }


    const editLog = (log) => {
        return fetch(`http://localhost:8000/logs/${log.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("app_token")}`
            },
            body: JSON.stringify(log)
        })
        .then(getLogs)
        
    }


    const createLog = (log) => {
        return fetch(`http://localhost:8000/logs`, { 
        method: "POST",    
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("app_token")}`
        }, body: JSON.stringify(log)
    })
        
        
    }

    const getLogs = () => {
        return fetch("http://localhost:8000/logs", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("app_token")}`
            }
        })
        .then(response => response.json())
        .then(setLogs)
    }
    
    const getSingleLog = (id) => {
        return fetch(`http://localhost:8000/logs/${id}`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("app_token")}`,
          },
        })
          .then((res) => res.json())
        
      };

    return (
        <LogContext.Provider value={{ logs, getLogs, setLogs, singleLog, getSingleLog, setSingleLog, createLog, editLog, deleteLog }} >
            { props.children }
        </LogContext.Provider>
    )
}