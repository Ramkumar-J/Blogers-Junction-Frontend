import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-md bg-primary navbar-dark">
            <div class="container">
            <Link className="navbar-brand fs-4 text-dark fw-bold" to="/">Blogers 🚥 <i className="text-warning">Junction</i></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#blog-nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="blog-nav">
                <ul className="navbar-nav ms-auto fs-5 text-white fw-bold">
                    <li className="nav-items">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-items">
                        <Link className="nav-link" to="/blogs">Blogs</Link>
                    </li>
                    <li className="nav-items">
                        <Link className="nav-link" to="/yourblog">YourBlog</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;