import React from "react";
import "./HelpPage.css";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

function HelpPage() {
  let navigate = useNavigate();

  const navigateBack = () => {
    navigator(-1);
  };

  const navigateToContactPage = () => {
    navigate("/contact-page");
  };

  const navigateToHelpPage = () => {
    navigate("/help-page");
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
        <a className="nav-links" onClick={navigateToHelpPage}>
          Help
        </a>
        &nbsp;
      </nav>
      <section className="container mt-5" id="centre">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How do I report a lost or stolen debit card?
            </Accordion.Header>
            <Accordion.Body>
              Answer: If your debit card is lost or stolen, you can report it
              immediately through our online banking portal under the "Card
              Services" section or by calling our 24/7 customer service hotline.
              We will promptly deactivate your card to prevent any unauthorized
              use and issue you a new card. For any fraudulent transactions on
              your account, please file a claim with our fraud department to
              initiate an investigation.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What should I do if I forget my online banking password?
            </Accordion.Header>
            <Accordion.Body>
              Answer: If you forget your online banking password, click on the
              "Forgot Password" link on the login page. You will be prompted to
              enter your username or email address associated with your account.
              Follow the instructions to reset your password, which may include
              security questions, a verification code sent to your registered
              mobile number or email, or other identity verification methods.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>Is online banking secure?</Accordion.Header>
            <Accordion.Body>
              Answer: Yes, we prioritize the security of our online banking
              system. We use state-of-the-art encryption and security protocols
              to protect your information and transactions. Additionally, we
              recommend that you use a strong, unique password for your banking
              account and enable two-factor authentication for an extra layer of
              security. Always log out of your session when you are finished,
              especially when using public or shared computers.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </section>
  );
}

export default HelpPage;
