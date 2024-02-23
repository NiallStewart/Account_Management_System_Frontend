import React from "react";
import "./ManagerLogin.css";
import { useNavigate } from "react-router-dom";

function ManagerLogin() {
  let navigate = useNavigate();

  const navigateToCustomerLogin = () => {
    navigate("/");
  };
  const navigateToManagerHome = () => {
    navigate("/bank-manager-home");
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
                <h2 className="text-center mb-4">Organisation Login</h2>
              </section>
              <section className="card-body">
                <form>
                  <section className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Employee Id
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Employee Id"
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
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </section>
                  <section className="d-flex justify-content-between">
                    <section className="d-flex align-items-center">
                      <a
                        onClick={navigateToCustomerLogin}
                        className="btn btn-link mt-3"
                      >
                        Sign in as customer
                      </a>
                    </section>
                    <section className="d-flex align-items-center">
                      <a
                        onClick={navigateToManagerHome}
                        className="btn btn-primary mt-3"
                      >
                        Submit
                      </a>
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

export default ManagerLogin;
