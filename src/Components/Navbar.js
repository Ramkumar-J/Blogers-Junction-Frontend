import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  let handleLogout = () => {
    window.localStorage.removeItem("myappToken");
    navigate("/signin");
  };
  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark">
      <div class="container">
        <Link className="navbar-brand fs-4 text-dark fw-bold" to="/">
          Blogers 🚥 <i className="text-warning">Junction</i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#blog-nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="blog-nav">
          <ul className="navbar-nav ms-auto fs-5 text-white fw-bold">
            <li className="nav-items link-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-items link-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-items link-item">
              <Link className="nav-link" to="/createblog">
                CreateBlog
              </Link>
            </li>
            <li className="nav-items link-item">
            <button class="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
