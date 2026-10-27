import "../css/contact.css";
import location from "../images/location.svg";
import redmail from "../images/redmail.svg";

import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "42b62b90-9806-4a9d-8378-69917573da7e");

    const selectedSubject = event.target.project_type.value;
    formData.append("subject", selectedSubject);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className="contwraper" id="contact">
      <div className="context">
        <h6>Get in touch</h6>

        <h1>
          <span>Let's Work </span>Together
        </h1>

        <p>
          Have a project in mind? A question? Or just want to say hi? <br />
          Feel free to reach out. I'd love to hear from you!
        </p>

        <div className="consocials">
          <div className="cons1">
            <img src={redmail} alt="" />

            <div className="cons1headers">
              <h4>Email</h4>
              <p>adamabdullahi0216@gmail.com</p>
            </div>
          </div>

          <div className="cons1">
            <img src={location} alt="" />

            <div className="cons1headers">
              <h4>Location</h4>
              <p>Nigeria</p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="formvalid">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />

          <label htmlFor="subject">Subject</label>
          <select id="subject" name="project_type" required>
            <option value="">Select a subject</option>
            <option value="website">Website Development</option>
            <option value="react">React Development</option>
            <option value="frontend">Frontend Development</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project...."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
