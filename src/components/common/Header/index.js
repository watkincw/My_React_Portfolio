import React, { useEffect } from "react";
import {capitalizeFirstLetter } from '../../../utils/helpers';

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header classname="flex-row px-1">
            <h2>
                <a href="/">Colton Watkins</a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={ () => setContactSelected(false) }>About Me</a>
                    </li>
                    <li className={ `mx-2 ${contactSelected && 'nacActive'} `}>
                        <span onClick={() => setContactSelected(true) }>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={ `mx-1 ${
                                currentCategory.name === category.name && !contactSelected && 'navActive'
                                }`}
                            key={ category.name }
                        >
                            <span 
                                onClick={ () => {
                                    setCurrentCategory(category);
                                    setContactSelected(false);
                                } }
                            >
                                { capitalizeFirstLetter(category.name) }
                            </span>
                        </li>
                    )) }
                </ul>
            </nav>
        </header>
    );
}

export default Header;