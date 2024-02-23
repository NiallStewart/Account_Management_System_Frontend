import React from 'react';
import './CustomerTransfer.css';
import { useNavigate } from 'react-router-dom';

function CustomerTransfer() {

    let navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    }

    return (
        <section className="container mt-5">
            <section className="row">
                <section className="col-md-8 offset-md-2">
                    <section className="card">
                        <section className="card-header text-white">
                            <h2 className="text-center mb-4">Transfer Page</h2>
                        </section>
                        <section className="card-body">
                            <form>
                                <section className="mb-3">
                                    <label htmlFor="accountNumber" className="form-label">Your Account Number</label>
                                    <input type="text" className="form-control" id="accountNumber" readOnly value="123456" />
                                </section>
                                <section className="mb-3">
                                    <label htmlFor="currentBalance" className="form-label">Your Current Balance</label>
                                    <input type="text" className="form-control" id="currentBalance" readOnly value="\$30000" />
                                </section>
                                <section className="mb-3">
                                    <label htmlFor="transferAmount" className="form-label">Transfer Amount</label>
                                    <input type="number" className="form-control" id="transferAmount" placeholder="\$10000" />
                                </section>
                                <section className="mb-3">
                                    <label htmlFor="transferDate" className="form-label">Transfer Date</label>
                                    <input type="date" className="form-control" id="transferDate" />
                                </section>
                                <section className="mb-3">
                                    <label htmlFor="recipientAccountNumber" className="form-label">Recipient's Account Number</label>
                                    <input type="text" className="form-control" id="recipientAccountNumber" placeholder="Enter recipient's account number" />
                                </section>
                                <section className="d-flex justify-content-between">
                                    <section className="d-flex align-items-center">
                                        <a onClick={navigateBack} className="btn btn-secondary">Back</a>
                                    </section>
                                    <section className="d-flex align-items-center">
                                        <a href="createCustomerSuccess.html" className="btn btn-primary">Transfer</a>
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
    );
}

export default CustomerTransfer;