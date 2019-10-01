import React, { Component } from "react";

export default class Modals extends Component {
  state = {
    isLoading: false,
    news: []
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://csdept-api.herokuapp.com/news")
      .then(response => response.json())
      .then(news => {
        console.log(news.news[0]);

        this.setState({
          news: news.news,
          isLoading: false
        });
      });
  }
  render() {
    return (
      <div>
        <div
          id="myModal"
          className="modal fade"
          role="dialog"
          style={{
            position: "fixed",
            top: "35%"
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title" style={{ fontFamily: "Rambla" }}>
                  Latest News
                </h4>
              </div>

              <div
                className="modal-body"
                style={{ fontFamily: "Source Sans Pro Helvetica sans-serif" }}
              >
                <p>Some News here</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-dark"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// import React, { Component } from "react";

// import Modal from "react-responsive-modal";

// const styles = {
//   fontFamily: "Rambla",
//   textAlign: "center"
// };

// export default class Modals extends Component {
//   state = {
//     open: true,
//     isLoading: false,
//     news: []
//   };
//   componentDidMount() {
//     this.setState({ isLoading: true });
//     fetch("https://csdept-api.herokuapp.com/news")
//       .then(response => response.json())
//       .then(news => {
//         console.log(news.news[0]);

//         this.setState({
//           news: news.news,
//           isLoading: false
//         });
//       });
//   }
//   onOpenModal = () => {
//     this.setState({ open: true });
//   };

//   onCloseModal = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { open } = this.state;
//     var res = [];
//     var res1 = [];
//     var res2 = [];
//     if (!this.state.isLoading) {
//       return (
//         <div>
//           <Modal
//             open={open}
//             onClose={this.onCloseModal}
//             style={{ position: "fixed", top: "40%" }}
//           >
//             <br />
//             <br />
//             <div className="news">
//               <div id="page-wrapper">
//                 <section id="footer1">
//                   <div class="container">
//                     {/* <div class="row"> */}
//                     <section>
//                       {" "}
//                       <br />
//                       <br />
//                       <div>
//                         <header>
//                           <h2>Latest News And Updates</h2>
//                         </header>{" "}
//                         {this.state.news.map((news, index) => (
//                           <div>
//                             {
//                               (((res = news.formattedDate.split(" ")),
//                               (res1 = res[0]),
//                               (res2 = res[1])),
//                               console.log(res1))
//                             }
//                             <br />
//                             <div className="span8">
//                               <ul class="dates">
//                                 <li>
//                                   <span class="date">
//                                     {res1}
//                                     <strong>{res2}</strong>
//                                   </span>
//                                   <h3>
//                                     <a href="#">{news.title}</a>
//                                   </h3>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </section>
//                     <br />
//                     {/* </div> */}
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </Modal>
//         </div>
//       );
//     } else return <div />;
//   }
// }
