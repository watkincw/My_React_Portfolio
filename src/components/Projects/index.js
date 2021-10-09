import React from "react";
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody, CImage } from '@coreui/react';


function Projects() {
    return (
        <CAccordion flush activeItemKey={6}>
            <CAccordionItem itemKey={1}>
                <CAccordionHeader>Movie Reccomendation App</CAccordionHeader>
                <CAccordionBody>
                    <a href="https://watkincw.github.io/what-the-bleep-should-I-watch/">
                        <CImage 
                            src={ require(`../../assets/projectImages/MovieRecommender.jpg`).default }
                            alt="Movie Recommender"
                            className="img-thumbnail mx-1"
                            key="Movie Recommender"
                        />
                    </a>
                    <a href="https://github.com/watkincw/what-the-bleep-should-I-watch">GitHub Repo</a>
                </CAccordionBody>
            </CAccordionItem>                
            <CAccordionItem itemKey={2}>
                <CAccordionHeader>Social Network API(NoSQL) - Not a deployed app</CAccordionHeader>
                <h5>Click the image below to be taken to the GitHub Repo that holds links to walkthrough videos of how this app works!</h5>
                <CAccordionBody>
                    <a href="https://github.com/watkincw/Social-Network-API">
                        <img 
                            src={ require(`../../assets/projectImages/SocialNetworkAPI.jpg`).default }
                            alt="Social Network API(NoSQL)"
                            className="img-thumbnail mx-1"
                            key="Social Network API(NoSQL)"
                        />
                    </a>
                </CAccordionBody>
            </CAccordionItem>                
            <CAccordionItem itemKey={3}>
                <CAccordionHeader>Team Profile Generator</CAccordionHeader>
                <CAccordionBody>
                    <a href="https://drive.google.com/file/d/-E8Yw1QE8MMYvWy92oFx0iMOv7mZ/view">
                        <img 
                            src={ require(`../../assets/projectImages/TeamProfileGenerator.jpg`).default }
                            alt="Team Profile Generator"
                            className="img-thumbnail mx-1"
                            key="Team Profile Generator"
                        />
                    </a>
                    <a href="https://github.com/watkincw/team-profile-generator">GitHub Repo</a>
                </CAccordionBody>
            </CAccordionItem>                
            <CAccordionItem itemKey={4}>
                <CAccordionHeader>Budget Tracker (PWA w/ Offline Functionality)</CAccordionHeader>
                <CAccordionBody>
                    <a href="https://tranquil-wildwood-44812.herokuapp.com/">
                        <img 
                            src={ require(`../../assets/projectImages/BudgetTracker.jpg`).default }
                            alt="Budget Tracker"
                            className="img-thumbnail mx-1"
                            key="Budget Tracker"
                        />
                    </a>
                    <a href="https://github.com/watkincw/Budget-Tracker">GitHub Repo</a>
                </CAccordionBody>
            </CAccordionItem>                
            <CAccordionItem itemKey={5}>
                <CAccordionHeader>Regex Tutorial(Not a deployed)</CAccordionHeader>
                <CAccordionBody>
                    <a href="https://gist.github.com/watkincw/8f68b06ab3079795b9868e395b0d76de">
                        <img 
                            src={ require(`../../assets/projectImages/RegexTutorial.jpg`).default }
                            alt="Regex Tutorial"
                            className="img-thumbnail mx-1"
                            key="Regex Tutorial"
                        />
                    </a>
                </CAccordionBody>
            </CAccordionItem>                
            <CAccordionItem itemKey={6}>
                <CAccordionHeader>Interactive Full-Stack Project(Book Tracker)</CAccordionHeader>
                <CAccordionBody>
                    <a href="https://dry-wildwood-65158.herokuapp.com/">
                        <img 
                            src={ require(`../../assets/projectImages/BookTracker.jpg`).default }
                            alt="Interactive Full-Stack Project"
                            className="img-thumbnail mx-1"
                            key="Interactive Full-Stack Project"
                        />
                    </a>
                    <a href="https://github.com/watkincw/book-tracker">GitHub Repo</a>
                </CAccordionBody>
            </CAccordionItem>                
        </CAccordion>
    );
}

export default Projects;