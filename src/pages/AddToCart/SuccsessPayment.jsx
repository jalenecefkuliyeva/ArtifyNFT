import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ModeContext } from '../../context/ModeContext';

const SuccsessPayment = () => {
    const [mode, setMode] = useContext(ModeContext);

    return (
        <section className='payment-success-box'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div id="card" className="animated fadeIn">
                            <div id="upper-side">

                          
                                <h3 id="status">
                                    Success
                                </h3>
                            </div>
                            <div id="lower-side">
                                <p id="message">
                                    Congratulations. You have successfully completed your payment.
                                </p>
                                <Link to='/' id='contBtn' >Continue</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SuccsessPayment