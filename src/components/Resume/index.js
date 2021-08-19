import React from 'react';
import resumeFile from '../../assets/files/Resume-Amber-Pratt.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';


function Resume() {
    return (
        <section className="project">
            <a href={resumeFile} className="resume-link" download>Download My Resume</a>
        </section>
    );
}

export default Resume;