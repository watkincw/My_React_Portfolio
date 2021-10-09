import React from "react";

function Resume() {
    return (
        <section>
            <h1>Resume Page</h1>
            <a href="./ColtonW_Resume.docx" download>Download my resume!</a>
            {/* <a href="src/components/Resume/ColtonW_Resume.docx" download>Download my resume!</a> */}
            <h3>Proficiencies</h3>
                <li>
                    Finding the answers, wherever they might be! But, more specifically:
                </li>
            <h4>Frontend:</h4>
                <li>
                    HTML5
                </li>
                <li>
                    JavaScript
                </li>
                <li>
                    jQuery
                </li>
                <li>
                    Bootstrap/Materialize
                </li>
                <li>
                    AJAX
                </li>
                <li>
                    SASS
                </li>
            <h4>Backend:</h4>
                <li>
                    SQL, MySQL, NoSQL
                </li>
                <li>
                    MongoDB
                </li>
                <li>
                    Express
                </li>
                <li>
                    ReactJS
                </li>
                <li>
                    Node
                </li>
                <li>
                    Webpack
                </li>
        </section>
    );
}

export default Resume;