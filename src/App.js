import React from "react";
import CoverPage from "./components/cover_page/coverPage.jsx";
import Header from "./components/header/header.jsx";
import AboutMe from "./components/about_page/about_me.jsx";
import Resume from "./components/resume/resume.jsx";
import ContactUs from "./components/contact_us_page/contact_us.js";
import Skills from "./components/skills/skills";
import Apis from "./components/api/apis.jsx";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    // Update the formData state when the form is submitted
    setFormData(data);
  };

  return (
    <>
      <CoverPage />
      <AboutMe />
      <Header />
      <Resume />
      <Skills />
      <ContactUs onFormSubmit={handleFormSubmit} />
      <Apis formData={formData} />
    </>
  );
}

export default App;
