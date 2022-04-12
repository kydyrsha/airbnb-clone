import React from "react"
import banner from "../assets/img/main-banner.png"
import classes from "./Card.module.css"
import logo from "../assets/img/logo.png";

export default function Card() {
    return (
        <header>
            <nav class={classes.nav}>
                <a href="/"><img src={logo} alt="airbnb-logo.png"/></a>
            </nav>
        </header>
    )
}
