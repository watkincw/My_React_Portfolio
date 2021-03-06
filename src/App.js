import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import { HashRouter, HashRouter as Switch, Route } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import Nav from "./components/common/Nav";
import AboutMe from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from './components/Resume';
import Footer from "./components/common/Footer";
// Styles
import "./App.css";
import '@coreui/coreui/dist/css/coreui.min.css';


function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Nav />
            <main className="body">
                <div>
                    <Switch>
                        <Route
                            exact path="/My_React_Portfolio"
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
                        <Route
                            // no "EXACT path" because this will link you to the home page when the user tries to direct to a URL that doesnt exist
                            path="*"
                            component={ AboutMe }
                        ></Route>
                    </Switch>
                </div>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
