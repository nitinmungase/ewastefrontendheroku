import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import photo1 from "../../images/photo1.png";
import "../../App.css";

function Team() {
  return (
    <div style={{ paddingTop: 160 }}>
      <div className="container">
        <div className="row justify-content-center mb-1">
          <div className="col-md-7 text-center">
            <h3 className="mb-1">Developed By</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-lg-3 mb-2">
            <div className="row">
              <div className="col-md-12">
                <img
                  src={photo1}
                  alt="wrapkit"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="col-md-12 text-center">
                <div className="pt-2">
                  <h5 className="mt-1 font-weight-medium mb-0">
                    Nitin Mungase
                  </h5>
                  <h6 className="subtitle mb-3">Developer</h6>
                  <p>
                  PG-DAC
                  March 2022<p>
                  Worked on Frontend & Backend</p>
                  </p>
                  <ul className="list-inline">
                    <a
                      href="/"
                      className="view"
                      title="Contact Mail"
                      style={{ color: "#00911f" }}
                    >
                      <i className="material-icons">&#xe0d0;</i>
                    </a>
                    <a
                      href="/"
                      className="view"
                      title="Facebook"
                      style={{ color: "#00911f" }}
                    >
                      <i className="material-icons">&#xf234;</i>
                    </a>
                    <a
                      href="/"
                      className="view"
                      title="Wechat"
                      style={{ color: "#00911f" }}
                    >
                      <i className="material-icons">&#xea81;</i>
                    </a>
                    <a
                      href="/"
                      className="view"
                      title="Instagram"
                      style={{ color: "#00911f" }}
                    >
                      <i className="material-icons">&#xe438;</i>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
