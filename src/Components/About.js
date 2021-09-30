import React from 'react';
import './About.css'
import Logo from './images/cropped-logo.png'
function About() {
    return (
        <div>
            <section className="section">
                <div className="container event">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="about-heading">About
                                <font color="red"> Rewired 2.0</font>
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about py-4">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="content">
                                <h3>About Us</h3>
                                <p>
                                    As one of the oldest universities of the country, Jadavpur University, and its students have a certain duty - the duty to give back to society across all disciplines and inculcate the habit of thinking in every individual who comes along. The IEEE Jadavpur University Student Branch is one little endeavor in that process. Founded in 2010, we belong to the Kolkata section of Region 10 of the organization. One of the most active student branches in our section, we are dedicated to furthering technical and entrepreneurial innovations through hands-on interactive sessions. With large scale events and intimate, basic workshops, we try to keep something happening all year round - so that the fire of knowledge, learning and innovation never burns out. In this process of sharing our love for technology, we have slowly grown, met new people, evolved as a group and built around us, a community of like-minded individuals who are driven by a passion for learning and giving back to society..
                                </p>
                                <a href="https://www.ieee.org/" className="btn btn-outline-danger">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <img src={Logo} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
export default About;