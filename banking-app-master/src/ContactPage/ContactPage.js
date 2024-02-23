import React from "react";
import "./ContactPage.css";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  let navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const navigateToContactPage = () => {
    navigate("/contact-page");
  };

  return (
    <section>
      <nav className="nav-bar">
        <a className="nav-links" onClick={navigateBack}>
          Home
        </a>
        &nbsp;|{" "}
        {/**Nav should be its own component if we reuse it on all pgs */}
        <a className="nav-links" onClick={navigateToContactPage}>
          Contact Us
        </a>
        &nbsp;|
        <a className="nav-links" href="#">
          Help
        </a>
        &nbsp;
      </nav>
      <section className="container mt-5">
        <section className="row">
          <section className="col-md-8 offset-md-2">
            <section className="card">
              <section className="card-header text-white">
                <h2 className="text-center mb-4">Contact Us</h2>
              </section>
              <section className="card-body">
                <form>
                  <section className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="accountNumber"
                      readOnly
                      placeholder="Enter your Name"
                    />
                  </section>
                  <section className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter a valid email address"
                    />
                  </section>
                  <section className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="message-box"
                      placeholder="Message"
                    />
                  </section>
                  <section className="d-flex justify-content-between">
                    <section className="d-flex align-items-center">
                      <a onClick={navigateBack} className="btn btn-secondary">
                        Back
                      </a>
                    </section>
                    <section className="d-flex align-items-center">
                      <a
                        href="createCustomerSuccess.html"
                        className="btn btn-primary"
                      >
                        Submit
                      </a>
                      {/**Not sure where the above should take us? New component stating transfer successful?
                       * If so, we didn't create that page yet in our HTML CSS project
                       */}
                    </section>
                  </section>
                </form>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ContactPage;
