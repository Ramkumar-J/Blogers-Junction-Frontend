import React from "react";

function YourBlog(){
    return(
        <div className="container-fluid d-flex justify-content-center yourblog-bg">
           <form>
           <div className="row mt-4 blog-post">
                <div className="col-lg-12">
            <div className="row mt-2">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label className="text-primary fs-5 mb-2" for="blogImage">Blog Image</label>
  <input type="file" className="form-control" id="blogImage"/>    
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="creater">Creator name</label>
                    <input className="form-control" id="creater" type={"text"}></input>    
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="publish">Date on Publish</label>
                    <input className="form-control" id="publish" type={"date"}></input>    
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="headline">Blog Headline</label>
                    <input className="form-control" id="headline" type={"text"}></input>    
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="intro">Introduction</label>
                    <textarea className="form-control" id="intro" type={"text"}></textarea>    
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="bodytext1">Blog BodyText-1</label>
                    <textarea className="form-control" id="bodytext1" type={"text"}></textarea>    
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="bodytext2">Blog BodyText-2</label>
                    <textarea className="form-control" id="bodytext2" type={"text"}></textarea>    
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="bodytext3">Blog BodyText-3</label>
                    <textarea className="form-control" id="bodytext3" type={"text"}></textarea>    
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="publish">Conclusion</label>
                    <textarea className="form-control" id="publish" type={"text"}></textarea>    
                </div>
            </div>
            <div className="row mt-4 mb-3">
                <div className="col-lg-12">
                    <input className="form-control btn btn-success" type={"submit"} value="Submit Blog"></input>    
                </div>
            </div>
            </div>
            </div>
            </form>
        </div>
    )
}

export default YourBlog;