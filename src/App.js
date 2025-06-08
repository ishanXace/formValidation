import '/Users/ishan/Desktop/form_validation/src/App.css';
import { useState, useEffect } from 'react';
import React from 'react';
function App() {
  const intialValues = {
    firstName : '',
    lastName : '',
    userName : '',
    emailAddress : '',
    password : '',
    phoneNo : '',
    country : '',
    city : '',
    aadharNo : '',
  };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (event) =>{
    console.log(event.target);
    const {name , value} = event.target;
    setFormValues({...formValues, [name] : value});
    console.log(formValues);
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  useEffect(() =>{
    console.log(formErrors);
    if(Object.keys(formValues).length ===0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors]);
  const validate = (values) =>{
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(!values.firstName){
      errors.firstName = 'First Name is required';
    }
    if(!values.lastName){
      errors.lastName = 'Last Name is required';
    }
    if(!values.userName){
      errors.userName = 'User Name is required';
    }
    if(!values.emailAddress){
      errors.emailAddress = 'Email Address is required';
    }else if (!regex.test(values.emailAddress)){
      errors.emailAddress = "This is not a valid email format!";
    }
    if(!values.password){
      errors.password = 'Password is required';
    }else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 character";
    }else if(values.password.length > 15) {
      errors.password = "Password cannot exceed more than 15 character";
    }
    if(!values.phoneNo){
      errors.phoneNo = 'Phone Number is required';
    }
    if(!values.country){
      errors.country = 'Country is required';
    }
    if(!values.city){
      errors.city = 'City is required';
    }
    if(!values.aadharNo){
      errors.aadharNo = 'Aadhar Number is required';
    }
    return errors;
  }
  return (
    <div className = "container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="UI Message Success">Signed In Successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      
      <form onSubmit = {handleSubmit}>
        <h1>Signup Form</h1>
        <div className = "ui divider"></div>
        <div className = "ui form">
          <div className = "field">
            <label>
              First Name
            </label>
            <input type = "text" name = "firstName" placeholder = "First Name"  value = {formValues.firstName} onChange={handleChange}/>
            <p className = "error">{formErrors.firstName}</p>
            <label>
              Last Name
            </label>
            <input type = "text" name = "lastName" placeholder = "Last Name" value = {formValues.lastName}
            onChange={handleChange}/>
            <p className = "error">{formErrors.lastName}</p>
            <label>
              Username
            </label>
            <input type = "text" name = "userName" placeholder = "Username" value = {formValues.userName}
            onChange={handleChange}/>
            <p className = "error">{formErrors.userName}</p>
            <label>
              Email
            </label>
            <input type = "text" name = "emailAddress" placeholder = "Email" value = {formValues.emailAddress}
            onChange={handleChange}/>
            <p className = "error">{formErrors.emailAddress}</p>
            <label>
              Password
            </label>
            <div className="password-field-wrapper">
            <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="password-input"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            autoComplete="off"
            />
            <button
            type="button"
            className="passwordButton"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
            >
            {showPassword ? "Hide" : "Show"}
            </button>
            </div>
            <p className="error">{formErrors.password}</p>
            <label>
              Phone Number
            </label>
            <input type = "text" name = "phoneNo" placeholder = "Phone No." value = {formValues.phoneNo}
            onChange={handleChange}/>
            <p className = "error">{formErrors.phoneNo}</p>
            <label>
              Country
            </label>
            <input type = "text" name = "country" placeholder = "Country" value = {formValues.country}
            onChange={handleChange}/>
            <p className = "error">{formErrors.country}</p>
            <label>
              City
            </label>
            <input type = "text" name = "city" placeholder = "City" value = {formValues.city}
            onChange={handleChange}/>
            <p className = "error">{formErrors.city}</p>
            <label>
              Aadhar Number
            </label>
            <input type = "text" name = "aadharNo" placeholder = "Aadhar No." value = {formValues.aadharNo}
            onChange={handleChange}/>
            <p className = "error">{formErrors.aadharNo}</p>
            <button className = "SubmitButton">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
