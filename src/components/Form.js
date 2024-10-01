import React, { Component } from 'react';
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      dob: '',
      number: '',
      theme: 'dark',
      errors: {} // State to handle validation errors
    };

    this.toggleTheme = this.toggleTheme.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm = () => {
    //Destructuralised the state object
    const { name, email, password, confirmPassword } = this.state;
    let errors = {}; // errors is an empty object as of now
    let formIsValid = true; // check variable created

    // Name Validation: alphabetical characters only, min 8 chars, max 20 chars
    const nameRegex = /^[a-zA-Z]{8,20}$/;
    if (!nameRegex.test(name)) {
      formIsValid = false;
      errors["name"] = "Name must be between 8 to 20 alphabetic characters.";
    }

    // Email Validation: valid email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      formIsValid = false;
      errors["email"] = "Please enter a valid email address.";
    }

    // Password Validation: min 8 chars, max 20 chars, at least one uppercase, one lowercase, one number, one special character
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (!passwordRegex.test(password)) {
      formIsValid = false;
      errors["password"] = "Password must be 8-20 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    // Confirm Password Validation: must match password
    if (confirmPassword !== password) {
      formIsValid = false;
      errors["confirmPassword"] = "Passwords do not match.";
    }

    this.setState({ 
        errors 
    });
    return formIsValid;
  };

  handleNameChange = (event) => {
    this.setState({ 
        name: event.target.value 
    });
  };

  handleEmailChange = (event) => {
    this.setState({ 
        email: event.target.value 
    });
  };

  handleUsernameChange = (event) => {
    this.setState({ 
        username: event.target.value 
    });
  };

  handlePasswordChange = (event) => {
    this.setState({ 
        password: event.target.value 
    });
  };

  handleConfirmPasswordChange = (event) => {
    this.setState({ 
        confirmPassword: event.target.value 
    });
  };

  handleDOBChange = (event) => {
    this.setState({ 
        dob: event.target.value 
    });
  };

  handlePhoneNumberChange = (event) => {
    this.setState({ 
        number: event.target.value 
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form before submission
    if (this.validateForm()){
      alert("Form submitted successfully");
    } 
    else {
      alert("Form has errors");
    }
  };

  toggleTheme = () => {
    const container = document.querySelector("#container");
    container.classList.toggle("dark_theme");
    container.classList.toggle("light_theme");
  };

  render() {
    const { errors } = this.state;

    return (
      <div className={`form`}>
        <div id="container" className="light_theme">
          <h1><u>Registration Form</u></h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label className="label1">Name</label>
              <input
                className="input1"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
              <div className="errorMsg">{errors.name}</div>
            </div>

            <div>
              <label className="label2">Email</label>
              <input
                className="input2"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
              <div className="errorMsg">{errors.email}</div>
            </div>

            <div>
              <label className="label3">User Name</label>
              <input
                className="input3"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </div>

            <div>
              <label className="label4">Password</label>
              <input
                className="input4"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <div className="errorMsg">{errors.password}</div>
            </div>

            <div>
              <label className="label5">Confirm Password</label>
              <input
                className="input5"
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleConfirmPasswordChange}
              />
              <div className="errorMsg">{errors.confirmPassword}</div>
            </div>

            <div>
              <label className="label6">DOB</label>
              <input
                className="input6"
                type="date"
                name="dob"
                value={this.state.dob}
                onChange={this.handleDOBChange}
              />
            </div>

            <div>
              <label className="label7">Phone Number</label>
              <input
                className="input7"
                type="number"
                name="phoneNumber"
                value={this.state.number}
                onChange={this.handlePhoneNumberChange}
              />
            </div>

            <button type="submit">Submit</button>
            <button type="button" onClick={this.toggleTheme}>Toggle Theme</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
