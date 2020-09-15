import React from "react";

//Add href to all "a" tags
function Header() {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#bleh">Restaurant App</a>
    <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#menuBar" ariaControls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="menuBar">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#bleh">Home</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#bleh">Restaurant</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#bleh">History</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#bleh">Report</a>
        </li>
      </ul>
      </div>
  </nav>);
}

export default Header;