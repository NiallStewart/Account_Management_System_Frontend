import React from "react";
import "./CustomerLogin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import UserProfile from "../UserProfile";
import UserAccount from "../UserAccount";

function CustomerLogin() {
  let navigate = useNavigate();

  const navigateToManagerLogin = () => {
    navigate("/manager-login");
  };

  const navigateToCustomerHome = () => {
    navigate("/customer-home");
  };

  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Fixed destructuring assignment
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value, // Fixed to use 'value'
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("User object on submit:", user);
    const userId = user.id;
    const userPassword = user.password;
    console.log(userId);
    console.log(userPassword);
    console.log(`http://localhost:8080/users/` + userId);
    // Here you would typically send 'user' to your backend API for authentication
    try {
      const response = await axios.get(`http://localhost:8080/users/` + userId);
      const user = response.data;

      if (user) {
        // Compare user.password with the entered password
        // NOTE: Password checks should ideally be performed on the server side
        if (user.password == userPassword) {
          UserProfile.setId(userId);
          const userDetailsResponse = await axios.get(
            `http://localhost:8080/customers/getCustomerById/` + userId
          );
          const userDetails = userDetailsResponse.data;
          UserProfile.setFirstName(userDetails.firstName);
          UserProfile.setLastName(userDetails.lastName);
          UserProfile.setPostalAddress(userDetails.postalAddress);
          UserProfile.setEmailAddress(userDetails.emailAddress);
          UserProfile.setDateOfBirth(userDetails.dateOfBirth);
          const userAccountResponse = await axios.get(
            `http://localhost:8080/accounts/getAccountByCustomerId/` + userId
          );
          const userAccount = userAccountResponse.data;
          UserAccount.setCustomerId(userAccount.customerId);
          UserAccount.setAccountNumber(userAccount.accountNumber);
          UserAccount.setCurrentBalance(userAccount.currentBalance);
          navigate("/customer-home");
        } else {
          // Handle incorrect password scenario
          alert("Invalid password");
        }
      } else {
        // Handle user not found scenario
        alert("Please enter a valid email");
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error scenario
    }
  };

  return (
    <div>
      <nav className="nav-bar">
        <a className="nav-links" href="#">
          Home
        </a>
        &nbsp;|
        <a className="nav-links" href="#">
          Contact Us
        </a>
        &nbsp;|
        <a className="nav-links" href="#">
          Help
        </a>
        &nbsp;
      </nav>
      <section className="container mt-5" id="centre">
        <section className="row">
          <section className="col-md-8 offset-md-2">
            <section className="card">
              <section className="card-header text-white">
                <h2 className="text-center mb-4">Customer Login</h2>
              </section>
              <section className="card-body">
                <form onSubmit={handleOnSubmit}>
                  <section className="mb-3">
                    <label htmlFor="id" className="form-label">
                      Customer Id
                    </label>
                    <input
                      type="text" // Changed type from 'id' to 'text'
                      className="form-control"
                      id="id"
                      name="id" // Added 'name' attribute
                      value={user.id} // Added 'value' binding
                      onChange={handleInputChange} // Added 'onChange' handler
                      placeholder="Enter Customer Id"
                      required
                    />
                  </section>
                  <section className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password" // Changed 'id'
                      name="password" // Added 'name' attribute
                      value={user.password} // Added 'value' binding
                      onChange={handleInputChange} // Added 'onChange' handler
                      placeholder="Password"
                      required
                    />
                  </section>
                  <section className="d-flex justify-content-between">
                    <section className="d-flex align-items-center">
                      <a
                        onClick={navigateToManagerLogin}
                        className="btn btn-link mt-3"
                      >
                        Sign in as Organisation
                      </a>
                    </section>
                    <section className="d-flex align-items-center">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </section>
                  </section>
                </form>
              </section>
            </section>
          </section>
        </section>
      </section>
      <footer className="text-center mt-5">
        <p></p>
        <p>Contact us at: 0722923043. Find us at: Belfast 123 Street.</p>
        <p className="m-3">&copy; 2023 Your Bank. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CustomerLogin;
