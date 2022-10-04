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
      <body style={{ paddingTop: 110 }}>
        <div className="container" >
          <div id="downloadWrapper" ref={this.certificateWrapper}>
            <div id="certificateWrapper">
              <p>{currentUser.fullname}</p>
              <img
                 src={certificate}
                alt="Certificate"
                width="900px"
              />
              <div >
                <button className="btn btn-warning"
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
      </body>
    );
  }
}
