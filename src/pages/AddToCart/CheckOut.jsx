import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import success1 from "../../media/img/project1.png";
import success2 from "../../media/img/project-2.png";
import success3 from "../../media/img/project-3.png";
import success4 from "../../media/img/project-4.png";
import success5 from "../../media/img/project-5.png";
import success6 from "../../media/img/about-04.png";
import { ModeContext } from '../../context/ModeContext';


const CheckOut = () => {
    const { setItems } = useCart();
    const navigate = useNavigate();
    const [mode, setMode] = useContext(ModeContext);


    const [paymentDetailsFilled, setPaymentDetailsFilled] = useState(false);

    const handleInputChange = () => {

        const cardNumber = document.getElementById('cardNumber').value;
        const nameOnCard = document.getElementById('nameOnCard').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvvCode = document.getElementById('cvvCode').value;

        if (cardNumber && nameOnCard && expiryDate && cvvCode) {
            setPaymentDetailsFilled(true);
        } else {
            setPaymentDetailsFilled(false);
        }
    };

    const completePayment = () => {
        if (!paymentDetailsFilled) {
            alert('Please fill in all payment details.');
            return;
        }

        setItems([]);

        navigate('/success_payment');
    };

    return (
        <section className='payment-section'>
            <div className="container-fluid">
                <div className=" d-flex align-items-center justify-content-center flex-column">
                    <h1 className="h3 mb-5 text-center my-5 payment">Payment</h1>
                    <div className="col-lg-9">
                        <div className="accordion" id="accordionPayment">

                            <div className="accordion-item mb-3">
                                <h2 className="h5 px-4 py-3 accordion-header d-flex justify-content-between align-items-center">
                                    <div className="form-check w-100 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseCC" aria-expanded="false">
                                        <input className="form-check-input" type="radio" name="payment" id="payment1" onChange={handleInputChange} />
                                        <label className="form-check-label pt-1" htmlFor="payment1">
                                            Credit Card
                                        </label>
                                    </div>
                                    <span>
                                        <svg width={34} height={25} xmlns="http://www.w3.org/2000/svg">

                                        </svg>
                                    </span>
                                </h2>
                                <div id="collapseCC" className="accordion-collapse collapse show" data-bs-parent="#accordionPayment">
                                    <div className="accordion-body">
                                        <div className="mb-3">
                                            <label className="form-label">Card Number</label>
                                            <input type="text" className="form-control" id="cardNumber" onChange={handleInputChange} />
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Name on card</label>
                                                    <input type="text" className="form-control" id="nameOnCard" onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="mb-3">
                                                    <label className="form-label">Expiry date</label>
                                                    <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="mb-3">
                                                    <label className="form-label">CVV Code</label>
                                                    <input type="password" className="form-control" id="cvvCode" onChange={handleInputChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mb-3 border">
                                <h2 className="h5 px-4 py-3 accordion-header d-flex justify-content-between align-items-center">
                                    <div className="form-check w-100 collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePP" aria-expanded="false">
                                        <input className="form-check-input" type="radio" name="payment" id="payment2" onChange={handleInputChange} />
                                        <label className="form-check-label pt-1" htmlFor="payment2">
                                            PayPal
                                        </label>
                                    </div>
                                    <span>
                                        <svg width={103} height={25} xmlns="http://www.w3.org/2000/svg">

                                        </svg>
                                    </span>
                                </h2>
                                <div id="collapsePP" className="accordion-collapse collapse" data-bs-parent="#accordionPayment">
                                    <div className="accordion-body">
                                        <div className="px-2 col-lg-6 mb-3">
                                            <label className="form-label">Email address</label>
                                            <input type="email" className="form-control" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className=' payment-button' onClick={completePayment} disabled={!paymentDetailsFilled}>
                        <span>   Complete the payment</span>
                    </button>

                    <div className="img">
                        <h1>Suggestion NFTs</h1>
                        <div className="pictures">
                          
                                <div className="one">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={success1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">King Of Pirates</h5>

                                      
                                        </div>
                                    </div>

                                </div>

                             


                                <div className="one">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={success3} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Nintendo Switch</h5>

                                         
                                        </div>
                                    </div>

                                </div>


                          



                                <div className="one">
                                    <div className="card" style={{ width: '18rem' }}>
                                    <img src={success5} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Pixel Art Addicted</h5>

                                          
                                        </div>
                                    </div>

                                </div>

                           
                         

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CheckOut;
