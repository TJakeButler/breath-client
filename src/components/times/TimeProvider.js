import React, { useState } from "react"

export const TimeContext = React.createContext()

export const TimeProvider = (props) => {
    const [ times, setTimes ] = useState([]);
    const [singleTime, setSingleTime] = useState({});

    console.log("This is props", props)
    console.log("This is times", times)

    
    const getTimes = () => {
        return fetch("http://localhost:8000/times", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(response => response.json())
        .then(setTimes)
    }
    
    const getSingleTime = (id) => {
        return fetch(`http://localhost:8000/times/${id}`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`,
          },
        })
          .then((res) => res.json())
          .then(setSingleTime);
      };

    return (
        <TimeContext.Provider value={{ times, getTimes, setTimes, getSingleTime, singleTime, setSingleTime }} >
            { props.children }
        </TimeContext.Provider>
    )
}