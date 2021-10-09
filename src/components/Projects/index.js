import React from "react";


function Projects() {
    return (
        <div>
            <div className="flex-row">
                <div>
                    <h3>Movie Reccomendation App</h3>
                    <a href="https://watkincw.github.io/what-the-bleep-should-I-watch/">
                        <img 
                            src={ require(`../../assets/projectImages/MovieRecommender.jpg`).default }
                            alt="Movie Recommender"
                            className="img-thumbnail mx-1"
                            key="Movie Recommender"
                        />
                    </a>
                    <a href="https://github.com/watkincw/what-the-bleep-should-I-watch">GitHub Repo</a>
                </div>                
                <div>
                    <h3>Social Network API(NoSQL) - Not a deployed app</h3>
                    <h5>Click the image below to be taken to the GitHub Repo that holds links to walkthrough videos of how this app works!</h5>
                    <a href="https://github.com/watkincw/Social-Network-API">
                        <img 
                            src={ require(`../../assets/projectImages/SocialNetworkAPI.jpg`).default }
                            alt="Social Network API(NoSQL)"
                            className="img-thumbnail mx-1"
                            key="Social Network API(NoSQL)"
                        />
                    </a>
                </div>                
                <div>
                    <h3>Team Profile Generator</h3>
                    <a href="https://drive.google.com/file/d/-E8Yw1QE8MMYvWy92oFx0iMOv7mZ/view">
                        <img 
                            src={ require(`../../assets/projectImages/TeamProfileGenerator.jpg`).default }
                            alt="Team Profile Generator"
                            className="img-thumbnail mx-1"
                            key="Team Profile Generator"
                        />
                    </a>
                    <a href="https://github.com/watkincw/team-profile-generator">GitHub Repo</a>
                </div>                
                <div>
                    <h3>Budget Tracker (PWA w/ Offline Functionality)</h3>
                    <a href="https://tranquil-wildwood-44812.herokuapp.com/">
                        <img 
                            src={ require(`../../assets/projectImages/BudgetTracker.jpg`).default }
                            alt="Budget Tracker"
                            className="img-thumbnail mx-1"
                            key="Budget Tracker"
                        />
                    </a>
                    <a href="https://github.com/watkincw/Budget-Tracker">GitHub Repo</a>
                </div>                
                <div>
                    <h3>Regex Tutorial(Not a deployed)</h3>
                    <a href="https://gist.github.com/watkincw/8f68b06ab3079795b9868e395b0d76de">
                        <img 
                            src={ require(`../../assets/projectImages/RegexTutorial.jpg`).default }
                            alt="Regex Tutorial"
                            className="img-thumbnail mx-1"
                            key="Regex Tutorial"
                        />
                    </a>
                </div>                
                <div>
                    <h3>Interactive Full-Stack Project(Book Tracker)</h3>
                    <a href="https://dry-wildwood-65158.herokuapp.com/">
                        <img 
                            src={ require(`../../assets/projectImages/BookTracker.jpg`).default }
                            alt="Interactive Full-Stack Project"
                            className="img-thumbnail mx-1"
                            key="Interactive Full-Stack Project"
                        />
                    </a>
                    <a href="https://github.com/watkincw/book-tracker">GitHub Repo</a>
                </div>                
            </div>
        </div>
    );
}

export default Projects;