import React, { Component } from "react";
import "../../css/styles.css";
class CoverPage extends Component {
  render() {
    return (
      <div>
        <div className="cover-page">
          <div className="text-box">
            <h1 className="heading-primary">
              <span id="lower" className="heading-primary--sub">
                I am
              </span>
              <span className="heading-primary--main">Samaneh Dabbaghchi</span>

              <div
                className="my-element heading-primary--sub"
                data-typed-items="Developer, Freelancer, Architect"
              ></div>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
export default CoverPage;
