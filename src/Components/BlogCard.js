import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogCard() {
  let [blogs, setblogs] = useState([]);
  useEffect(() => {
    async function getAllblogs() {
      try {
        let allblogs = await axios.get(
          "https://blogers-junction-backend.vercel.app/blogs",
          {
            headers: {
              Authorization: window.localStorage.getItem("blogappToken"),
            },
          }
        );
        setblogs(allblogs.data);
      } catch (error) {
        console.log(`Error while getting all Blogs: ${error}`);
        alert("Kindly Login to see Blogs");
      }
    }
    getAllblogs();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((blog) => {
              return (
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-5 mb-3">
                  <div className="card">
                    <div className="card-top mb-0">
                      <img
                        className="img-fluid bg-secondary blogcard-image"
                        src={blog.blogimage}
                        alt="Blog"
                      />
                      <hr className="mt-1 mb-0 border border-1 border-dark"></hr>
                      <div className="card-body pt-0">
                        <h3 className="card-title fw-bold">{blog.headline}</h3>
                        <Link className="fs-5" to={`/blogs/${blog._id}`}>
                          Read Blog
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div class="text-center text-white mt-5">
              <div
                class="spinner-border"
                style={{ width: "5rem", height: "5rem" }}
                role="status"
              ></div>
              <p class="text-danger fs-3 fw-bold">
                Blogs Loading Please wait...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BlogCard;
