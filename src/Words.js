import React from "react";

export default function Words() {
  return (
    <div>
      <section className="spacer green">
        <div className="container">
          <div className="row">
            <div className="span6 alignright flyLeft">
              <br />
              <blockquote className="large">
                Develop a passion for learning. If you do, you will never cease
                to grow.
                <cite>Dr. Bhupesh Gaur, Hod</cite>
              </blockquote>
            </div>
            <div className="span3 offset2">
              {/* <div className="span6 aligncenter flyRight"> */}
              <img src="/img/hod1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
