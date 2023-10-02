import React, { useEffect } from "react";
import myImg from "../../img/about_img.jpg";
import "../../css/styles.css";
import Resume from "../../assets/SAMANEH_DABBAGHCHI_Resume_16-09-2023.pdf";
const AboutMe = () => {
  useEffect(() => {
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    const progressLines = document.querySelectorAll(".progress_line");
    progressLines.forEach(function (el) {
      if (isElementInViewport(el)) {
        const percent = el.getAttribute("data-width");
        el.style.width = percent + "%";
      }
    });
  }, []);

  return (
    <div>
      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-8">
            <h2 className="heading-secondary">
              About me : <br></br>
              <span className="heading-secondary-sub">
                My Journey and Relevant Skills
              </span>
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <div className="about-info-box">
                <div className="composition u-margin-bottom-small ">
                  <img
                    alt="Photo_1"
                    className="about-img composition__photo"
                    src={myImg}
                  />
                </div>
                <div className="about-info">
                  <p className="u-margin-bottom-small">
                    <span className="heading-tertiary ">Name: </span>
                    <span className="paragraph"> Samaneh Dabbaghchi</span>
                  </p>
                  <p className="u-margin-bottom-small">
                    <span className="heading-tertiary ">Profile: </span>
                    <span className="paragraph"> full stack developer</span>
                  </p>
                  <p className="u-margin-bottom-small">
                    <span className="heading-tertiary">Email: </span>
                    <span className="paragraph"> s.dabbaghchi@gmail.com</span>
                  </p>
                  <p className="u-margin-bottom-small">
                    <span className="heading-tertiary ">Phone: </span>
                    <span className="paragraph">(514) 916-4038</span>
                  </p>
                </div>
              </div>
              <div className="about_skills pt-15">
                <div className="skill_item mt-20">
                  <div className="skill_header">
                    <h6 className="skill_title">UI/UX Design</h6>
                    <div className="skill_percentage">
                      <p>
                        <span className="counter">85</span>%
                      </p>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="bar_inner">
                      <div className="bar progress_line" data-width="85"></div>
                    </div>
                  </div>
                </div>
                <div className="skill_item mt-20">
                  <div className="skill_header">
                    <h6 className="skill_title">Web Design</h6>
                    <div className="skill_percentage">
                      <p>
                        <span className="counter">75</span>%
                      </p>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="bar_inner">
                      <div className="bar progress_line" data-width="75"></div>
                    </div>
                  </div>
                </div>
                <div className="skill_item mt-20">
                  <div className="skill_header">
                    <h6 className="skill_title">HTML/CSS</h6>
                    <div className="skill_percentage">
                      <p>
                        <span className="counter">90</span>%
                      </p>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="bar_inner">
                      <div className="bar progress_line" data-width="90"></div>
                    </div>
                  </div>
                </div>
                <div className="skill_item mt-20">
                  <div className="skill_header">
                    <h6 className="skill_title">Sketch</h6>
                    <div className="skill_percentage">
                      <p>
                        <span className="counter">65</span>%
                      </p>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="bar_inner">
                      <div className="bar progress_line" data-width="65"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                From Architecture to Junior Development
              </h3>
              <p className="paragraph">
                As a junior developer, I am driven to find practical and
                innovative solutions to programming challenges. Though my time
                in the field has been brief, I have acquired valuable technical
                skills in JavaScript, Python, and React that allow me to
                approach problems from multiple angles.
              </p>
              <p className="paragraph">
                Before transitioning to this new role, I spent over two decades
                working as an architect. This experience instilled in me a
                strong foundation in critical thinking, problem-solving, and
                attention to detail. Though my journey as a developer is in its
                early stages, I am excited to contribute a unique skill set and
                perspective to the team. Moving forward, I am eager to continue
                expanding my knowledge and developing impactful software
                solutions.
              </p>
              <a href={Resume} className="btn-text" target="blank">
                Learn more &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutMe;
