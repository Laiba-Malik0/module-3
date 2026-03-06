import "../index.css";

export default function Contact() {
  return (
    <div className="contact-page">

      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">

          <h3>Get in Touch</h3>

          <p>
            <i className="fa-solid fa-location-dot"></i> Islamabad, Pakistan
          </p>

          <p>
            <i className="fa-solid fa-phone"></i> +92 300 0000000
          </p>

          <p>
            <i className="fa-solid fa-envelope"></i> support@mystore.com
          </p>

          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=islamabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* Contact Form */}
        <form className="contact-form">

          <h3>Send Message</h3>

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Email Address" required />

          <textarea placeholder="Write your message..." rows="4"></textarea>

          <button className="btn">Send Message</button>

        </form>

      </div>

    </div>
  );
}