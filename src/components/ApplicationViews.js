
import React from "react"
import { Route } from "react-router-dom"
import { TypeProvider } from "./types/TypeProvider.js"
import { TypeList } from "./types/TypeList.js"
import { JournalProvider } from "./journals/JournalProvider.js"
import { JournalList } from "./journals/JournalList.js"
import { LogProvider } from "./logs/LogProvider.js"
import { LogList } from "./logs/LogList.js"
import { Relax } from "./relax/Relax.js"
import { TimeProvider } from "./times/TimeProvider.js"
import { JournalForm } from "./journals/JournalForm.js"
import { FaqList } from "./faq/FaqList.js"
import { Stress } from "./faq/Stress.js"
import { Anxiety } from "./faq/Anxiety.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <TypeProvider>
                <Route exact path="/" render={(props) => {
                    return <TypeList {...props} />
                }}>
                    
                </Route>
            </TypeProvider>


            <Route exact path="/faq" render={(props) => {
                    return <FaqList {...props} />
                }}>
                    
                </Route>
            <Route exact path="/stress" render={(props) => {
                    return <Stress {...props} />
                }}>
                    
                </Route>

            <Route exact path="/anxiety" render={(props) => {
                    return <Anxiety {...props} />
                }}>
                    
                </Route>




            <JournalProvider>  
            <TimeProvider>
            <LogProvider>  
            <TypeProvider>
                <Route exact path="/types/:id(\d+)" render={(props) => {
                    return <Relax {...props} />
                }}>
                    
                </Route>
            </TypeProvider>
            </LogProvider>  
            </TimeProvider>
            </JournalProvider>  

            <LogProvider>
            <JournalProvider>
                <Route exact path="/journals" render={(props) => {
                    return <JournalForm {...props} />
                }}>
                    
                </Route>
                <Route exact path="/logs/forms/:id(\d+)" render={(props) => {
                    return <JournalForm {...props}></JournalForm> 
                }}>
                    
                </Route>
                
            </JournalProvider>
            </LogProvider>    

                
            <TypeProvider>
            <LogProvider>
                <Route exact path="/logs" render={(props) => {
                    return <LogList {...props} />
                }}>
                    
                </Route>
            </LogProvider>
            </TypeProvider>
        </main>
    </>
}