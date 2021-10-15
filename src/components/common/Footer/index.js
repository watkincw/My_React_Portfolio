import React from "react";
import {
    CFooter,
    CLink
} from '@coreui/react';

function Footer() {
    return (
        <CFooter>
            <div className="image" name="Links">
                    <a href="https://github.com/watkincw"><img alt="GitHub Link" src="./icons/GitHub-Logos/GitHub_Logo.png" /></a>
                    <a href="https://www.linkedin.com/in/colton-watkins-2059a8211/"><img alt="LinkedIn Link" src="./icons/LinkedIn-Logos/LI-Logo.png" /></a>
                    <a href="https://stackoverflow.com/users/15890614/colton-watkins"><img alt="StackOverflow Link" src="./icons/StackOverflow/logo-stackoverflow.png" /></a>
            </div>
            <div>
                <CLink href="https://coreui.io">CoreUI</CLink>
                <span>&copy; 2021 creativeLabs.</span>
            </div>
            <div>
                <span>Powered by </span>
                <CLink href="https://coreui.io">CoreUI</CLink>
            </div>
        </CFooter>
    );
}

export default Footer;