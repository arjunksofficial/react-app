import React from "react";
import "bootstrap/dist/css/bootstrap.css";

// class Navbar extends React.Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar
//             <span
//               style={{ backgroundColor: "red" }}
//               className="badge badge-pill badge-secondary"
//             >
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span
            style={{ backgroundColor: "red" }}
            className="badge badge-pill badge-secondary"
          >
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
