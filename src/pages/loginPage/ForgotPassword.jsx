import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (


    <div className=' d-flex align-items-center justify-content-center flex-column forgotPass-page'>
      <h1 className='my-5 text'>Forgot Password</h1>

      <div className="col-lg-6">
        <form>

          <div className="mb-4">
            <label className="form-label email-text">Email address</label>
            <input  type="email" className="form-control" />
          </div>

          <button type="submit"  className='send-button'><span>Send</span></button>

        </form>
      </div>


      <div className="pass-acc">
        <Link to="/register"  className='btn btn-outline-light mt-4'>Create new account</Link>
      </div>


    </div>
  )
}

export default ForgotPassword