import React, { useReducer } from "react";
import "./CustomerHome.css";
import { useNavigate } from "react-router-dom";
import UserProfile from "../UserProfile";
import UserAccount from "../UserAccount";

function CustomerHome() {
  let navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/");
  };

  const navigateToDeposits = () => {
    navigate("/customer-deposit");
  };

  const navigateToTransactions = () => {
    navigate("/customer-transactions");
  };

  const navigateToTransfer = () => {
    navigate("/customer-transfer");
  };

  const navigateToWithdraw = () => {
    navigate("/customer-withdraw");
  };

  const navigateToContactPage = () => {
    navigate("/contact-page");
  };

  const navigateToHelpPage = () => {
    navigate("/help-page");
  };

  console.log(UserProfile.getId());
  console.log(UserProfile.getFirstName());
  console.log(UserProfile.getLastName());

  console.log(UserAccount.getAccountNumber());
  console.log(UserAccount.getCurrentBalance());

  const fullName = `${UserProfile.getFirstName()} ${UserProfile.getLastName()}`;
  const accountNumber = `${UserAccount.getAccountNumber()}`;
  const currentBalance = `${UserAccount.getCurrentBalance()}`;

  return (
    <div>
      <nav className="nav-bar">
        <a className="nav-links" href="#">
          Home
        </a>
        &nbsp;|{" "}
        {/**Nav should be its own component if we reuse it on all pgs */}
        <a className="nav-links" onClick={navigateToContactPage}>
          Contact Us
        </a>
        &nbsp;|
        <a className="nav-links" onClick={navigateToHelpPage}>
          Help
        </a>
        &nbsp;
      </nav>
      <section className="container mt-5" id="centre">
        <section className="row">
          <section className="col-md-8 offset-md-2">
            <section className="card">
              <section className="card-header text-white">
                <section className="d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">Welcome to Your Bank</h2>
                  <a onClick={navigateToLogin} className="btn btn-secondary">
                    Logout
                  </a>
                </section>
              </section>
              <section className="card-body">
                <h4 className="card-title">Account Summary</h4>
                <p className="card-text">Hello {fullName},</p>
                <ul className="list-group">
                  <li className="list-group-item">
                    Account Number: {accountNumber}
                  </li>
                  <li className="list-group-item">Balance: {currentBalance}</li>
                </ul>
              </section>
              <section className="card-footer d-flex justify-content-between">
                <a
                  onClick={navigateToTransactions}
                  className="btn btn-primary flex-fill mr-2"
                >
                  View Transactions
                </a>
                <a
                  onClick={navigateToTransfer}
                  className="btn btn-warning flex-fill mr-2"
                >
                  Transfer
                </a>
                <a
                  onClick={navigateToDeposits}
                  className="btn btn-danger flex-fill mr-2"
                >
                  Deposit
                </a>
                <a
                  onClick={navigateToWithdraw}
                  className="btn btn-info flex-fill"
                >
                  Withdraw
                </a>
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

export default CustomerHome;
