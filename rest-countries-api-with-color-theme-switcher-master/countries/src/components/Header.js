import React from "react"
import { ThemeToggle } from "./ThemeToggle"
import "../style/Header.css"
export class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <h1>Where in the world?</h1>
                <ThemeToggle />
            </div>
        )
    }
}
