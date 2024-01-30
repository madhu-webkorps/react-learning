import React, { useState } from "react";
import './index.css'

 export const LoginForm = () => {

  const [inputFieldData, setinputFieldData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',

  });
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setinputFieldData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(() => {
      return {
        fname: inputFieldData.fname,
        lname: inputFieldData.lname,
        phone: inputFieldData.phone,
        email: inputFieldData.email,
      }
    }
    );
  }

  return (
    <div id='loginForm'>
      <h1>Hello {formData.fname} {formData.lname}</h1>
      <p> Your phone number is:  {formData.phone}</p>
      <p>your Email is: {formData.email} </p>
      <form onSubmit={handleSubmit}>
        <input
          name="fname"
          type="text"
          placeholder="Enter your first name"
          onChange={inputEvent}
        /> <br /> <br />
        <input
          name="lname"
          type="text"
          placeholder="Enter your last name"
          onChange={inputEvent}
        /> <br /> <br />
        <input
          name="phone"
          type="phone"
          placeholder="Enter your phone"
          onChange={inputEvent}
        /> <br /> <br />
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={inputEvent}
        /> <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}