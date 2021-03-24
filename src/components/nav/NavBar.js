import React from "react"
import { Link } from "react-router-dom"


export const NavBar = (props) => {
    return (
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link class="nav-link" to="/">Home</Link>
            </li>

            <li class="nav-item active">
            <Link class="nav-link" to="/logs">Your Profile</Link>
            </li>
            {
                (localStorage.getItem("app_token") !== null) ?
                    <li class="nav-item active">
                        <button type="button" class="btn btn-secondary btn-lg"
                            onClick={() => {
                                localStorage.removeItem("app_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
            </nav>
    )
}

