import React from "react";

function Header() {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="">Restaurant App</a>
    <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#menuBar" ariaControls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="menuBar">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="">Home</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="">Restaurant</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="">History</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="">Report</a>
        </li>
      </ul>
      </div>
  </nav>);
}

export default Header;