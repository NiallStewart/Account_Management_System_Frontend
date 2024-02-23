import React, { useState } from "react";
import "./CustomerDeposit.css";
import { useNavigate } from "react-router-dom";
import UserAccount from "../UserAccount";
import axios from "axios";

function CustomerDeposit() {
  let navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/customer-home");
  };

  const navigateBack = () => {
    navigate(-1);
  };

  const [depositAmount, setDepositAmount] = useState(0);
  const [balance, setBalance] = useState(UserAccount.getCurrentBalance());

  const handleInputChange = (e) => {
    const newAmount = e.target.value; // Get the new amount from the event
    if (!isNaN(newAmount) && newAmount >= 0) {
      setDepositAmount(parseFloat(newAmount)); // Update the depositAmount
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/accounts/deposit?accountId=${UserAccount.getAccountNumber()}&amount=${depositAmount}`
      );
      console.log("Deposit successful:", response.data);
      try {
        const userAccountResponse = await axios.get(
          `http://localhost:8080/accounts/getAccountById/${UserAccount.getAccountNumber()}`
        );
        const userAccount = userAccountResponse.data;
        UserAccount.setCurrentBalance(userAccount.currentBalance);
        alert("Deposit successful");
      } catch (error) {}
    } catch (error) {
      console.error("Error during deposit:", error);
      // Handle error scenario, e.g., show error message
    }
  };

  return (
    <section className="container mt-5">
      <section className="row">
        <section className="col-md-8 offset-md-2">
          <section className="card">
            <section className="card-header text-white">
              <h2 className="text-center mb-4">Deposit Page</h2>
            </section>
            <section className="card-body">
              <form onSubmit={handleOnSubmit}>
                <section className="mb-3">
                  <label htmlFor="accountNumber" className="form-label">
                    Account Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accountNumber"
                    readOnly
                    value={UserAccount.getAccountNumber()}
                  />
                </section>
                <section className="mb-3">
                  <label htmlFor="currentBalance" className="form-label">
                    Current Balance
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="currentBalance"
                    readOnly
                    value={UserAccount.getCurrentBalance()}
                  />
                </section>
                <section className="mb-3">
                  <label htmlFor="withdrawalAmount" className="form-label">
                    Deposit Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="depositAmount"
                    placeholder="\$10000"
                    value={depositAmount}
                    onChange={handleInputChange}
                  />
                </section>
                <section className="mb-3">
                  <label htmlFor="newBalance" className="form-label">
                    New Balance
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="newBalance"
                    readOnly
                    onChange={handleInputChange}
                    value={UserAccount.getCurrentBalance() + depositAmount}
                  />
                </section>
                <section className="d-flex justify-content-between">
                  <section className="d-flex align-items-center">
                    <a onClick={navigateBack} className="btn btn-secondary">
                      Back
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
  );
}

export default CustomerDeposit;
