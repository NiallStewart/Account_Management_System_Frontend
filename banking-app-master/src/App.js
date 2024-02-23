import "./App.css";
import BankManagerHome from "./BankManagerHome/BankManagerHome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ManagerTransactions from "./ManageTransactions/ManagerTransactions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateCustomer from "./CreateCustomer/CreateCustomer";
import CreateCustomerSuccess from "./CreateCustomerSuccess/CreateCustomerSuccess";
import ManageAccounts from "./ManageAccounts/ManageAccounts";
import UpdateCustomer from "./UpdateCustomer/UpdateCustomer";
import CustomerLogin from "./CustomerLogin/CustomerLogin";
import ManagerLogin from "./ManagerLogin/ManagerLogin";
import CustomerHome from "./CustomerHome/CustomerHome";
import CustomerDeposit from "./CustomerDeposit/CustomerDeposit";
import CustomerTransactions from "./CustomerTransactions/CustomerTransactions";
import CustomerTransfer from "./CustomerTransfer/CustomerTransfer";
import CustomerWithdraw from "./CustomerWithdraw/CustomerWithdraw";
import ContactPage from "./ContactPage/ContactPage";
import HelpPage from "./HelpPage/HelpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/manager-transactions" element={<ManagerTransactions />} />
        <Route path="/bank-manager-home" element={<BankManagerHome />} />
        <Route path="/create-customer" element={<CreateCustomer />} />
        <Route
          path="/create-customer-success"
          element={<CreateCustomerSuccess />}
        />
        <Route path="/manage-accounts" element={<ManageAccounts />} />
        <Route path="/update-customer" element={<UpdateCustomer />} />{" "}
        {/**Will need to update it based on selected customer's id */}
        <Route path="/" element={<CustomerLogin />} />
        <Route path="/manager-login" element={<ManagerLogin />} />
        <Route path="/customer-home" element={<CustomerHome />} />
        <Route path="/customer-deposit" element={<CustomerDeposit />} />
        <Route
          path="/customer-transactions"
          element={<CustomerTransactions />}
        />
        <Route path="/customer-transfer" element={<CustomerTransfer />} />
        <Route path="/customer-withdraw" element={<CustomerWithdraw />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/help-page" element={<HelpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
