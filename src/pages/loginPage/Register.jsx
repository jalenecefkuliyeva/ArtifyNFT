
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LangContext } from '../../context/LangContext';
import { ModeContext } from '../../context/ModeContext';



const Register = () => {
    const [user, setUser] = useState({
        fullname: "",
        tel: "",
        email: "",
        password: "",
        againPassword: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const [showPassword, setShowPassword] = useState(false);
    const [lang, setLang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);

    const registerSubmit = (e) => {
        e.preventDefault();
        if (!user.fullname || !user.tel || !user.email || !user.password || !user.againPassword) {
            toast.info('Please fill in all fields');
        } else {
            if (user.password === user.againPassword) {
                const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
                const existingUser = registeredUsers.find((u) => u.email === user.email);
                if (existingUser) {
                    toast.info('Email already registered');
                } else {
                    registeredUsers.push(user);
                    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
                    toast.success('Registration successful');
                    setTimeout(() => {
                        window.location.assign("/login");
                    }, 2000);
                }
            } else {
                toast.warning('Passwords do not match');
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };




    return (

        <div className="d-flex align-items-center justify-content-center flex-column register-page">



            <h1 className='my-5 text'>{lang ==="az"?"Qeydiyyatdan keçin":"Register"}</h1>
            <div className="col-6">

                <form onSubmit={registerSubmit}>
                    <div className="mb-4">
                    <label className="form-label  name-text">{lang ==="az"?"Ad":"Fullname"}</label>
                        <input type="text" className="form-control" name='fullname' onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                    <label className="form-label phone-text">{lang ==="az"?"Telefon nömrəsi":"Phone number"}</label>
                        <input type="text" className="form-control" name='tel' onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                    <label className="form-label email-text">{lang ==="az"?"E-poçt ünvanı":"Email address"}</label>
                        <input type="email" className="form-control" name='email' onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                    <label className="form-label  pass-text">{lang ==="az"?"Parol":"Password"}</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-control"
                                name='password'
                                onChange={handleChange}
                            />
                            <span className="input-group-text" style={{ height: '38px' }} onClick={toggleShowPassword}>
                                {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                    <label className="form-label  pass-text">{lang ==="az"?"Yeniden parol":"Again Password"}</label>
                        <input type='password' className="form-control" name='againPassword' onChange={handleChange} />
                    </div>
                      <button type="submit" className='register-button' ><span>{lang ==="az"?"Qeydiyyatdan keçin":"Register"}</span></button>
                </form>
                 <div className=" d-flex flex-column justfiy-content-center align-items-center pass-acc">
            <Link to="/login"  className='btn btn-outline-light mt-4'>{lang ==="az"?"Artıq hesabınız var?":"Already have an account?"}</Link>
          </div>
            </div>
        </div>

    );
};

export default Register;

