import React, { useContext, useEffect,  } from "react";
import {useHistory} from "react-router-dom"
import { TypeContext } from "../types/TypeProvider.js";
// import "./game.css";

export const Relax = (props) => {
  const {getSingleType, singleType } = useContext(TypeContext);
  
  useEffect(() => {
    getSingleType(parseInt(props.match.params.id))
  }, []);

  console.log("This is props", props)
  console.log("This is singleType", singleType)

  return (<>
    <h1>{singleType.name}</h1>
    This is a {singleType.name} Breathing Technique
    You will inhale for {singleType.inhale} seconds
    You will then hold your breath for {singleType.hold} seconds
    Next you will exhale for {singleType.exhale} seconds
    Good job keep doing that for X amount of time
    <button>1:00</button>
    <button>2:00</button>
    <button>3:00</button>
    <button>Play</button>
    </>
  )
  }
