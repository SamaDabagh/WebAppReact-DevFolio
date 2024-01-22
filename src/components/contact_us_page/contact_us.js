import React, { useState } from "react";

const ContactUs = ({ onFormSubmit }) => {
  //_____States____//
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  ///////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      onFormSubmit(formData);
      console.log(formData);
      const response = await fetch(
        "https://web-server-test-mz1w.onrender.com/save-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Convert the formData object to JSON
        }
      );

      if (response.ok) {
        // Handle a successful response (e.g., show a success message)
        console.log("Form data submitted successfully.");
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Error submitting form data.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  /////////////////////
  return (
    <div>
      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <div className="row">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-septenary  u-margin-bottom-small">
                      Contact us
                    </h2>
                  </div>

                  <div className="col-1-of-2">
                    <div className="form__group">
                      <label htmlFor="fullName" className="form__label">
                        Full name
                      </label>
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Full name"
                        id="name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form__group">
                      <label htmlFor="email" className="form__label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form__input"
                        placeholder="Email address"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="phoneNumber" className="form__label">
                        phone number
                      </label>
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Phone number"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form__group">
                      <button
                        type="submit"
                        className="btn btn--white"
                        onClick={handleSubmit}
                      >
                        Submit your massage
                      </button>
                    </div>
                  </div>
                  <div className="form__group col-1-of-2">
                    <label htmlFor="message" className="form__label">
                      Please leave your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="60"
                      rows="7"
                      className=" form__input"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer_content text-center">
            <ul className="footer_social">
              <li className="service_icon2">
                <a href="mailto:s.dabbaghchi@gmail.com" target="blank">
                  <i className="lni lni-envelope"></i>
                </a>
              </li>
              <li className="service_icon2">
                <a href="https://github.com/SamaDabagh">
                  <i className="lni lni-github" target="blank"></i>
                </a>
              </li>
              <li className="service_icon2">
                <a
                  href="https://www.linkedin.com/in/sama-dabagh/"
                  target="blank"
                >
                  <i className="lni lni-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
