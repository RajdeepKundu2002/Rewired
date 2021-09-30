import React from 'react'
import './ContactUs.css'
export default function ContactUs() {
    return (
        <>
            <div id="contact" className="section-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="contact-heading">Contact Us</h2>
                        <p>
                            For any query, reach out to us:
                        </p>
                    </div>
                    <div className="row contact-info">
                        <div className="col-md-4">
                            <div className="contact-address">
                                <h3>Address</h3>
                                <address>188, Raja S.C. Mallick Rd, Kolkata - 700032, India</address>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-phone">
                                <h3>Phone Number</h3>
                                <p><a href="tel:+917908329480">+91 98361 05125</a></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-email">
                                <h3>Email</h3>
                                <p><a href="mailto:info@example.com">jaduniv.ieee@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}