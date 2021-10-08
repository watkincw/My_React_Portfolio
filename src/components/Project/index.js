import React, { useState } from "react";

function ProjectList() {
    const [currentProject] = useState();

    const [projects] = useState([
        {
            name: 'Movie Recomender',
            descriptioon: 'Gives you movie recomendations based on criteria YOU set!'
        },
        {
            name: 'Project 2',
            descriptioon: 'Another Project'
        },
        {
            name: 'Project 3',
            descriptioon: 'Another Project'
        },
        {
            name: 'Project 4',
            descriptioon: 'Another Project'
        },
        {
            name: 'Project 5',
            descriptioon: 'Another Project'
        },
        {
            name: 'Project 6',
            descriptioon: 'Another Project'
        }
    ]);

    const currentProject = projects.filter((project) => project.catagory === category);

    return (
        <div>
            <div className="flex-row">
                { currentProject.map((prjct, i) => (
                    <img
                        src={ require(`../../assets/small/${category}/${i}.jpg`).default }
                        alt={ prjct.name }
                        className="img-thumbnail mx-1"
                        key={ prjct.name }
                    />
                )) }
            </div>
        </div>
    );
}

export default ProjectList;