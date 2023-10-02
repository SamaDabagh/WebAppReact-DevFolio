import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div>
        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                {/* <i className="feature-box__icon icon-basic-world"></i> */}
                <div className="service_icon">
                  <i className="lni lni-code"></i>
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  FULLSTACK WEB Development{" "}
                </h3>
                <p className="feature-box__text">
                  React JS, JavaScript, Html & CSS (Bootstrap, Tailwind, Sass),
                  Node.js, Express.js, Redux, MongoDB
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                {/* <i className="feature-box__icon icon-basic-compass"></i> */}
                <div className="service_icon">
                  <i className="lni lni-ux"></i>
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  UI/UX Design
                </h3>
                <p className="feature-box__text">
                  CSS (Bootstrap, Tailwind, Sass),
                  <br /> Figma, Adobe XD, Photo Shop
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                {/* <i className="feature-box__icon icon-basic-heart"></i> */}
                <div className="service_icon">
                  <i className="lni lni-mobile"></i>
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  APPLICATION DEVELOPMENT
                </h3>
                <p className="feature-box__text">
                  (Mobile/Desktop)
                  <br />
                  JAVA, GlassFish,
                  <br /> C#, Flutter
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                {/* <i className="feature-box__icon icon-basic-heart"></i> */}
                <div className="service_icon">
                  <i className="lni lni-apartment"></i>
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  ARCHITECTURE
                </h3>
                <p className="feature-box__text">
                  AutoCAD, 3ds Max, SketchUp, Autodesk Revit, Autodesk Ecotec,
                  Adobe Photoshop
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Skills;
