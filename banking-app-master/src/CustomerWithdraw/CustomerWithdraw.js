import React from "react";
import "./CustomerWithdraw.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserAccount from "../UserAccount";
import axios from "axios";

function CustomerWithdraw() {
  let navigate = useNavigate();

  const navigateHome = () => {
    navigate("/customer-home");
  };

  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [isCustomAmountSelected, setIsCustomAmountSelected] = useState(false);

  const handleInputChange = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption.toLowerCase() === "other") {
      setIsCustomAmountSelected(true);
      setWithdrawalAmount(""); // Clear the withdrawal amount
    } else {
      setIsCustomAmountSelected(false);
      const newAmount = parseFloat(selectedOption);
      if (!isNaN(newAmount) && newAmount >= 0) {
        setWithdrawalAmount(newAmount);
      }
    }
  };

  const handleCustomInputChange = (e) => {
    // Update the withdrawalAmount directly based on custom input
    const newAmount = parseFloat(e.target.value);
    if (newAmount > 0) {
      setWithdrawalAmount(newAmount);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(withdrawalAmount);
    try {
      const response = await axios.put(
        `http://localhost:8080/accounts/withdraw?accountId=${UserAccount.getAccountNumber()}&amount=${withdrawalAmount}`
      );
      console.log("Withdrawal successful:", response.data);
      try {
        const userAccountResponse = await axios.get(
          `http://localhost:8080/accounts/getAccountById/${UserAccount.getAccountNumber()}`
        );
        const userAccount = userAccountResponse.data;
        UserAccount.setCurrentBalance(userAccount.currentBalance);
        alert("Withdrawal successful");
      } catch (error) {}
    } catch (error) {
      console.error("Error during withdrawal:", error);
      // Handle error scenario, e.g., show error message
    }
  };

  return (
    <section className="container mt-5">
      <section className="row">
        <section className="col-md-8 offset-md-2">
          <section className="card">
            <section className="card-header text-white">
              <h2 className="text-center mb-4">Withdrawal Page</h2>
            </section>
            <section className="card-body">
              <form onSubmit={handleOnSubmit}>
                <section className="form-group">
                  <label htmlFor="account">Select Account:</label>
                  <select className="form-control" id="account">
                    <option value="{UserAccount.getAccountNumber()}">
                      {UserAccount.getAccountNumber()}
                    </option>
                  </select>
                  <br />
                  <label htmlFor="amount">Select Amount to Withdraw:</label>
                  <select
                    id="withdrawalOption"
                    className="form-control"
                    onChange={handleInputChange}
                    value={isCustomAmountSelected ? "other" : withdrawalAmount} // Set the selected value
                  >
                    <option value="10">£10</option>
                    <option value="20">£20</option>
                    <option value="50">£50</option>
                    <option value="100">£100</option>
                    <option value="150">£150</option>
                    <option value="200">£200</option>
                    <option value="other">Other</option>
                  </select>
                </section>
                {isCustomAmountSelected && (
                  <div className="form-group">
                    <label htmlFor="customAmount">Enter Custom Amount:</label>
                    <input
                      type="number"
                      id="customAmount"
                      className="form-control"
                      value={withdrawalAmount}
                      onChange={handleCustomInputChange}
                    />
                  </div>
                )}
                <section className="d-flex justify-content-between">
                  <section className="d-flex align-items-center">
                    <a onClick={navigateHome} className="btn btn-secondary">
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
              <p id="current-balance" className="mt-3">
                Current Balance: £{UserAccount.getCurrentBalance()}
              </p>
              <p
                id="new-balance"
                onChange={handleInputChange}
                value={UserAccount.getCurrentBalance() - withdrawalAmount}
              >
                New Balance: £
                {UserAccount.getCurrentBalance() - withdrawalAmount}
              </p>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

function showCustomAmount() {
  var amountSelect = document.getElementById("amount");
  var customAmount = document.getElementById("custom-amount-input");
  customAmount.style.display =
    amountSelect.value === "other" ? "block" : "none";
}

function hideCustomAmount() {
  var customAmount = document.getElementById("custom-amount-input");
  customAmount.style.display = "none";
}

function calculateBalance() {
  var currentBalance = 1000;
  var amountSelect = document.getElementById("amount");
  var withdrawalAmount = parseInt(amountSelect.value);
  if (amountSelect.value === "other") {
    withdrawalAmount = parseInt(document.getElementById("custom-amount").value);
  }

  var newBalance = currentBalance - withdrawalAmount;
  document.getElementById("current-balance").innerHTML =
    "Current Balance: £" + currentBalance;
  document.getElementById("new-balance").innerHTML =
    "New Balance: £" + newBalance;
}

export default CustomerWithdraw;
