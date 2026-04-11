import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwln6BriV9nmTRnrbaMD_2ikA4gOm0JoApVVIcnLwJDxxg6CwVFmW-5df2E8k0Ec3RvBQ/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      alert("Inquiry sent successfully!");
      setFormData({ name: "", phone: "", requirement: "" }); // reset form
    } catch (error) {
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <section className="contact-section">
      
      <div className="contact-banner">
        <h2>Planning an event? Get customized bottles delivered to your doorstep.</h2>
       <a 
  href="https://wa.me/916202352446?text=I'm%20interested%20for%20buying%20bottle" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="whatsapp-btn">WhatsApp Us Now</button>
</a>

      </div>

      {/* ✅ Main Content */}
      <div className="contact-grid">
        {/* Left side: Info */}
        <div className="contact-info">
          <h3>Start Your Legacy</h3>
          <p><strong>Address:</strong><br/>Chhota Sasaram, PO - Gajrajgang, PS-Udwant Nagar, District - Bhojpur, Bihar, Pin- 802157</p>
          <p><strong>Direct Line:</strong><br/>+91 6202352446</p>
          <p><strong>General Inquiries:</strong><br/>aquafineminerals2026@gmail.com</p>

          {/* ✅ Map image clickable */}
          <a 
            href="https://maps.app.goo.gl/XQXei7MXsd6Ud7vWA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="map-link"
          >
            <img src="src/assets/map.png" alt="Map Location" className="map-img" />
          </a>
        </div>

        {/* Right side: Form inside rounded box */}
        <div className="contact-form-box">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Full Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Prince" 
              required 
            />

            <label>Phone Number:</label>
            <input 
              type="text" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="+91 00000 00000" 
              required 
            />

            <label>Your Requirement:</label>
            <textarea 
              name="requirement" 
              value={formData.requirement} 
              onChange={handleChange} 
              placeholder="Tell us about your event and volume requirements..." 
              required
            ></textarea>

            <button type="submit" className="send-btn">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
