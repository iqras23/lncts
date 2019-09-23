import React from "react";

export default function Works() {
  return (
    <div>
      <section id="services" className="section orange">
        <div className="container">
          <h4>Research Areas</h4>
          {/* <!-- Four columns --> */}
          <div className="row">
            <div className="span3 animated-fast flyIn">
              <div className="service-box">
                <img src="img/ml1.jpg" alt="" />
                <h2>Machine Learning</h2>
                <p>
                  Artifical Neural Networks, Deep Learning, Kernel Methods,
                  Reinforcement Learning, Robot Learning.
                </p>
              </div>
            </div>
            <div className="span3 animated flyIn">
              <div className="service-box">
                <img src="img/cn.png" alt="" />
                <h2>Computer Networks</h2>
                <p>
                  Adhoc Wireless Networks, Network Traffic Analysis and
                  Modeling, Optical Networks, Performance Evaluation.
                </p>
              </div>
            </div>
            <div className="span3 animated-fast flyIn">
              <div className="service-box">
                <img src="img/ai.jpg" alt="" />
                <h2>Artificial Intelligence</h2>
                <p>
                  Knowledge Representation, Memory Based Reasoning, Memory
                  Models, Natural Language Processing.
                </p>
              </div>
            </div>
            <div className="span3 animated-slow flyIn">
              <div className="service-box">
                <img src="img/iot.jpg" alt="" />
                <h2>Internet Of Things</h2>
                <p>
                  Ubiquitous computing, Cyber-physical systems, Pervasive
                  computing, Embedded systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
