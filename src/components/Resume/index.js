import React from "react";
import {
    CListGroup,
    CListGroupItem
} from '@coreui/react';

function Resume() {
    return (
        <section>
            <h1>Resume Page</h1>
            <a href="./ColtonW_Resume.docx" download>Download my resume!</a>
            <h3>Proficiencies</h3>
                <CListGroup>
                    <CListGroupItem>
                        Finding the answers, wherever they might be! But, more specifically:
                    </CListGroupItem>
                </CListGroup>
            <h4>Frontend:</h4>
                <CListGroup>
                    <CListGroupItem>
                        HTML5
                    </CListGroupItem>
                    <CListGroupItem>
                        JavaScript
                    </CListGroupItem>
                    <CListGroupItem>
                        jQuery
                    </CListGroupItem>
                    <CListGroupItem>
                        Bootstrap/MateriaCListGroupItemze
                    </CListGroupItem>
                    <CListGroupItem>
                        AJAX
                    </CListGroupItem>
                    <CListGroupItem>
                        SASS
                    </CListGroupItem>
                </CListGroup>
            <h4>Backend:</h4>
                <CListGroup>
                    <CListGroupItem>
                        SQL, MySQL, NoSQL
                    </CListGroupItem>
                    <CListGroupItem>
                        MongoDB
                    </CListGroupItem>
                    <CListGroupItem>
                        Express
                    </CListGroupItem>
                    <CListGroupItem>
                        ReactJS
                    </CListGroupItem>
                    <CListGroupItem>
                        Node
                    </CListGroupItem>
                    <CListGroupItem>
                        Webpack
                    </CListGroupItem>
                </CListGroup>
        </section>
    );
}

export default Resume;