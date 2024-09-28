import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ModeContext } from '../../../context/ModeContext';
import { LangContext } from '../../../context/LangContext';




const AdminAccount = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const adminData = {
        fullname: "Admin",
        email: "Adminaccount@admin.com",
        password: "1234",
        phone: "+000-111-22-33"
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("login");
        if (isLoggedIn) {
            navigate('/adminaccount');
        }
    }, [navigate]);

    const loginSubmit = (e) => {
        e.preventDefault();

        if (adminData.email === email && adminData.password === password) {
            localStorage.setItem("login", "true");
            localStorage.setItem("activeUser", JSON.stringify(adminData));
            navigate('/account');
            window.location.reload();
        } else if (!email || !password) {
            toast.info("Please enter your email and password");
        } else {
            toast.error("Incorrect email or password");
        }
    };

    const [mode] = useContext(ModeContext);
    const [lang, setLang] = useContext(LangContext);



    return (
        <div className="adminPage">

            <div className="container d-flex align-items-center justify-content-center flex-column">
                <div className="col-6 my-5">
                    <h1 className="my-5 admin-text" >{lang ==="az"?"Admin Sehifesi":"Admin Account"}</h1>
                    <form onSubmit={loginSubmit}>
                        <div className="mb-3">
                            <label className="form-label one-two">Email</label>
                            <input
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                value={email}
                            />
                        </div>
                        <div className="my-5">
                            <label className="form-label one-two">{lang ==="az"?"Parol":"Password"}</label>
                            <div className="input-group">
                                <input
                                    onChange={e => setPassword(e.target.value)}
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    value={password}
                                />
                                <span
                                    className="input-group-text"
                                    style={{ cursor: 'pointer', height: '38px' }}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                </span>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark login-button"><span>{lang ==="az"?"Daxil ol":"Login"}</span></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminAccount;