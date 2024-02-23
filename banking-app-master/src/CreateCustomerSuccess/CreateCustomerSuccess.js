import React from 'react';
import './CreateCustomerSuccess.css';
import { useNavigate } from 'react-router-dom';

function CreateCustomerSuccess() {
    let navigate = useNavigate();

    const navigateToHome = () => {
      navigate('/bank-manager-home');
    }

    const navigateBack = () => {
        navigate(-1);
      }

    return (
        <section className="container mt-5">
            <section className="row">
                <section className="col-md-8 offset-md-2">
                    <section className="card">
                        <section className="card-header text-white">
                            <section className="d-flex justify-content-between align-items-center">
                                <h2 className="mb-0">Success</h2>
                            </section>
                        </section>
                        <section className="card-body">
                            <h4 className="card-title">Customer Created</h4>
                            <ul className="list-group">
                                //insert our backend data here 
                                <li className="list-group-item">Customer ID: 1233455</li>
                                <li className="list-group-item">Account Number: 12334567890</li>
                                <li className="list-group-item">First name: Jessica</li>
                                <li className="list-group-item">Last name: Roulston</li>
                                <li className="list-group-item">Address: 123 Street Road, BT2 3LQ</li>
                                <li className="list-group-item">DOB: 123 11/01/99</li>
                                <li className="list-group-item">Email: jess@email.com</li>
                            </ul>
                        </section>
                        <section className="card-footer d-flex justify-content-between">
                            <a onClick={navigateBack} className="btn btn-secondary">Back</a>
                            <a onClick={navigateToHome} className="btn btn-primary">Confirm</a>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default CreateCustomerSuccess;