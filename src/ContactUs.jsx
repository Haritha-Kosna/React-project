import React, { useRef, useState } from 'react';
import './contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function ContactUs() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_p3hvfbf',
      'template_8tkbszx',
      form.current,
      '2rTQ8uQLxGTl_XEnF'
    ).then(() => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send the message. Try again later.');
      console.error(error);
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="title-green">Get in Touch</h2>
        <p><FaEnvelope className="icon-red" /> <strong>Email:</strong> kosnahari@gmail.com</p>
        <p><FaPhone className="icon-green" /> <strong>Phone:</strong> 9390091074</p>
        <p><FaMapMarkerAlt className="icon-red" /> <strong>Address:</strong> Hyderabad, Telangana-500087</p>

        <h3 className="follow-title">Follow Us</h3>
        <div className="social-icons">
          <FaFacebook className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
        </div>

        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.bing.com/maps?&mepi=35~Local~MiddleOfPage~LargeMapLink&ty=17&q=ecil%20locations&segment=Local&mb=17.470629~78.571899~17.467493~78.574226&ppois=17.467493057250977_78.57422637939453_1_YN4070x8264192098497338827~17.47062873840332_78.5718994140625_2_YN4070x522138610~&usebfpr=true&v=2&sV=1&FORM=MPSRPL"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="contact-right">
        <h2>Send Us a Message</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Enter your name" required />
          <input type="email" name="from_email" placeholder="Enter your email" required />
          <textarea name="message" rows="5" placeholder="Your message" required></textarea>
          <input type="hidden" name="date_time" value={new Date().toLocaleString()} />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
