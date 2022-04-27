import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "75%", value: "75" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "70%", value: "70" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "80%",
          value: "80"
        },
        { id: "PHP_skill", content: "PHP", porcentage: "50", value: "50" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "65",
          value: "65"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "70%",
          value: "70"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a former UW Web Developing And Coding student whose looking to expand my carrer path and skills by obtaining a job that takes on web developing, I hope this portolio will give employers the interest to contact me about my work."
        },
        {
          id: "second-p-about",
          content:
            "Outside of Coding, I work a full time warehouse job. I really enjoy music, anime shows, exploring the outdoors, spending time with family and friends, and live streaming on twitch."
        },
        {
          id: "third-p-about",
          content:
            "I love taking on new challenges and seeing how far I can excel when it comes to facing new obstacles, This Coding progam I attended may have been difficult but I was able to learn alot and obtain new skills."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;