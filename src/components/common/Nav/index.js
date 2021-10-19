import React from "react";
import Header from '../Header';
// Styles
import "../../../App.css";
import {
    CNavItem,
    CHeaderNav
} from '@coreui/react';
import { Link } from "react-router-dom";

function Nav() {

    return (
        <div className="my-header">
            <div style={{ backgroundColor: "Blue" }} >
                <Header />
            </div>
            <div className="my-nav-ul">
                <CHeaderNav>
                        <CNavItem className="my-nav-li-link">
                                <Link to="/" active>
                                    About Me
                                </Link>
                        </CNavItem>
                        <CNavItem className="my-nav-li-link">
                                <Link to="/portfolio" active>
                                    Portfolio
                                </Link>
                        </CNavItem>
                        <CNavItem className="my-nav-li-link">
                                <Link to="/contact" active>
                                    Contact Me
                                </Link>
                        </CNavItem>
                        <CNavItem className="my-nav-li-link">
                                <Link to="/resume" active>
                                    Resume
                                </Link>
                        </CNavItem>
                </CHeaderNav>
            </div>
        </div>
    );
}

export default Nav;