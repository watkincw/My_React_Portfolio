import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/common/Nav";
import AboutMe from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from './components/Resume';
import Footer from "./components/common/Footer";

function App() {

    return (
        <div className="App">
            <Router>
                <Nav></Nav>
                <main>
                    <div>
                        <Switch>
                            <Route
                                exact path="/"
                                component={ AboutMe }
                            ></Route>
                            <Route
                                exact path="/portfolio"
                                component={ Portfolio }
                            ></Route>
                            <Route
                                exact path="/contact"
                                component={ ContactForm }
                            ></Route>
                            <Route
                                exact path="/resume"
                                component={ Resume }
                            ></Route>
                            {/* <Route
                                // no "EXACT path" because this will link you to the home page when the user tries to direct to a URL that doesnt exist
                                path="/"
                                component={ AboutMe }
                            ></Route> */}
                        </Switch>
                    </div>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;

// {/* { !contactSelected ? (
//     <>
//         <AboutMe currentCategory={ currentCategory }></AboutMe>
//     </>
// ) : (
//     <ContactForm></ContactForm>
// ) } */}
