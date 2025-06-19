import React, { useRef } from 'react';
import './contactus.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const dateTimeInput = document.createElement('input');
    dateTimeInput.type = 'hidden';
    dateTimeInput.name = 'date_time';
    dateTimeInput.value = new Date().toLocaleString();
    form.current.appendChild(dateTimeInput);

    emailjs.sendForm(
      'service_p3hvfbf',
      'template_8tkbszx',
      form.current,
      '2rTQ8uQLxGTl_XEnF'
    )
      .then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        alert('Failed to send the message. Try again later.');
        console.error(error);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="title-green">Get in Touch</h2>
        <p><FaEnvelope className="icon-red" /> <strong>Email:</strong> 	avulauma85@gmail.com</p>
        <p><FaPhone className="icon-green" /> <strong>Phone:</strong> 7670849258</p>
        <p><FaMapMarkerAlt className="icon-red" /> <strong>Address:</strong> Visakhapatnam, Andhra Pradesh-530022</p>

        <h3 className="follow-title">Follow Us</h3>
        <div className="social-icons">
          <FaFacebook className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
        </div>

        {/* Google Map Embed */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30883.767472837862!2d78.11149944821122!3d14.629188345053608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3f0b38e8cbd7f%3A0xa7c0761b0489649b!2sSimhadri%20Puram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1750225082963!5m2!1sen!2sin"
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
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
