import React, { useState } from "react"

export const TypeContext = React.createContext()

export const TypeProvider = (props) => {
    const [ types, setTypes ] = useState([]);
    const [singleType, setSingleType] = useState({});

    
    const getTypes = () => {
        return fetch("http://localhost:8000/types", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("app_token")}`
            }
        })
        .then(response => response.json())
        .then(setTypes)
    }
    
    const getSingleType = (id) => {
        return fetch(`http://localhost:8000/types/${id}`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("app_token")}`,
          },
        })
          .then((res) => res.json())
          .then(setSingleType);
      };

    return (
        <TypeContext.Provider value={{ types, getTypes, setTypes, getSingleType, singleType, setSingleType }} >
            { props.children }
        </TypeContext.Provider>
    )
}