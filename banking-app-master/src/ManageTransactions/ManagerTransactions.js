import React from "react";
import "./ManagerTransactions.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ManagerTransactions() {
  let navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const navigateHome = () => {
    navigate("/bank-manager-home");
  };

  const [transactions, setTransactions] = useState([]);

  // Fetch transactions on component mount
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/transactions/getAllTransactions`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: \${response.status}`);
        }
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Fetching transactions failed:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <section className="container mt-5">
      <section className="row">
        <section className="col-md-11 offset-md-1">
          <section className="card">
            <section className="card-header text-white">
              <h2 className="text-center mb-4">Transactions</h2>
            </section>
            <section className="card-body">
              <br />
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Transaction Id</th>
                    <th scope="col">Reference Number</th>
                    <th scope="col">Customer Id</th>
                    <th scope="col">Account Number</th>
                    <th scope="col">Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Current Balance</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transactions) => (
                    <tr key={transactions.id}>
                      <dtd></dtd>
                      <td>{transactions.id}</td>
                      <td>{transactions.referenceNo}</td>
                      <td>{transactions.customerId}</td>
                      <td>{transactions.accountNumber}</td>
                      <td>{transactions.type}</td>
                      <td>{transactions.amount}</td>
                      <td>{transactions.currentBalance}</td>
                      <td>{transactions.date}</td>
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
                <section className="d-flex align-items-center">
                  <a onClick={navigateHome} className="btn btn-success mt-3">
                    Edit
                  </a>
                  &nbsp;
                  <a onClick={navigateHome} className="btn btn-danger mt-3">
                    Delete
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

export default ManagerTransactions;
