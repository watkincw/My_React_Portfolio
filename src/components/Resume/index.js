import React from "react";
import {
    CListGroup,
    CListGroupItem,
    CButton
} from '@coreui/react';

function Resume() {
    return (
        <section>
            <h1 className="section-title resume-title">My Resume</h1>
            <div className="resume-btn d-grid gap-1">
                <CButton color="success" size="lg" href="./ColtonW_Resume.docx" download>Download my resume!</CButton>
            </div>
            <br />
            <h6 className="section-title-prof resume-title">Proficiencies</h6>
            <div className="sarcasm">
                <CListGroup>
                    <CListGroupItem>
                        Finding the answers, wherever they might be! But, more specifically...
                    </CListGroupItem>
                </CListGroup>
            </div>
            <h4 className="section-title-FB">Frontend:</h4>
                <CListGroup>
                    <CListGroupItem className="CListGroupItem">
                        <p className="prof-p">
                            HTML5
                        </p>
                    </CListGroupItem>
                    <CListGroupItem className="CListGroupItem">
                        <p className="prof-p">
                            JavaScript
                        </p>
                    </CListGroupItem>
                    <CListGroupItem className="CListGroupItem">
                        <p className="prof-p">
                            jQuery
                        </p>
                    </CListGroupItem>
                    <CListGroupItem className="CListGroupItem">
                        <p className="prof-p">
                            Bootstrap/MateriaCListGroupItemze
                        </p>
                    </CListGroupItem>
                    <CListGroupItem className="CListGroupItem">
                        <p className="prof-p">
                            AJAX
                        </p>
                    </CListGroupItem>
                    <CListGroupItem className="CListGroupItem">
                        <p className="prof-p">
                            SASS
                        </p>
                    </CListGroupItem>
                </CListGroup>
            <h4 className="section-title-FB">Backend:</h4>
                <CListGroup>
                    <CListGroupItem className="CListGroupItem">
                        <p className="prof-p">
                            SQL, MySQL, NoSQL
                        </p>
                    </CListGroupItem>
                    <CListGroupItem className="CListGroupItem">
                        <p className="prof-p">
                            MongoDB
                        </p>
                    </CListGroupItem>
                    <CListGroupItem className="CListGroupItem">
                        <p className="prof-p">
                            Express
                        </p>
                    </CListGroupItem>
                    <CListGroupItem className="CListGroupItem">
                        <p className="prof-p">
                            ReactJS
                        </p>
                    </CListGroupItem>
                    <CListGroupItem className="CListGroupItem">
                        <p className="prof-p">
                            Node
                        </p>
                    </CListGroupItem>
                    <CListGroupItem className="CListGroupItem">
                        <p className="prof-p">
                            Webpack
                        </p>
                    </CListGroupItem>
                </CListGroup>
        </section>
    );
}

export default Resume;