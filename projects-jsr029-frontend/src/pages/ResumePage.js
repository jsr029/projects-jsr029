import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ResumePage.css';
import { Navbar } from 'react-bootstrap';

const ResumePage = () => {
    return (
        <>
            <Navbar />
            <div>
                <div className="resume-container">
                    <header className="resume-header">
                        <h1>John Doe</h1>
                        <p>Software Engineer</p>
                        <p>Email: john.doe@example.com | Phone: (123) 456-7890</p>
                    </header>

                    <section className="resume-section">
                        <h2>Experience</h2>
                        <div className="resume-item">
                            <h3>Senior Software Engineer</h3>
                            <p>ABC Company | Jan 2020 - Present</p>
                            <ul>
                                <li>Developed and maintained web applications using React and Node.js</li>
                                <li>Collaborated with cross-functional teams to define project requirements</li>
                                <li>Implemented new features and optimized existing ones for performance</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h3>Software Engineer</h3>
                            <p>XYZ Company | Jun 2016 - Dec 2019</p>
                            <ul>
                                <li>Worked on backend development using Python and Django</li>
                                <li>Designed and implemented RESTful APIs for various services</li>
                                <li>Participated in code reviews and mentored junior developers</li>
                            </ul>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Education</h2>
                        <div className="resume-item">
                            <h3>Master of Science in Computer Science</h3>
                            <p>University of Technology | 2014 - 2016</p>
                        </div>
                        <div className="resume-item">
                            <h3>Bachelor of Science in Computer Science</h3>
                            <p>University of Technology | 2010 - 2014</p>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Skills</h2>
                        <ul className="skills-list">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>Django</li>
                            <li>SQL</li>
                        </ul>
                    </section>

                    <section className="resume-section">
                        <h2>Contact</h2>
                        <p>Email: john.doe@example.com</p>
                        <p>LinkedIn: linkedin.com/in/johndoe</p>
                        <p>GitHub: github.com/johndoe</p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ResumePage;

