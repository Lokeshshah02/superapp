import React, { useState } from "react";
import "./registerpage.scss";
import { useNavigate } from "react-router-dom";

////hello
const RegisterPage = () => {
  const navigate = useNavigate();
  
  const initialValues = {
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: ""
    
  }
  const [values, setValues] = useState(initialValues)
  const [error, setError] = useState({})
  const [formSubmit, setFormSubmit] = useState(false)

 const handleSubmit = (e) =>{
    e.preventDefault()
   setError(errorHandler(values))
   setFormSubmit(true)
   if(Object.keys(error).length ===  0 && formSubmit){
    localStorage.setItem("formdata", JSON.stringify(values))
    navigate("/category");
   }
  }

 const errorHandler = (data) =>{
  const errorMessage = {}
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
const phoneRegex = /^(?:\+1|1)?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/

   

  if(!data.name ){
    errorMessage.name  = "Field is required"
  }else if(data.name.length < 2){
    errorMessage.name  = "Name character should be greater than 2 letters"
  }
   if(!data.username){
    errorMessage.username  = "Field is required"
  }else if(data.username.length < 2){
    errorMessage.username  = "Username character should be greater than 2 letters"
  }
   if(!data.email){
    errorMessage.email  = "Field is required"
  }else if(!emailRegex.test(data.email)){
    errorMessage.email  = "Invalid email"
  }
   if(!data.mobile){
    errorMessage.mobile  = "Field is required"
  }else if(!phoneRegex.test(data.mobile)){
    errorMessage.mobile  = "Invalid mobile number"
  }
   if(!data.checkbox){
    errorMessage.checkbox  = "Check this box if you want to proceed"
  }
  return errorMessage
 }

 const handleChange = (e) =>{
  const {name, value, type, checked} = e.target

  if(type === "checkbox"){

    setValues({
      ...values,
      [name]: checked,
  
    })
  }else{

    setValues({
      ...values,
      [name]: value,
  
    })
  }

 }
  return (
    <>
      <div className="container">
        <div className="image-container">
         
          <p>Discover new things on superapp</p>
        </div>

        <div className="form-container">
          <h1>Super app</h1>
          <h2>Create your new account</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name" value={values.name}onChange={handleChange} />{
              error && <p className="errorAlert"> {error.name }</p>
            }
            <input type="text" placeholder="UserName" name="username" values={values.username}onChange={handleChange} />
            {
              error && <p className="errorAlert"> {error.username }</p>
            }
            <input type="email" placeholder="Email" name="email" values={values.email} onChange={handleChange}  />
            {
              error && <p className="errorAlert"> {error.email }</p>
            }
            <input type="tel" placeholder="Mobile" name="mobile"  values={values.mobile}onChange={handleChange}  />
            {
              error && <p className="errorAlert"> {error.mobile }</p>
            }

            <div className="checkbox-container">
            <input type="checkbox" id="checkbox" name="checkbox" values={values.checkbox} onChange={handleChange}  /> <span>Share my registration data with Superapp</span>
            </div>
            {
              error && <p className="errorAlert"> {error.checkbox }</p>
            }
            <button>SING UP</button>
            <p>By clicking on Sign up. you agree to Superapp<span> Terms and Conditions of Use</span></p>
            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span>Privacy Policy</span></p>


          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
