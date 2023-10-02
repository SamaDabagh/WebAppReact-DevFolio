import React from "react";
import Messages from "../messages/messages";
import Weather from "../weather/weather";
import Movies from "../movies_api/movies_api";
import Word_API from "../word-api/word-api";
const Apis = ({ formData }) => {
  return (
    <div>
      <section className="section-features  mi-section mi-padding-top mi-padding-bottom">
        <div className="row">
          <div className="col-1-of-2">
            <Messages formData={formData} />
          </div>

          <div className="col-1-of-2">
            <Weather />
            <Movies />
            {/* <Word_API /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apis;
