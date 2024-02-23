import React from "react";
import "./UpdateCustomer.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import UserProfile from "../UserProfile";
import UserAccount from "../UserAccount";

function UpdateCustomer() {
  let navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const navigateToSuccessMsg = () => {
    navigate("/create-customer-success");
  };

  const navigateToHome = () => {
    navigate("/bank-manager-home");
  };

  const [customers, setCustomers] = useState([]);

  // Fetch customers on component mount
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/customers/getAllCustomers"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: \${response.status}`);
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Fetching customers failed:", error);
      }
    };

    fetchCustomers();
  }, []);

  const handleDelete = async () => {
    document.querySelectorAll(".delete-button").forEach((button) => {
      button.addEventListener("click", async function () {
        const row = this.closest("tr");
        const id = row.querySelector(".customer-id").textContent;
        const firstName = row.querySelector(".customer-firstName").textContent;
        const lastName = row.querySelector(".customer-lastName").textContent;
        row.remove(); // Remove the row from the table
        console.log("Row deleted:", row);
        try {
          // Delete from customer database
          await axios.delete(
            `http://localhost:8080/customers/deleteCustomerById/${id}`
          );
          // Delete from user database
          await axios.delete(`http://localhost:8080/users/delete/${id}`);
          alert(`Customer ${firstName} ${lastName} successfully deleted`);
        } catch (error) {
          console.error("Error creating customer:", error);
        }
      });
    });
  };

  return (
    <section className="container mt-5">
      <section className="row">
        <section className="col-md-11 offset-md-1">
          <section className="card" style={{ opacity: "90%" }}>
            <section className="card-header text-white">
              <h2 className="text-center mb-4">Customers</h2>
            </section>
            <section className="card-body">
              <br />
              <table className="table table-hover" id="customer-table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Customer ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Actions</th>{" "}
                    {/* New column for delete buttons */}
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id}>
                      <td></td>
                      <td className="customer-id">{customer.id}</td>
                      <td className="customer-firstName">
                        {customer.firstName}
                      </td>
                      <td className="customer-lastName">{customer.lastName}</td>
                      <td className="customer-address">
                        {customer.postalAddress}
                      </td>
                      <td className="customer-email">
                        {customer.emailAddress}
                      </td>
                      <td className="customer-dob">{customer.dateOfBirth}</td>
                      <td>
                        <button
                          className="btn btn-danger delete-button"
                          onClick={handleDelete}
                        >
                          Delete
                        </button>
                        &nbsp;
                        <button className="btn btn-primary edit-button">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <section className="card-footer text-left">
              <section className="d-flex justify-content-between">
                <section className="d-flex align-items-center">
                  <a onClick={navigateBack} className="btn btn-secondary mt-3">
                    Back
                  </a>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default UpdateCustomer;
