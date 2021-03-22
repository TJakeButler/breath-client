import React, { useContext, useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
import { LogContext } from "./LogProvider.js";
import { TimeContext } from "../times/TimeProvider.js";
import { TypeContext } from "../types/TypeProvider.js";
import { Bar } from 'react-chartjs-2';


// import "./game.css";

export const LogList = (props) => {
  const history = useHistory()
  const { logs, getLogs, setLogs, createLog, deleteLog } = useContext(LogContext);
  const { types, getTypes, setTypes } = useContext(TypeContext);

  
  useEffect(() => {
    getLogs();
  }, []);
  useEffect(() => {
    getTypes();
  }, []);

console.log("This is props", props.match.params)
console.log("This is logs", logs)
console.log("This is TYPES", types)

const relaxId = 1
const relaxCount = logs.filter((obj) => obj.type.id === relaxId).length;
const sleepId = 2
const sleepCount = logs.filter((obj) => obj.type.id === sleepId).length;
const morningId = 3
const morningCount = logs.filter((obj) => obj.type.id === morningId).length;
const rechargeId = 4
const rechargeCount = logs.filter((obj) => obj.type.id === rechargeId).length;
console.log("This is number of Relax", relaxCount)
  return (
    <article className="logs">
      <h1>
        This is your log of past breaths
      </h1>
      <Bar
                      data={{
                        labels: ['Relax', 'Sleep', 'Morning', 'Recharge',],
                        datasets: [{
                          label: 'Types of Breathing You have completed',
                          data: [relaxCount, sleepCount, morningCount, rechargeCount],
                          backgroundColor: [
                              'rgba(255, 99, 132, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(255, 206, 86, 0.2)',
                              'rgba(75, 192, 192, 0.2)',
                              'rgba(153, 102, 255, 0.2)',
                              'rgba(255, 159, 64, 0.2)'
                          ],
                          borderColor: [
                              'rgba(255, 99, 132, 1)',
                              'rgba(54, 162, 235, 1)',
                              'rgba(255, 206, 86, 1)',
                              'rgba(75, 192, 192, 1)',
                              'rgba(153, 102, 255, 1)',
                              'rgba(255, 159, 64, 1)'
                          ],
                          borderWidth: 2
                      }
                    
                    ]
                            }}
                      width={100}
                      height={50}
                      options={{ maintainAspectRatio: true,
                        responsive: true,
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                beginAtZero: true
                              }
                            }
                          ]
                        }
                              
                      }}
                      />
      {logs.map((log) => {
        console.log("This is mapping over the logs", log.id)
        return (
          
          <section key={`game--${log.id}`} className="game">
            <h1 className="game__title">
            The Breath Type You Selected: {log.type.name}  
            {/* User Id of created log - {log.user.id}  */}
            </h1>
            <div className="game__players">
              Your journal entry: {log.journal}
            </div>
            <div className="game__skillLevel">
              Date log was created on {log.date}
            </div>
            <div className="game__skillLevel">Amount of time breathing was done for {log.time.minutes} minutes</div>

            <button className = "deleteLog" onClick = {() => {
                            deleteLog(log.id)
                        }}>Delete Log</button>

            <button className = "editLog" onClick = {() => {
                            history.push(`/logs/forms/${log.id}`)
                        }}>Edit Journal</button>
          </section>
        );
      })}
    </article>
  );
};
