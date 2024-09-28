
// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { LangContext } from '../../context/LangContext';
// import { ModeContext } from '../../context/ModeContext';


// const Login = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const [lang, setLang] = useContext(LangContext);
//     const [mode, setMode] = useContext(ModeContext);


//     useEffect(() => {
//         const isLoggedIn = localStorage.getItem("login");
//         if (isLoggedIn) {
//             navigate('/account');
//         }
//     }, [navigate]);


//     const loginSubmit = (e) => {
//         e.preventDefault();
//         const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
//         const user = registeredUsers.find(
//             (u) => u.email === email && u.password === password
//         );

//         if (user) {
//             localStorage.setItem("login", "true");
//             localStorage.setItem("activeUser", JSON.stringify(user));
//             navigate('/account');
//             window.location.reload();
//         } else if (!email || !password) {
          
//             localStorage.setItem("login", "true");
//             navigate('/account');
//             window.location.reload();
//         } else if (!email || !password) {
//             toast.info('Please enter both email and password');
//         } else {
//             toast.error('Invalid email or password');
//         }
//     };




//     return (


       

//             <div className="d-flex align-items-center justify-content-center flex-column main-Login">

//                 <h1 className='my-5 text'>{lang ==="az"?"Daxil ol":"Login"}</h1>
//                 <div className="col-5">

//                     <form onSubmit={loginSubmit}>
//                         <div className="mb-4">
//                             <label className="form-label email-text">{lang ==="az"?"E-poçt ünvanı":"Email address"}</label>
//                             <input
//                                 onChange={e => setEmail(e.target.value)}
//                                 type="email"
//                                 className="form-control"
//                             />
//                         </div>
//                         <div className="my-5">
//                             <label className="form-label  pass-text">{lang ==="az"?"Parol":"Password"}</label>
//                             <div>
//                                 <input
//                                     onChange={e => setPassword(e.target.value)}
//                                     type={showPassword ? "text" : "password"}
//                                     className="form-control"

//                                 />
//                                 <span
//                                     className="input-group-text eye-box"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     style={{ height: '38px' }}
                                  
//                                 >
//                                     {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
//                                 </span>
//                             </div>
//                         </div>
//                         <button type="submit" className="login-button"> <span>{lang ==="az"?"Daxil ol":"Login"}</span> </button>
//                     </form>
//                     <div className="d-flex flex-column justfiy-content-center align-items-center">
//                         <Link to="/register" className='btn btn-outline-light mt-4'>{lang ==="az"?"Yeni hesab yaradın":"Create new account "}</Link>
//                     </div>
//                 </div>
//             </div>
    
//     );
// };

// export default Login;


import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LangContext } from '../../context/LangContext';
import { ModeContext } from '../../context/ModeContext';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [lang] = useContext(LangContext);
    const [mode] = useContext(ModeContext);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("login");
        if (isLoggedIn) {
            navigate('/account');
        }
    }, [navigate]);

    const loginSubmit = (e) => {
        e.preventDefault();
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const user = registeredUsers.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            localStorage.setItem("login", "true");
            localStorage.setItem("activeUser", JSON.stringify(user));
            navigate('/account');
            window.location.reload();
        } else if (!email || !password) {
            toast.info('Please enter both email and password');
        } else {
            toast.error('Invalid email or password');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center flex-column main-Login">
            <h1 className='my-5 text'>{lang === "az" ? "Daxil ol" : "Login"}</h1>
            <div className="col-5">
                <form onSubmit={loginSubmit}>
                    <div className="mb-4">
                        <label className="form-label email-text">{lang === "az" ? "E-poçt ünvanı" : "Email address"}</label>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            className="form-control"
                        />
                    </div>
                    <div className="my-5">
                        <label className="form-label pass-text">{lang === "az" ? "Parol" : "Password"}</label>
                        <div>
                            <input
                                onChange={e => setPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                            />
                            <span
                                className="input-group-text eye-box"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ height: '38px' }}
                            >
                                {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="login-button">
                        <span>{lang === "az" ? "Daxil ol" : "Login"}</span>
                    </button>
                </form>
                <div className="d-flex flex-column justfiy-content-center align-items-center">
                    <Link to="/register" className='btn btn-outline-light mt-4'>{lang === "az" ? "Yeni hesab yaradın" : "Create new account"}</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
