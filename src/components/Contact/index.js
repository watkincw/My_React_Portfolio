import React, { useState } from "react";
import {
    CForm,
    CFormLabel,
    CFormInput,
    CFormTextarea,
    CButton
} from '@coreui/react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    function handleChange(e) {
        if( e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (isValid) {
                setErrorMessage('That is not a valid email address.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <CForm id="contact-form" onSubmit={ handleSubmit }>
            <h1>Contact Me</h1>
            <div className="mb-3">
                <CFormLabel htmlFor="name">Name: </CFormLabel>
                <CFormInput type="text" name="name" defaultValue={ name } onBlur={ handleChange } />
            </div>
            <div className="mb-3">
                <CFormLabel htmlFor="email">Email Address: </CFormLabel>
                <CFormInput type="email" name="email" defaultValue={ email } onBlur={ handleChange } />
            </div>
            <div className="mb-3">
                <CFormLabel htmlFor="message">Message: </CFormLabel>
                <CFormTextarea name="message" rows="5" defaultValue={ message } onBlur={ handleChange } />
            </div>
            { errorMessage && (
                    <div>
                        <p className=" error-text">{ errorMessage }</p>
                    </div>
            ) }
            <CButton color="success">Submit</CButton>
        </CForm>
            // <form id="contact-form" onSubmit={ handleSubmit }>
            //     <div>
            //         <label htmlFor="name">Name: </label>
            //         <input type="text" name="name" defaultValue={ name } onBlur={ handleChange } />
            //     </div>
            //     <div>
            //         <label htmlFor="email">Email Address: </label>
            //         <input type="email" name="email" defaultValue={ email } onBlur={ handleChange } />
            //     </div>
            //     <div>
            //         <label htmlFor="message">Message: </label>
            //         <textarea name="message" rows="5" defaultValue={ message } onBlur={ handleChange } />
            //     </div>
            //     { errorMessage && (
            //         <div>
            //             <p className=" error-text">{ errorMessage }</p>
            //         </div>
            //     ) }
            //     <button type="submit">submit</button>
            // </form>
    );
}

export default ContactForm;