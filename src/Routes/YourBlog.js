import React from "react";
import {useFormik} from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function YourBlog(){
    let navigate=useNavigate();
   let formik=useFormik({
    initialValues:{
        blogimage:"",
        creatorname:"",
        published:"",
        headline:"",
        introduction:"",
        paragraph1:"",
        paragraph2:"",
        paragraph3:"",
        conclusion:"",
    },
    validate: (values) => {
        const errors={};
        if(!values.blogimage){
            errors.blogimage="Blog Image is Required"
        }
        if(!values.creatorname){
            errors.creatorname="Creater name is Required"
        }
        if(!values.published){
            errors.published="Date of published is Required"
        }
        if(!values.headline){
            errors.headline="headline is Required"
        }
        if(!values.introduction){
            errors.introduction="introduction is Required"
        }
        if(!values.paragraph1){
            errors.paragraph1="Blog Body Text is Required"
        }
        if(!values.conclusion){
            errors.conclusion="Conclusion is Required"
        }
        return errors;
    },
    onSubmit:async (values) => {
       try {
        axios.post("http://localhost:3001/yourblog", values);
        navigate("/blogs")
       } catch (error) {
        console.log("error");
       }
    }
});
    return(
        <div className="container-fluid d-flex justify-content-center yourblog-bg">
           <form onSubmit={formik.handleSubmit}>
           <div className="row mt-4 blog-post">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row mt-2">
                <div className="col-lg-12">
                <label className="text-primary fs-5 mb-2" for="blogImage">Blog Image<spam className="fs-6 text-secondary">(paste image like)</spam></label>
  <input type="text" className="form-control" id="blogImage" name="blogimage" onChange={formik.handleChange} value={formik.values.blogimage}/>    
                {
                   formik.touched.blogimage && formik.errors.blogimage ? <span style={{color:"red"}}>{formik.errors.blogimage}</span> :null
                }
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="creater">Creator name</label>
                    <input className="form-control" id="creater" type={"text"} name="creatorname" onChange={formik.handleChange} value={formik.values.creatorname}></input>    
                    {
                   formik.touched.creatorname && formik.errors.creatorname ? <span style={{color:"red"}}>{formik.errors.creatorname}</span> :null
                }
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="publish">Date on Publish</label>
                    <input className="form-control" id="publish" type={"date"} name="published" onChange={formik.handleChange} value={formik.values.published}></input>    
                    {
                   formik.touched.published && formik.errors.published ? <span style={{color:"red"}}>{formik.errors.published}</span> :null
                }
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="headline">Blog Headline</label>
                    <input className="form-control" id="headline" type={"text"} name="headline" onChange={formik.handleChange} value={formik.values.headline}></input>    
                    {
                   formik.touched.headline && formik.errors.headline ? <span style={{color:"red"}}>{formik.errors.headline}</span> :null
                }
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="intro">Introduction</label>
                    <textarea className="form-control" id="intro" type={"text"} name="introduction" onChange={formik.handleChange} value={formik.values.introduction}></textarea>    
                    {
                  formik.touched.introduction && formik.errors.introduction ? (<span style={{color:"red"}}>{formik.errors.introduction}</span>) :null
                }
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="bodytext1">Blog BodyText-1</label>
                    <textarea className="form-control" id="bodytext1" type={"text"} name="paragraph1" onChange={formik.handleChange} value={formik.values.paragraph1}></textarea>    
                    {
                  formik.errors.paragraph1? <span style={{color:"red"}}>{formik.errors.paragraph1}</span> :null
                }
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="bodytext2">Blog BodyText-2</label>
                    <textarea className="form-control" id="bodytext2" type={"text"} name="paragraph2" onChange={formik.handleChange} value={formik.values.paragraph2}></textarea>    
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="bodytext3">Blog BodyText-3</label>
                    <textarea className="form-control" id="bodytext3" type={"text"} name="paragraph3" onChange={formik.handleChange} value={formik.values.paragraph3}></textarea>    
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <label className="text-primary fs-5 mb-2" for="publish">Conclusion</label>
                    <textarea className="form-control" id="publish" type={"text"} name="conclusion" onChange={formik.handleChange} value={formik.values.conclusion}></textarea>    
                    {
                   formik.touched.conclusion && formik.errors.conclusion ? <span style={{color:"red"}}>{formik.errors.conclusion}</span> :null
                }
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