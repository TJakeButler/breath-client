import React, { useState } from "react"

export const LogContext = React.createContext()

export const LogProvider = (props) => {
    const [ logs, setLogs ] = useState([]);
    const [singleLog, setSingleLog] = useState({});

    console.log("This is props", props)
    console.log("This is logs", logs)
    console.log("This is singleLog", singleLog)

    
    const getLogs = () => {
        return fetch("http://localhost:8000/logs", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(response => response.json())
        .then(setLogs)
    }
    
    const getSingleLog = (id) => {
        return fetch(`http://localhost:8000/logs/${id}`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`,
          },
        })
          .then((res) => res.json())
          .then(setSingleLog);
      };

    return (
        <LogContext.Provider value={{ logs, getLogs, setLogs, singleLog, getSingleLog,  setSingleLog }} >
            { props.children }
        </LogContext.Provider>
    )
}