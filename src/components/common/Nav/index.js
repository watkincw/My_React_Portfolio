import React from "react";
import Header from '../Header';

function Nav() {

    return (
        <div>
            <Header></Header>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="/">About Me</a>
                    </li>
                    <li className="mx-2">
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li className="mx-2">
                        <a href="/contact">Contact Me</a>
                    </li>
                    <li className="mx-2">
                        <a href="/resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;