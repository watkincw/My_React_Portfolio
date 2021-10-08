import React from "react";
import Header from '../Header';
import { capitalizeFirstLetter } from '../../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    // useEffect(() => {
    //     console.log(currentCategory);
    //     console.log(categories); // Loot at the object in the console that these are displaying
    //     console.log(categories[0]); // What is currentCategory.name?
    //     // document.title = capitalizeFirstLetter(currentCategory.name);
    // }, [currentCategory]);

    return (
        <div>
            <Header></Header>
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
                            <span onClick={ () => { 
                                    setCurrentCategory(category.name);
                                    setContactSelected(false);
                                } }
                            > 
                                { capitalizeFirstLetter(category.name) }
                            </span>
                        </li>
                    )) }
                </ul>
            </nav>
        </div>
    );
}

export default Nav;