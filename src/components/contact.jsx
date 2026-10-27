import "../css/contact.css";
import location from "../images/location.svg";
import redmail from "../images/redmail.svg";

function Contact() {
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

      <form>
        <div className="formvalid">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />

          <label htmlFor="subject">Subject</label>
          <select id="subject" name="subject">
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
          ></textarea>

          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
