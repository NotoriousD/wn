import React, { useState, useCallback } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState();

  const handleChange = useCallback(
    (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
    [setForm, form]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://winningpartner.com:26134/api/v2/messages`, {
        ...form,
      })
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setSuccess(false);
      });
  };

  return (
    <div id="contact" className="content home-contact">
      <div className="innerWrap">
        <h2 className="block__title">Get in touch</h2>
        {success && (
          <p
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            Your message has been sent, we’ll get back to you within 24 hours
          </p>
        )}
        <span className="contact__time">Have a question?</span>
        <p className="contact__text">
          You can reach our dedicated affiliate team via our live chat system or
          through the contact form below. Alternatively, please email
          affiliates@winningpartner.com
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form__field">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              id="company"
              required
            ></input>
          </div>
          <div className="form__field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              name="name"
              required
            ></input>
          </div>
          <div className="form__field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              id="email"
              required
            ></input>
          </div>
          <div className="form__field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              onChange={handleChange}
              value={form.message}
              id="message"
            ></textarea>
          </div>
          <div className="form__btn">
            <input type="submit" value="Send message"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
