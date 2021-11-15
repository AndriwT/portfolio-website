import { ImportantDevices } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light nav">
        <div className="container-fluid">
          <a
            className="navbar-brand nav-logo"
            href="/"
            style={{ color: "white", fontSize: "30px", marginRight: "50px" }}
          >
            Andriw Tapanes
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  style={{ color: "white" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "white" }}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
