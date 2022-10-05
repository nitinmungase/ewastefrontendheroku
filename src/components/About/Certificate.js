import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "../../App.css";
import authService from "../../services/auth.service";
import certificate from "../../images/Certificate.png";

export default class Certificate extends Component {
  certificateWrapper = React.createRef();
  currentUser = authService.getCurrentUser();

  render() {
    const currentUser = authService.getCurrentUser();
    return (
      <div style={{ paddingTop: 180 }}>
        <div className="container">
          <div className="d-flex justify-content-center p-2">
            <p className="certificateName">{currentUser.fullname}</p>
            <img
              ref={this.certificateWrapper}
              className="certificateImg"
              src={certificate}
              alt="Certificate"
            />
            <div>
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  exportComponentAsPNG(this.certificateWrapper, {
                    html2CanvasOptions: { backgroundColor: null },
                  });
                }}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
