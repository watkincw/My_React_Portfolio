import React from "react";
import Header from '../Header';
// Styles
import "../../../App.css";
import {
    CNavItem,
    CHeaderNav,
    CNavLink
} from '@coreui/react';

function Nav() {

    return (
        <div className="my-header">
            <div style={{ backgroundColor: "Blue" }} >
                <Header />
            </div>
            <div className="my-nav-ul">
                <CHeaderNav>
                        <CNavItem className="my-nav-li-link">
                                <CNavLink href="../../About/index.js" active>
                                    About Me
                                </CNavLink>
                        </CNavItem>
                        <CNavItem className="my-nav-li-link">
                                <CNavLink href="../../Portfolio/portfolio" active>
                                    Portfolio
                                </CNavLink>
                        </CNavItem>
                        <CNavItem className="my-nav-li-link">
                                <CNavLink href="../../Contact/index.js" active>
                                    Contact Me
                                </CNavLink>
                        </CNavItem>
                        <CNavItem className="my-nav-li-link">
                                <CNavLink href="../../Resume/index.js" active>
                                    Resume
                                </CNavLink>
                        </CNavItem>
                </CHeaderNav>
            </div>
        </div>
    );
}

export default Nav;