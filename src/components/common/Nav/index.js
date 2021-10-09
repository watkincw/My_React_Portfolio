import React from "react";
import Header from '../Header';
// Styles
import {
    CNavItem,
    CHeaderNav,
    CNavLink
} from '@coreui/react';

function Nav() {

    return (
        <div>
            <Header></Header>
            <CHeaderNav>
                <CNavItem>
                    <CNavLink href="/" active>
                        About Me
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink href="/portfolio" active>
                        Portfolio
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink href="/contact" active>
                        Contact Me
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink href="/resume" active>
                        Resume
                    </CNavLink>
                </CNavItem>
            </CHeaderNav>
        </div>
    );
}

export default Nav;