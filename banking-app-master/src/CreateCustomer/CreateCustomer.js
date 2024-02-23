import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import "./CreateCustomer.css";

function CreateCustomer() {
  let navigate = useNavigate();

  const navigateToSuccess = () => {
    navigate("/create-customer-success");
  };
  const navigateToHome = () => {
    navigate("/bank-manager-home");
  };

  const [customer, setCustomer] = useState({
    panCardNumber: 1234567890,
    nationalInsuranceNumber: 9876543210,
    firstName: "",
    lastName: "",
    postalAddress: "",
    emailAddress: "",
    dateOfBirth: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log("Customer object on submit:", customer);

    try {
      const response = await axios.post(
        "http://localhost:8080/customers/addCustomer",
        customer
      );
      if (response.status === 201) {
        // Redirect user to success page or handle success scenario
        navigateToSuccess();
      } else {
        // Handle any other HTTP response
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error creating customer:", error);
      // Handle errors, such as by displaying a user notification
    }
  };

  return (
    <section className="container mt-5">
      <section className="row">
        <section className="col-md-8 offset-md-2">
          <section className="card">
            <section className="card-header text-white">
              <h2 className="text-center mb-4">Create Customer</h2>
            </section>
            <section className="card-body">
              <form onSubmit={handleOnSubmit}>
                <section className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                    value={customer.firstName}
                    onChange={handleInputChange}
                  />
                </section>
                <section className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                    value={customer.lastName}
                    onChange={handleInputChange}
                  />
                </section>
                <section className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    required
                    value={customer.dateOfBirth}
                    onChange={handleInputChange}
                  />
                </section>
                <section className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="postalAddress"
                    name="postalAddress"
                    placeholder="Enter your address"
                    required
                    value={customer.postalAddress}
                    onChange={handleInputChange}
                  />
                </section>
                <section className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="Enter your email"
                    required
                    value={customer.emailAddress}
                    onChange={handleInputChange}
                  />
                </section>
                <section className="d-flex justify-content-between">
                  <section className="d-flex align-items-center">
                    <a onClick={navigateToHome} className="btn btn-secondary">
                      Back
                    </a>
                  </section>
                  <section className="d-flex align-items-center">
                    <a className="btn btn-primary">
                      <button type="submit" className="btn btn-primary">
                        Create Customer
                      </button>
                    </a>
                  </section>
                </section>
              </form>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default CreateCustomer;
