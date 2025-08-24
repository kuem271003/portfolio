import React, { useState } from 'react'
import { toast } from 'react-toastify';
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg";

const Contact = () => {
    const [showMailView, setShowMailView] = useState(false);
    const [mailData, setMailData] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "08ab66ab-1c2b-47b2-8f66-bdcfcde54d28");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());
        
            if (res.success) {
                // Save email data for display
                setMailData({
                    name: object.name,
                    email: object.email,
                    message: object.message,
                    timestamp: new Date().toLocaleString()
                });
                setShowMailView(true);
                
                toast.success("Message sent successfully! I'll get back to you soon.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                event.target.reset(); // Reset form
            } else {
                toast.error("Failed to send message. Please try again.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error("An error occurred. Please try again later.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const closeMailView = () => {
        setShowMailView(false);
        setMailData(null);
    };

    return (
        <div className='contact' id="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out to me through any of the platforms below.</p>
                    <div className="contact-details">
                        <div className="contact-detail"><i className="fa-solid fa-envelope"></i> : kuem27100@gmail.com</div>
                        <div className="contact-detail"><i className="fa-solid fa-phone"></i> : +84 982 078 899</div>
                        <div className="contact-detail"><i className="fa-solid fa-location-dot"></i> : Da Nang City, Vietnam</div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" required />
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message" rows={5} placeholder="Enter your message" required></textarea>
                    <button type="submit" className="contact-submit">Send Message</button>
                </form>
            </div>

            {/* Mail View Modal */}
            {showMailView && mailData && (
                <div className="mail-view-overlay" onClick={closeMailView}>
                    <div className="mail-view-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="mail-view-header">
                            <h2>📧 Email Sent Successfully!</h2>
                            <button className="mail-view-close" onClick={closeMailView}>×</button>
                        </div>
                        <div className="mail-view-content">
                            <div className="mail-info">
                                <div className="mail-field">
                                    <strong>From:</strong> {mailData.name} ({mailData.email})
                                </div>
                                <div className="mail-field">
                                    <strong>To:</strong> kuem27100@gmail.com
                                </div>
                                <div className="mail-field">
                                    <strong>Date:</strong> {mailData.timestamp}
                                </div>
                                <div className="mail-field">
                                    <strong>Subject:</strong> New Contact Message from Portfolio
                                </div>
                            </div>
                            <div className="mail-message">
                                <strong>Message:</strong>
                                <div className="message-content">
                                    {mailData.message}
                                </div>
                            </div>
                            <div className="mail-status">
                                <div className="status-success">
                                    ✅ Message delivered successfully
                                </div>
                                <p>I'll get back to you as soon as possible!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Contact

