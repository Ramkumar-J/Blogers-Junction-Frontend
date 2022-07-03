import React from "react";
import BlogCard from "../Components/BlogCard";

function Blogs(){
    return(
        <div className="container-fluid blog-bg">
            <div className="container">
             <div className="row">
                <div className="col-lg-12">    
            <div className="row mt-5 mb-2">
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
            <div className="row mt-5 mb-2">
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
            </div>
            </div>
        </div>
    )
}

export default Blogs;