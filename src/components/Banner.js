import React from "react"
import banner from "../assets/img/main-banner.png"
import classes from "./Banner.module.css"

export default function Banner() {
    return (
        <section className={classes.banner}>
            <img src={banner} alt="main-banner.png"/>
            <h1>Online experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
