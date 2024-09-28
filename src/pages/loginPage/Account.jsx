

import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LangContext } from '../../context/LangContext';
import { ModeContext } from '../../context/ModeContext';

const Account = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullname: '',
        phone: '',
        email: '',
    });

    const [lang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('login');
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            const activeUser = JSON.parse(localStorage.getItem('activeUser'));
            if (activeUser) {
                setUser(activeUser);
            }
        }
        window.scrollTo(0, 0);
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('activeUser');
        setUser({
            fullname: '',
            phone: '',
            email: '',
        });
        navigate('/login');
        window.location.reload();
    };

    const isAdmin = user && user.email === "Adminaccount@admin.com";

    return (
        <div className="d-flex align-items-center justify-content-center flex-column account-page">
            <p className='my-4'>
                {isAdmin ? (
                    <Link to='/dashboard' style={{ textDecoration: 'none', color: 'white' }}>
                        Dashboard
                    </Link>
                ) : (
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                        Home
                    </Link>
                )}

                <span>/</span>
                {lang === "az" ? "Hesab" : "Account"}
            </p>
            <h1 className='my-5 text'>{lang === "az" ? "Hesab" : "Account"}</h1>

            <div className="col-6">
                <form>
                    <div className="mb-4">
                        <label className="form-label name-text">{lang === "az" ? "Ad" : "Fullname"}</label>
                        <input
                            name="fullname"
                            type="text"
                            className="form-control"
                            value={user.fullname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label email-text">E-mail</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <button onClick={handleLogout} className='btn btn-outline-light mt-4'>
                        {lang === "az" ? "Çıxış" : "Log Out"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Account;
