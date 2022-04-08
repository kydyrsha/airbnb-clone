import React from "react"
import logo from "../assets/img/logo.png"

import classes from "./Header.module.css"

export default function Header() {
    return (
        <header>
            <nav class={classes.nav}>
                <a href="/"><img src={logo} alt="airbnb-logo.png"/></a>
            </nav>
        </header>
    )
}
