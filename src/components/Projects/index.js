import React from "react";
import '../../App.css';
// Accordian Elements
import { 
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
    CImage
} from '@coreui/react';
// Card Elements
import {
    CCardTitle,
    CCardText,
    CButton
} from '@coreui/react';



function Projects() {
    return (
        <CAccordion flush>
            <div className="projects">
                <CAccordionItem itemKey={1} className="what-I-do">
                    <CAccordionHeader>
                        <CCardTitle>Movie Recommendation App</CCardTitle>
                    </CAccordionHeader>
                    <div className="whatIveDone">
                        <CAccordionBody>
                            <div className="center-img">
                                <CImage 
                                    src={ require(`../../assets/projectImages/MovieRecommender.jpg`).default }
                                    alt="Movie Recommender"
                                    className="img-thumbnail mx-1"
                                    key="Movie Recommender"
                                />
                            </div>
                            <CCardText>
                                <h5 className="flex-row">
                                    For many of us we have reached the end of everything we wanted to see. The question is, "What's Next?" What The BLEEP should I watch answers just that. Rather than your streaming service deciding what you should watch next based on your viewing history, we are puting the control back in the hands of the user.
                                </h5>
                            </CCardText>
                            
                            <div className="GHBtn">
                                <CButton target="_blank" href="https://github.com/watkincw/what-the-bleep-should-I-watch">GitHub Repo</CButton>
                            </div>
                            <div className="GHBtn">
                                <CButton target="_blank" href="https://github.com/watkincw/what-the-bleep-should-I-watch">Deployed App</CButton>
                            </div>
                        </CAccordionBody>
                    </div>
                </CAccordionItem>
                <CAccordionItem itemKey={2} className="what-I-do">
                    <CAccordionHeader>
                        <CCardTitle>Social Network API(NoSQL)</CCardTitle>
                    </CAccordionHeader>
                    <div className="whatIveDone">
                        <CAccordionBody>
                            <div className="center-img">
                                <CImage 
                                    src={ require(`../../assets/projectImages/SocialNetworkAPI.jpg`).default }
                                    alt="Social Network API(NoSQL)"
                                    className="img-thumbnail mx-1"
                                    key="Social Network API(NoSQL)"
                                />
                            </div>
                            <a href="https://github.com/watkincw/Social-Network-API">
                            </a>
                            <CCardText>
                                <h5>
                                    This is not a deployed app. Please click the button below to be taken to the GitHub Repo that holds links to walkthrough videos of how this app works!
                                </h5>
                            </CCardText>

                            <div className="GHBtn">
                                <CButton target="_blank" href="https://github.com/watkincw/Social-Network-API">GitHub Repo</CButton>
                            </div>
                        </CAccordionBody>
                    </div>
                </CAccordionItem>                
                <CAccordionItem itemKey={3} className="what-I-do">
                    <CAccordionHeader>
                        <CCardTitle>Team Profile Generator</CCardTitle>
                    </CAccordionHeader>
                    <div className="whatIveDone">
                        <CAccordionBody>
                            <div className="center-img">
                                <CImage 
                                    src={ require(`../../assets/projectImages/TeamProfileGenerator.jpg`).default }
                                    alt="Team Profile Generator"
                                    className="img-thumbnail mx-1"
                                    key="Team Profile Generator"
                                />
                            </div>
                            <CCardText>
                                <h5 className="flex-row">
                                    Scaling your business? Need to keep track of employees better? Simple use this Team Profile Generator! Add each of the employees on your team one by one to have them all in a database with their job roles and other important inforamtion.
                                </h5>
                            </CCardText>

                            <div className="GHBtn">
                                <CButton target="_blank" href="https://github.com/watkincw/team-profile-generator">GitHub Repo</CButton>
                            </div>
                        </CAccordionBody>
                    </div>
                </CAccordionItem>                
                <CAccordionItem itemKey={4} className="what-I-do">
                    <CAccordionHeader>
                        <CCardTitle>Budget Tracker (PWA w/ Offline Functionality)</CCardTitle>
                    </CAccordionHeader>
                    <div className="whatIveDone">
                        <CAccordionBody>
                            <div className="center-img">
                                <CImage 
                                    src={ require(`../../assets/projectImages/BudgetTracker.jpg`).default }
                                    alt="Budget Tracker"
                                    className="img-thumbnail mx-1"
                                    key="Budget Tracker"
                                />
                            </div>

                            <CCardText>
                                <h5 className="flex-row">
                                    Track your spending habbits from ANYWHERE! (No internet connection needed!)
                                </h5>
                            </CCardText>

                            <div className="GHBtn">
                                <CButton target="_blank" href="https://github.com/watkincw/Budget-Tracker">GitHub Repo</CButton>
                            </div>
                            <div className="GHBtn">
                                <CButton target="_blank" href="https://tranquil-wildwood-44812.herokuapp.com/">Deployed App</CButton>
                            </div>
                        </CAccordionBody>
                    </div>
                </CAccordionItem>                
                <CAccordionItem itemKey={5} className="what-I-do">
                    <CAccordionHeader>
                        <CCardTitle>Regex Tutorial(GitHub Gist)</CCardTitle>
                    </CAccordionHeader>
                    <div className="whatIveDone">
                        <CAccordionBody>
                            <div className="center-img">
                                <CImage 
                                    src={ require(`../../assets/projectImages/RegexTutorial.jpg`).default }
                                    alt="Regex Tutorial"
                                    className="img-thumbnail mx-1"
                                    key="Regex Tutorial"
                                />
                            </div>
                            <CCardText>
                                <h5 className="flex-row">
                                    Need to learn about Regex for your next project? Or even just a quick refresher?
                                </h5>
                            </CCardText>

                            <div className="GHBtn">
                                <CButton target="_blank" href="https://gist.github.com/watkincw/8f68b06ab3079795b9868e395b0d76de">Click Here!</CButton>
                            </div>
                        </CAccordionBody>
                    </div>
                </CAccordionItem>                
                <CAccordionItem itemKey={6} className="what-I-do">
                    <CAccordionHeader>
                        <CCardTitle>Interactive Full-Stack Project(Book Tracker)</CCardTitle>
                    </CAccordionHeader>
                    <div className="whatIveDone">
                        <CAccordionBody>
                            <div className="center-img">
                                <CImage 
                                    src={ require(`../../assets/projectImages/BookTracker.jpg`).default }
                                    alt="Interactive Full-Stack Project"
                                    className="img-thumbnail mx-1"
                                    key="Interactive Full-Stack Project"
                                />
                            </div>
                            <CCardText>
                                <h5 className="flex-row">
                                    Keep better track of the books you've read! Look back later to remember how you felt after reading it.
                                </h5>
                            </CCardText>

                            <div className="GHBtn">
                                <CButton target="_blank" href="https://github.com/watkincw/book-tracker">GitHub Repo</CButton>
                            </div>
                            <div className="GHBtn">
                                <CButton target="_blank" href="https://dry-wildwood-65158.herokuapp.com/">Deployed App</CButton>
                            </div>

                        </CAccordionBody>
                    </div>
                </CAccordionItem>
            </div>
        </CAccordion>
    );
}

export default Projects;