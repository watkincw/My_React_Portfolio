import React, { useState } from "react";
import { 
    CHeader,
    CContainer, 
    CHeaderBrand, 
    CHeaderToggler,
    CCollapse,
} from '@coreui/react';

function Header() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <CHeader>
                <CContainer fluid>
                    <CHeaderBrand href="/">CWW</CHeaderBrand>
                    <CHeaderToggler onClick={() => setVisible(!visible)} />
                    <CCollapse className="header-collapse" visible={visible}>
                    </CCollapse>
                </CContainer>
            </CHeader>
        </>
    );
}

export default Header;
