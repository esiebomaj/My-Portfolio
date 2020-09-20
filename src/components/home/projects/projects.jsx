import React from "react";
import djangoLogo from "../../../images/django.png";
import moreImg from "../../../images/more.png";
import cariGoImg from "../../../images/carigo.png";
import locatorImg from "../../../images/Locator.png";
import skillNGImg from "../../../images/Skill.png";
import "./projects.css";

const Projects = () => {
  return (
    <section className="project-section">
      <div className="project-section-header">
        <h1>My projects</h1>
      </div>
      <div className="project-section-main">
        <div className="project-item">
          <img src={cariGoImg} alt="project 1" />
          <div className="overlay">
            <h3>Cari Go (Front-end)</h3>
            <p>A distributed Waybill system</p>
            <p>
              <i class="fab fa-js-square"></i>
              <i class="fab fa-react"></i>
            </p>
            <div className="porject-actions">
              <a href="https://github.com/BuildForSDGCohort2/Team-97A-Frontend">
                <button title="view in Github">
                  <i class="fab fa-github"></i>
                </button>
              </a>
              <a href="https://carigo.herokuapp.com/">
                <button title="Live Demo">Live!</button>
              </a>
            </div>
          </div>
        </div>
        <div className="project-item">
          <img src={cariGoImg} alt="project 1" />
          <div className="overlay">
            <h3>Cari Go (Back-end/API)</h3>
            <p>A distributed Waybill system</p>
            <p>
              <i class="fab fa-python"></i>
              <img id="small-django" src={djangoLogo} alt="" />
            </p>
            <div className="porject-actions">
              <a href="https://github.com/BuildForSDGCohort2/Team-97A-Backend">
                <button title="view in Github">
                  <i class="fab fa-github"></i>
                </button>
              </a>
              <a href="https://carigo.herokuapp.com/">
                <button title="Live Demo">Live!</button>
              </a>
            </div>
          </div>
        </div>
        <div className="project-item">
          <img src={skillNGImg} alt="project 1" />
          <div className="overlay">
            <h3>Skill NG</h3>
            <p>E-learning aplication with CMS</p>
            <p>
              <i class="fab fa-python"></i>
              <i class="fab fa-js-square"></i>
              <img id="small-django" src={djangoLogo} alt="" />
            </p>
            <div className="porject-actions">
              <a href="https://github.com/esiebomaj/skillNG">
                <button title="view in Github">
                  <i class="fab fa-github"></i>
                </button>
              </a>
              <a href="https://skillng.herokuapp.com/">
                <button title="Live Demo">Live!</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <img src={locatorImg} alt="project 1" />
          <div className="overlay">
            <h3>Futo Hall Locator</h3>
            <p>Helps new students find their way around my school FUTO</p>
            <p>
              <i class="fab fa-js-square"></i>
            </p>
            <div className="porject-actions">
              <a href="https://github.com/esiebomaj/Futo-Hall-Locator">
                <button title="view in Github">
                  <i class="fab fa-github"></i>
                </button>
              </a>
              {/* <button title="Live Demo">Live!</button> */}
            </div>
          </div>
        </div>
        <div className="project-item">
          <img src={moreImg} alt="project 1" />
          <div className="overlay">
            <h3>... and a lot more</h3>
            <p>
              <i class="fab fa-python"></i>
              <i class="fab fa-js-square"></i>
              <img id="small-django" src={djangoLogo} alt="" />
              <i class="fab fa-react"></i>
            </p>
            <div className="porject-actions">
              <a href="https://github.com/esiebomaj">
                <button title="view in Github">
                  <i class="fab fa-github"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
