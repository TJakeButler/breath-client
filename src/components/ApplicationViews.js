
import React from "react"
import { Route } from "react-router-dom"
import { TypeProvider } from "./types/TypeProvider.js"
import { TypeList } from "./types/TypeList.js"
import { JournalProvider } from "./journals/JournalProvider.js"
import { JournalList } from "./journals/JournalList.js"
import { Relax } from "./relax/Relax.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <TypeProvider>
                <Route exact path="/" render={(props) => {
                    return <TypeList {...props} />
                }}>
                    
                </Route>
            </TypeProvider>

            <TypeProvider>
                <Route exact path="/types/:id(\d+)" render={(props) => {
                    return <Relax {...props} />
                }}>
                    
                </Route>
            </TypeProvider>

            <JournalProvider>
                <Route exact path="/journals" render={(props) => {
                    return <JournalList {...props} />
                }}>
                    
                </Route>
            </JournalProvider>
        </main>
    </>
}