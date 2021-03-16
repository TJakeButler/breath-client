
import React from "react"
import { Route } from "react-router-dom"
import { TypeProvider } from "./types/TypeProvider.js"
import { TypeList } from "./types/TypeList.js"

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
        </main>
    </>
}