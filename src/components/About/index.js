import React from "react";
import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText
} from '@coreui/react';
import coverImage from '../../assets/images/me.jpg';

function AboutMe() {
    return (
        <CCard>
            <div className="what-I-do">
                <CCardTitle>
                    <div className="section-title secondary-border">
                        About Me
                    </div>
                </CCardTitle>
                <CCardImage orientation="top" src={ coverImage } />
                <CCardBody>
                    <CCardText>
                        <p className="flex-row">
                            Full stack web developer educated at UW-Extension BootCamp. Skills in REACT, JavaScript, SQL, and more. Strengths in meeting deadlines, 
                            creativity, and teamwork. Passionate about approaching programming challenges from different angles and collaborating with others to create 
                            meaningful web applications. Excited to develop responsive websites. Positioned to provide unique perspectives on how end users interact with websites and 
                            software platforms with a unique perspective.
                        </p>
                    </CCardText>
                </CCardBody>
            </div>
        </CCard>
    );
}

export default AboutMe;