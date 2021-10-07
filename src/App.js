import React, { useState } from 'react';
import './App.css';
// import Nav from './components/Nav';
import Header from './components/Header';
import AboutMe from './components/About';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

function App() {

	const [categories] = useState([
        { name: 'about me', description: 'A little about me!' },
        { name: 'portfolio', description: 'Some of my work' },
        { name: 'contact', description: 'Contact me!' },
        { name: 'resume', description: 'My Resume' }
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    const [contactSelected, setContactSelected] = useState(false);


	return (
		<div className="App">
			<Header
				categories={ categories }
				setCurrentCategory={ setCurrentCategory }
				currentCategory={ currentCategory }
				contactSelected={ contactSelected }
				setContactSelected={ setContactSelected }
			></Header>
			<main>
                <div>
                    { !contactSelected ? (
                        <>
                            <AboutMe currentCategory={ currentCategory }></AboutMe>
                        </>
                    ) : (
                        <ContactForm></ContactForm>
                    ) }
                </div>
            </main>
			<Footer />
        </div>
	);
}

export default App;
