import React from "react"
import { Link } from "react-router-dom"
import logo from '../img/Lets_breathe.png'; 


export const NavBar = (props) => {
    return (
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-info">
            <img src={logo}></img>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link class="nav-link" to="/">Home</Link>
            </li>

            <li class="nav-item active">
            <Link class="nav-link" to="/logs">Logs</Link>
            </li>

            <li class="nav-item active">
            <Link class="nav-link" to="/faq">FAQ's</Link>
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

