import React from "react";
import BlogCard from "../Components/BlogCard";

function Blogs(){
    return(
        <div className="container">
            <div className="row mt-3">
                <div className="col-lg-4">
                    <BlogCard></BlogCard>
                </div>
                <div className="col-lg-4">
                    <BlogCard></BlogCard>
                </div>
                <div className="col-lg-4">
                    <BlogCard></BlogCard>
                </div>
            </div>
        </div>
    )
}

export default Blogs;