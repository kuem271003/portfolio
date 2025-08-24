import React from "react";
import "./About.css";
import profile_img from "../../assets/images/cam.jpg";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" style={{ width: "400px", height: "500px", objectFit: "cover", }} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I'm Phương Nguyễn, a Full Stack Developer based in Vietnam.
              I have a passion for creating dynamic and responsive web
              applications. With a strong foundation in both front-end and
              back-end technologies, I strive to deliver seamless user
              experiences and robust functionality.
            </p>
            <p>
              My journey in web development began with a curiosity for how
              things work behind the scenes. Over the years, I've honed my
              skills in various programming languages and frameworks, allowing
              me to tackle complex challenges and bring innovative ideas to
              life.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Vue JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>

        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
