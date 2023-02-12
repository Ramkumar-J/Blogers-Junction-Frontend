import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup(){
   let navigate=useNavigate();
   let formik=useFormik({
    initialValues:{
        username:"",
        email:"",
        password:"",
    },
    validate: (values) => {
        const errors={};
        if(!values.username){
            errors.username="Username is Required";
        }
        if(!values.email){
            errors.email="Email is Required";
        }
        if(!values.password){
            errors.password="Password is Required";
        }else if(values.password.length !== 4 && values.password.length > 8){
            errors.password="Password contains minimum 4-8 Characters";
        }
        return errors;
    },
    onSubmit: async (values) => {
        try {
            await axios.post("http://localhost:8080/signup",values);
            navigate("/signin");
        } catch(error) {
            alert("Something went wrong");
        }
    }
   })
   return(
    <div className="container-fluid signup-container">
    <h1 className="signup-title">Signup</h1>
    <form className="form-container" onSubmit={formik.handleSubmit}>
        <div className="form-input-container">
        <label className="form-label" for="username">Username<sup className="text-danger">*</sup></label><br></br>
        <input className="form-field" id="username" type={"text"} placeholder="Enter Name" name="username" onChange={formik.handleChange} values={formik.values.username}></input>
        <p className="signup-field-error" style={{color:"red"}}>{formik.errors.username}</p>
        </div>
        <div className="form-input-container">
        <label className="form-label" for="email">Email<sup className="text-danger">*</sup></label><br></br>
        <input className="form-field" id="email" type={"email"} placeholder="Enter Name" name="email" onChange={formik.handleChange} values={formik.values.email}></input>
        <p className="signup-field-error" style={{color:"red"}}>{formik.errors.email}</p>
        </div>
        <div className="form-input-container">
        <label className="form-label" for="password">Password<sup className="text-danger">*</sup></label><br></br>
        <input className="form-field" id="password" type={"password"} placeholder="Enter Name" name="password" onChange={formik.handleChange} values={formik.values.password}></input>
        <p className="signup-field-error" style={{color:"red"}}>{formik.errors.password}</p>
        </div>
        <div className="form-btn-container">
        <input className="form-btn" type={"submit"} value="Submit"></input>
        </div>
        <p className="signup-content">If you are already registered, <Link to={"/signin"}>Signin</Link></p>
    </form>
</div>
   )
}

export default Signup;