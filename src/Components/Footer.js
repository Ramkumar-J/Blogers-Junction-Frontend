import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="container-fluid d-flex flex-wrap justify-content-between align-items-center border-top bg-dark mb-1">
      <p class="col-md-4 mb-1 text-white">© 2022 RK Blogers Junction, Inc</p>
      <Link
        to="/"
        class="col-md-4 d-flex align-items-center justify-content-center fs-5 mb-1"
      >
        Blogers 🚥 Junction
      </Link>
      <ul class="nav col-md-4 justify-content-end mb-1">
        <li class="nav-item">
          <Link to="/home" class="nav-link px-2 text-white">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/blogs" class="nav-link px-2 text-white">
            Blogs
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/createblog" class="nav-link px-2 text-white">
            CreateBlog
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
