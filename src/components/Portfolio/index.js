import React from "react";
import ProjectList from '../Project';

function Portfolio({ currentCategory }) {
    return (
        <section>
            <ProjectList category={ currentCategory.name } />
        </section>
    );
}

export default Portfolio;