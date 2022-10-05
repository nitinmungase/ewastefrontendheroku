import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../images/Show.png";

function Footer() {
  return (
    <footer >
      <section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom ">
        <div className="me-5 d-none d-lg-block ">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="/" className="me-4 link-light">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className="me-4 link-light">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="me-4 link-light">
            <i className="fab fa-google"></i>
          </a>
          <a href="/" className="me-4 link-light">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/" className="me-4 link-light">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/" className="me-4 link-light">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-left text-md-start mt-1">
          <div className="row mt-2">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
              <h6 className="text-uppercase fw-bold mb-1">
                <i className="fas fa-gem me-3 text-secondary"></i>E-waste
              </h6>
              <div
                className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-1 mx-auto"
                style={{ width: "75px", height: "75px" }}
              >
                <img src={companyLogo} height="70" alt="logo" loading="lazy" />
              </div>
              <p className="text-center">
                Trash is not the right place, Understand your E-Waste
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto ">
              <h6 className="text-uppercase fw-bold mb-1">About Ewaste</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#!" className="text-dark">
                    <i className="medium inline-icon material-icons">
                      &#xeb8b;
                    </i>
                    What is Ewaste
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-dark">
                    <i className="inline-icon material-icons">priority_high</i>
                    Why Ewaste
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-dark">
                    <i className="inline-icon material-icons">
                      developer_board
                    </i>
                    Data Destruction
                  </a>
                </li>
                <li className="mb-2">
                  <Link to={"/blog"} className="text-dark">
                    <i className="inline-icon material-icons">event</i>Events &
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto ">
              <h6 className="text-uppercase fw-bold mb-1">What We do</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to={"/process"} className="text-dark">
                    <i className="inline-icon material-icons">&#xe878;</i>
                    Process
                  </Link>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-dark" >
                    <i className="inline-icon material-icons">work</i>Management
                  </a>
                </li>
                <li className="mb-2" >
                  <a href="#!" className="text-dark">
                    <i className="inline-icon material-icons">&#xea23;</i>
                    Certificate
                  </a>
                </li>
                <li className="mb-2">
                  <Link to={"/team"}  className="text-dark">
                    <i className="inline-icon material-icons">people</i>Meet Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 ">
              <h6 className="text-uppercase fw-bold mb-1">Contact</h6>
              <ul className="list-unstyled text-dark">
                <li>
                  <p>
                    <i className="inline-icon material-icons">
                      account_balance
                    </i>{" "}
                    CDAC - HYD
                  </p>
                </li>
                <li>
                  <p>
                    <i className="inline-icon material-icons">contact_phone</i>{" "}
                    + 91 123 456 78
                  </p>
                </li>
                <li>
                  <p>
                    <i className="large inline-icon material-icons">
                      contact_mail
                    </i>{" "}
                    contact@ewaste.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center mb-2 bg-secondary">
      © No Copyright 2033 . Save Earth Save Soil.
        
      </div>
    </footer>
  );
}
export default Footer;
