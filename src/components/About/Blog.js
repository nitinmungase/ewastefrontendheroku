import React from "react";
import card2 from "../../images/Blog.jpg";
import card3 from "../../images/card3.webp";

function Blog() {
  return (
    <div style={{ paddingTop: 130 }}>
      <div className="alert alert-primary" role="alert">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <div className="card">
              <img src={card3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">How to recycle a smartphone?</h5>
                <p className="card-text">
                  If you’re planning on getting rid of an old phone – that’s
                  awesome! It’s something many people want to do
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={card2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  E-Waste Management in India: Challenges and Opportunities
                </h5>
                <p className="card-text">
                  India generates over 50,000 tonnes of e-waste every month.
                  This is not surprising as the e-waste generation rate has been{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={card3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">12 ways to reduce/control e-waste</h5>
                <p className="card-text">
                  The amount of electronics discarded each year could either be
                  in good condition or unusable, and these are mostly generated{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
