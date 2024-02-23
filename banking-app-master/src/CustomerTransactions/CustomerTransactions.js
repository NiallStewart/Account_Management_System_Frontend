import React from "react";
import "./CustomerTransactions.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UserAccount from "../UserAccount";

function CustomerTransactions() {
  let navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const [transactions, setTransactions] = useState([]);

  // Fetch transactions on component mount
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/transactions/getTransactionByCustomerId/${UserAccount.getCustomerId()}`
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
        <section className="col-md-8 offset-md-2">
          <section className="card">
            <section className="card-header text-white">
              <h2 className="text-center mb-4">Transaction History</h2>
            </section>
            <section className="card-body">
              <br />
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Transaction ID</th>
                    <th scope="col">Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transactions) => (
                    <tr key={transactions.id}>
                      <td>{transactions.id}</td>
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
              <a onClick={navigateBack} className="btn btn-secondary">
                Back
              </a>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default CustomerTransactions;
