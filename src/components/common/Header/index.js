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
        <div className="my-logo">
            <CHeader>
                <CContainer fluid>
                    <CHeaderBrand>CWW</CHeaderBrand>
                    <CHeaderToggler onClick={() => setVisible(!visible)} />
                    <CCollapse visible={visible} />
                </CContainer>
            </CHeader>
        </div>
    );
}

export default Header;
