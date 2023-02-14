import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ReadBlog() {
  let params = useParams();
  let [readblog, setReadblog] = useState([]);
  useEffect(() => {
    async function getBlog() {
      try {
        let singleblog = await axios.get(
          `https://blogers-junction-backend.vercel.app/blogs/${params.id}`,
          {
            headers: {
              Authorization: window.localStorage.getItem("blogappToken"),
            },
          }
        );
        setReadblog(singleblog.data);
      } catch (error) {
        console.log(`Error while get Blog: ${error}`);
      }
    }
    getBlog();
  }, []);
  return (
    <div className="container">
      <div className="row mt-2 mb-2">
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 border border-3">
          <h1 className="mt-5 mb-2 fw-bold">{readblog.headline}</h1>
          <img
            className="mt-3 bg-secondary blogimg-size"
            src={readblog.blogimage}
          ></img>
          <p className="fs-5 mt-3 mb-2">
            <strong className="text-primary">Created By</strong> -{" "}
            {readblog.creatorname}
          </p>
          <p className="fs-5">
            <strong className="text-primary">Published on</strong> -{" "}
            {readblog.published}
          </p>
          <h2 className="mt-3 mb-2 fw-bold text-info">Introduction</h2>
          <p className="fs-5">{readblog.introduction}</p>
          <h3 className="mt-2 mb-2 fw-bold">{readblog.subheadline1}</h3>
          <p className="fs-5">{readblog.paragraph1}</p>
          <h3 className="mt-2 mb-2 fw-bold">{readblog.subheadline2}</h3>
          <p className="fs-5">{readblog.paragraph2}</p>
          <h3 className="mt-2 mb-2 fw-bold">{readblog.subheadline3}</h3>
          <p className="fs-5">{readblog.paragraph3}</p>
          <h2 className="mt-3 mb-2 fw-bold text-info">Conclusion</h2>
          <p className="fs-5">{readblog.conclusion}</p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <div className="side-contents">
            <img
              className="side-img img-fluid"
              src="https://requestwriter.com/wp-content/uploads/2021/05/blog-post-writer.jpg"
              alt="Blog Ad"
            ></img>
            <h5 className="text-success fw-bold">
              Do You Want to write your own blog{" "}
            </h5>
            <p className="fs-5 fw-bold text-success">Just Click Here*</p>
            <Link to="/createblog">
              <button className="btn btn-primary btn-center">
                Create Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadBlog;
