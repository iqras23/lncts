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

// export default class Modals extends Component {
//   state = {
//     isLoading: true,
//     items: []
//   };

//   componentDidMount() {
//     this.setState({ isLoading: true });
//     fetch("https://csdept-api.herokuapp.com/showcaseitems")
//       .then(response => response.json())
//       .then(items => {
//         console.log(items.items[0].image);

//         this.setState({
//           items: items.items,
//           isLoading: false
//         });
//       });
//   }
//   render() {
//     if (!this.state.isLoading) {
//       return (
//         <div>
//           <div
//             id="myModal"
//             className="modal fade"
//             role="dialog"
//             style={{
//               position: "fixed",
//               top: "35%"
//             }}
//           >
//             <div className="modal-dialog">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <button type="button" className="close" data-dismiss="modal">
//                     &times;
//                   </button>
//                   <h4 className="modal-title" style={{ fontFamily: "Rambla" }}>
//                     Latest News
//                   </h4>
//                 </div>
//                 <div
//                   className="modal-body"
//                   style={{ fontFamily: "Source Sans Pro Helvetica sans-serif" }}
//                 >
//                   {/* <img
//                     src={
//                       "https://csdept-api.herokuapp.com/" +
//                       this.state.items[3].image
//                     }
//                   /> */}
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-dark"
//                     data-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     } else return <div />;
//   }
// }
