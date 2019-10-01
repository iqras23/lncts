// import React from "react";

// export default function Hod() {
//   return (
//     <div id="hod">
//       <div>
//         <section id="blog" class="section" style={{ fontFamily: "Rambla" }}>
//           <div class="row">
//             <section>
//               <div class="container">
//                 <h4 style={{ paddingLeft: "40px", fontFamily: "Rambla" }}>
//                   Head Of Department
//                 </h4>

//                 <div class="row">
//                   <div class="span5 offset1">
//                     <div class="aligncenter">
//                       <img
//                         src="img/hod.jpg"
//                         alt=""
//                         style={{
//                           boxShadow: "5px 10px 18px #888888"
//                         }}
//                       />
//                     </div>
//                   </div>

//                   <div class="span4 ">
//                     <div>
//                       <h2>
//                         {" "}
//                         <strong
//                           style={{ fontFamily: "Rambla", fontSize: "30px" }}
//                         >
//                           Dr. Bhupesh Gour{" "}
//                         </strong>
//                       </h2>{" "}
//                       <ul class="span6" style={{ listStyle: "disk" }}>
//                         <li>Professor & Head.</li>
//                         <li>Ph.D in CSE, RGPV Bhopal(MP), 2011.</li>
//                         <li>
//                           M.Tech in Computer Technology & Application, School of
//                           IT,
//                           <br /> RGPV Bhopal(MP), 2005.
//                         </li>
//                         <li>
//                           B.E in CSE, Govt Engineering College, Jabalpur(MP),
//                           2000.
//                         </li>
//                         <li>19 Conference/Workshops/Coordinated/Attended.</li>
//                         <li>42 Research Publications.</li>
//                         <li>2 Technology Patents Filed.</li>
//                         <li>
//                           Research Presented in IEEE International Conferences
//                           at:{" "}
//                           <ul style={{ listStyle: "none" }}>
//                             <li>Ai-Ain, UAE.</li>
//                             <li>Phuket, Thailand.</li>
//                             <li>Singapore.</li>
//                             <li>Malaysia.</li>
//                           </ul>
//                         </li>
//                         <li>
//                           Memberships:
//                           <ul style={{ listStyle: "none" }}>
//                             <li>Life Member IACSIT.</li>
//                             <li>Senior Member IEEE.</li>
//                             <li>Life Member ISTE.</li>
//                           </ul>
//                         </li>
//                         <li>
//                           Books Published:
//                           <ul style={{ listStyle: "none" }}>
//                             <li>
//                               Database Management System Concepts &
//                               Normalisation.
//                             </li>
//                             <li>Intellectual Property.</li>
//                           </ul>
//                         </li>
//                         <li>
//                           Award Received: Faculty Appreciation Award, LNCT,
//                           2019.
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function Hod() {
  return (
    <div>
      <div className="dean" style={{ fontFamily: "Rambla" }} id="hod">
        <section id="two" class="main style2">
          <div class="container">
            <div class="row  gtr-150">
              <div class="span6">
                <ul class="major-icons">
                  <span class="image fit">
                    {" "}
                    <img
                      src="/img/hod.jpg"
                      alt=""
                      style={{
                        boxShadow: "5px 10px 18px #888888"
                      }}
                    />
                  </span>
                </ul>
              </div>
              {/* <div class="col-6 col-12-medium"> */}
              <div class="span4">
                <header class="major">
                  <h2 className="h22" style={{ fontSize: "1.7em" }}>
                    <strong>
                      Dr. Bhupesh Gaur
                      <span style={{ fontSize: "0.9em" }}>
                        {" "}
                        <br />
                        (Hod)
                      </span>
                      <br />
                    </strong>{" "}
                  </h2>
                </header>
                <p className="p1" style={{ lineHeight: "1.65em" }}>
                  <ul>
                    <li>Professor & Head.</li>
                    <li>Ph.D in CSE, RGPV Bhopal(MP), 2011.</li>
                    <li>
                      M.Tech in Computer Technology & Application, School of IT,
                      <br /> RGPV Bhopal(MP), 2005.
                    </li>
                    <li>
                      B.E in CSE, Govt Engineering College, Jabalpur(MP), 2000.
                    </li>
                    <li>19 Conference/Workshops/Coordinated/Attended.</li>
                    <li>42 Research Publications.</li>
                    <li>2 Technology Patents Filed.</li>
                    <li>
                      Research Presented in IEEE International Conferences at:{" "}
                      <ul style={{ listStyle: "none" }}>
                        <li>Ai-Ain, UAE.</li>
                        <li>Phuket, Thailand.</li>
                        <li>Singapore.</li>
                        <li>Malaysia.</li>
                      </ul>
                    </li>
                    <li>
                      Memberships:
                      <ul style={{ listStyle: "none" }}>
                        <li>Life Member IACSIT.</li>
                        <li>Senior Member IEEE.</li>
                        <li>Life Member ISTE.</li>
                      </ul>
                    </li>
                    <li>
                      Books Published:
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          Database Management System Concepts & Normalisation.
                        </li>
                        <li>Intellectual Property.</li>
                      </ul>
                    </li>
                    <li>
                      Award Received: Faculty Appreciation Award, LNCT, 2019.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
