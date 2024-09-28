
import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import mainLogo from "../media/img/main-logo.png";
import { MdShoppingCart } from "react-icons/md";
import '../scss/main.scss';
import '../css/main.css';
import { useCart } from 'react-use-cart';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import slugify from 'slugify';
import { ModeContext } from '../context/ModeContext';
import { LangContext } from '../context/LangContext';

const Header = () => {
    const { totalItems } = useCart()
    const [keyword, setKeyword] = useState("");
    const location = useLocation()
    const auth = JSON.parse(localStorage.getItem("users"));
    const superuser = JSON.parse(localStorage.getItem("superuser"));
    const [mode, setMode] = useContext(ModeContext);
    const [lang, setLang] = useContext(LangContext);

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const savedMode = localStorage.getItem("mode");
        if (savedMode) {
            setMode(savedMode);
        }
    }, []);
    const data = useSelector(p => p);
    console.log(data);
    useEffect(() => {
        window.scrollTo({
            behavior: "smooth", top: 0
        })
    }, [location]);

    const [activeUser, setActiveUser] = useState(null);


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("activeUser"));
        setActiveUser(user);
        window.scrollTo(0, 0);
    }, []);


    return (


        <div className="container-fluid">
            <div className="row">
                <div className="header">
                    <div className="col-lg-12">
                        <div className="header-body">
                            <div className="header-logo">
                                <a href="/">
                                    <img src={mainLogo} alt="cyfonii" /> </a>
                            </div>
                            <div className="header-right">
                                <nav className="main-nav">
                                    <ul>
                                        <li>
                                            <a href="/">{lang === "az" ? "Ana Səhifə" : "Home"}</a>
                                        </li>


                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/products">{lang === "az" ? "Məhsullar" : "NFTs"}</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about">{lang === "az" ? "Haqqımızda" : "About"}</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">{lang === "az" ? "Əlaqə" : "Contact"}</NavLink>
                                        </li>

                                    </ul>
                                </nav>
                            </div>

                            <div className=" header-join" >
                                <div>

                                    <button className='btn btn-light me-3' onClick={() => {
                                        lang === "az" ? setLang('en') : setLang('az')
                                        lang === "az" ? localStorage.setItem('lang', 'en') : localStorage.setItem('lang', 'az')
                                    }}>{lang === "az" ? "EN" : "AZ"}</button>

                                    <button className=' btn btn-light' onClick={() => {
                                        mode === 'dark' ? setMode('light') : setMode('dark')
                                        mode === 'dark' ? localStorage.setItem("mode", 'light') : localStorage.setItem('mode', 'dark')
                                    }

                                    }>{mode === "dark" ? "🌛" : "🌞"}</button>



                                    <button type="button" className="btn btn-light me-5 search-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </button>

                                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5 enter-product " >{lang === "az" ? "Mehsullar" : "Products"}</h1>
                                                    <button type="button" className="btn-close x-button" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div className="modal-body">
                                                    <div class="input-group" className='search-bar'>
                                                        <div>
                                                            <input onChange={e => setKeyword(e.target.value)} type="text" className="form-control add-product" />
                                                            <button className="btn btn-dark my-3 search-buttonn" type="button">  <i class="fa-solid fa-magnifying-glass"></i> </button>
                                                        </div>
                                                    </div>

                                                    <ul className="list-group">
    {!keyword ? "" : data.filter(p => p.title.toLowerCase().includes(keyword.toLowerCase())).map(item => (
        <Link to={`/products/${item.id}`} className="list-group-item d-flex justify-content-start" key={item.id}>
            <div data-bs-dismiss="modal">
                <img height={70} style={{ objectFit: "contain" }} width={70} src={item.photo} alt="img" />
                <span className='ms-3'>{item.title}</span>
            </div>
        </Link>
    ))}
</ul>



                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to="/favorites " className='heart-icon'><i class="fa-regular fa-heart "  ></i></Link>



                                    <Link to="/basket" className="position-relative basket ">
                                        <i className="fa-solid fa-cart-shopping basket-logo"></i>
                                        <span className="badge bg-danger rounded-pill custom-badge  ">
                                            {totalItems}
                                        </span>
                                    </Link>



                                    {localStorage.getItem("login") === "true" ? (
                                        <Link to="/account" className='  ms-4 text-light'>
                                            {activeUser && activeUser.fullname === "Admin" ? "Admin" : activeUser?.fullname}
                                        </Link>
                                    ) : (
                                        <Link to="/login" className='header-button ms-3'> <span>{lang === "az" ? "Daxil ol" : "Login"}</span> </Link>
                                    )}
                                    {localStorage.getItem('superuser') ? <Link className='btn btn-light ms-3' to="/dashboard">Dashboard</Link> : ""}
                                </div>
                            </div>
                            <div className="burger-menu" onClick={toggleMenu}>
                                <i className="fa-solid fa-bars"></i>
                            </div>
                            <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                                <div className="close-btn" onClick={toggleMenu}>
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                                <ul>


                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/products">NFTs</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li> <button className=' btn btn-light' onClick={() => {
                                        mode === 'light' ? setMode('dark') : setMode('light')
                                        mode === 'light' ? localStorage.setItem("mode", 'dark') : localStorage.setItem('mode', 'light')
                                    }

                                    }>{mode === "light" ? "🌛" : "🌞"}</button></li>
                                    <li>  <button className='btn btn-light me-3' onClick={() => {
                                        lang === "az" ? setLang('en') : setLang('az')
                                        lang === "az" ? localStorage.setItem('lang', 'en') : localStorage.setItem('lang', 'az')
                                    }}>{lang === "az" ? "EN" : "AZ"}</button></li>

                                    <li><Link to="/favorites " className='heart-icon'><i class="fa-regular fa-heart "  ></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )


}

export default Header
