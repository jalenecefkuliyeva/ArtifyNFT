import React, { useContext } from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './css/main.css'
import './scss/main.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFoundPage/NotFound'
import Footer from './layout/Footer'
import Products from './pages/NFTs/Products'
// import ProductDetails from './components/ProductsDetails'
import Basket from './pages/AddToCart/Basket'
import Wishlist from './pages/Wishlist'
import Login from './pages/loginPage/Login'
import ForgotPassword from './pages/loginPage/ForgotPassword'
import Register from './pages/loginPage/Register'
import Account from './pages/loginPage/Account'
import Contact from './pages/Contact/Contact'
import AddProduct from './pages/NFTs/dashboard/AddProduct'
import Dashboard from './pages/NFTs/dashboard/Dashboard'
import ProductOutlet from './pages/NFTs/ProductOutlet'
import ProductOutletDetails from './pages/NFTs/ProductOutletDetails'
import EditProduct from './pages/NFTs/dashboard/EditProduct'
import CheckOut from '../src/pages/AddToCart/CheckOut'
import SuccsessPayment from './pages/AddToCart/SuccsessPayment'
import { ModeContext, ModeProvider } from './context/ModeContext'
import About from './pages/About/About'
import AdminAccount from './pages/NFTs/dashboard/AdminAccount'
import SingleWishProduct from './components/SingleWishProduct'

const Main = () => {

    const [mode] = useContext(ModeContext);
    return (
        <div className={mode}>


            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/forgotpassword' element={<ForgotPassword />} />
                <Route path='/register' element={<Register />} />
                <Route path='/account' element={<Account />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/products' element={<Products />} />
                <Route path='/basket' element={<Basket />} />
                <Route path='/favorites' element={<Wishlist />} />
                <Route path="/dashboard/add" element={<AddProduct />}></Route>
                <Route path="/dashboard/edit/:slug" element={<EditProduct />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/outlet" element={<ProductOutlet />}></Route>
                <Route path="/outlet/:id" element={<ProductOutletDetails />}></Route>
                {/* <Route path='/products/:id' element={<ProductDetails />} /> */}
                <Route path="/checkout" element={<CheckOut />} />
                <Route path='/success_payment' element={<SuccsessPayment />}></Route>
                <Route path='/adminaccount' element={<AdminAccount />}></Route>
                <Route path='/singlewhislist' element={<SingleWishProduct />}></Route>
            </Routes>
            <Footer />
        </div>


    )
} 

const App = () => {

    return (
        <BrowserRouter>
            < Main />
        </BrowserRouter >

    )
}

export default App