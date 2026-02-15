import './Contact.css';

function Contact() {
    return (
        <div className="contact-page">

            <div className="container">

                {/* ===== BANNER ===== */}
                <div className="banner">

                    <h2
                        style={{ fontFamily: 'kalnia', fontWeight: 600 }}
                        className="contact-heading"
                    >
                        Contacts
                    </h2>

                    <ul
                        style={{ fontFamily: 'kalnia', fontWeight: 600 }}
                        className="breadcrumb-list"
                    >
                        <li>
                            <a href="/">Home</a> / Contacts
                        </li>
                    </ul>

                </div>


                {/* ===== MAP SECTION ===== */}
                <div className="map-wrapper">
                    <iframe
                        src="https://maps.google.com/maps?q=Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        loading="lazy"
                        title="Ahmedabad Map"
                    ></iframe>
                </div>


                {/* ===== CONTACT SECTION ===== */}
                <div className="contact-section">

                    {/* LEFT SIDE */}
                    <div className="contact-left">
                        <h3 style={{ fontFamily: 'kalnia', fontWeight: 600 }}>
                            Get in touch
                        </h3>

                        <p>
                            Rains HQ, Jens Olsens Vej 13, 8200 Aarhus N,
                            <br /> Denmark
                        </p>

                        <p>(02) 6188 8062</p>
                        <p>demo@gmail.com</p>

                        <h5
                            style={{ fontFamily: 'kalnia', fontWeight: 600 }}
                            className="open-hours"
                        >
                            Open Hours
                        </h5>

                        <p>Contact Our Customer Happiness Team</p>
                        <p>Monday-Friday 9am-5pm</p>

                        <h5 style={{ fontFamily: 'kalnia', fontWeight: 600 }}>
                            Follow Us:
                        </h5>

                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-x-twitter"></i></a>
                        </div>

                    </div>


                    {/* RIGHT SIDE FORM */}
                    <div className="contact-right">
                        <form>

                            <div className="input-row">
                                <input type="text" placeholder="Your name" required />
                                <input type="email" placeholder="Your email" required />
                            </div>

                            <input type="text" placeholder="Phone number" />

                            <textarea
                                rows="5"
                                placeholder="Your message..."
                                required
                            ></textarea>

                            <button type="submit">
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Contact;
