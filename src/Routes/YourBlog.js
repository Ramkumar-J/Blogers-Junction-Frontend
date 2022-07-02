import React from "react";

function YourBlog(){
    return(
        <div className="container">
           <form>
            <div className="row mt-4">
                <div className="col-lg-12">
                <label>Last name:</label>
  <input type="file" className="form-control w-50"/>    
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label for="blogImage">Creator name</label>
                    <input className="form-control" id="blogImage" type={"text"}></input>    
                </div>
            </div>
            </form>
        </div>
    )
}

export default YourBlog;