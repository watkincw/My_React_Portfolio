import React from "react";
import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton
} from '@coreui/react';
import coverImage from '../../assets/images/me.jpg';

function AboutMe() {
    return (
        <CCard style={{ width: '18rem' }}>
            <CCardImage orientation="top" src={ coverImage } />
            <CCardBody>
                <CCardTitle>About Me</CCardTitle>
                <CCardText>
                    Full stack web developer educated at UW-Extension BootCamp. Skills in REACT, JavaScript, SQL, and more. Strengths in meeting deadlines, 
                    creativity, and teamwork. Passionate about approaching programming challenges from different angles and collaborating with others to create 
                    meaningful web applications. Excited to develop responsive websites. Positioned to provide unique perspectives on how end users interact with websites and 
                    software platforms with a unique perspective.
                </CCardText>
                <CButton href="/">To About Me</CButton>
            </CCardBody>
        </CCard>
        // <section>
        //     <h1 id="aboutMe">About Me</h1>
        //     <img
        //         src={ coverImage }
        //         className="my-2"
        //         style={ { width: "100%" } }
        //         alt="Colton Watkins"
        //     />
        //     <div className="my-2">
        //         <p>
        //          Full stack web developer educated at UW-Extension BootCamp. Skills in REACT, JavaScript, SQL, and more. Strengths in meeting deadlines, 
        //          creativity, and teamwork. Passionate about approaching programming challenges from different angles and collaborating with others to create 
        //          meaningful web applications. Excited to develop responsive websites. Positioned to provide unique perspectives on how end users interact with websites and 
        //          software platforms with a unique perspective.
        //         </p>
        //     </div>
        // </section>
    );
}

export default AboutMe;