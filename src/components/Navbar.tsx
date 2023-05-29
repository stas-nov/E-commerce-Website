import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from '../img/logo192.png'
import { CartContext } from "../pages/ProductPage";
import CartWithItems from "./CartWithItems";
import CategoriesItem from "./CategoriesItem";
import EmptyCart from "./EmptyCart";
import './Navbar.css'

const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    const [cart, setCart] = useState(false)

    const { cartItem } = useContext(CartContext)

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    const openCart = () => {
        setCart(!cart)
    }

    window.addEventListener('scroll', handleScroll)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <>
            <div className={`page-overlay ${cart ? 'open-flex' : 'closed-flex'}`} onClick={openCart}>
            </div>

            <div className={`cart-div ${cart ? 'open-cart' : 'closed-cart'}`}>
                <div className="cart-title-btn">
                    <h2 className="cart-full-h2">
                        Your Shopping Cart ({cartItem.length})
                    </h2>
                    <i className="fa-sharp fa-solid fa-xmark" onClick={openCart}></i>
                </div>
                <div className="cart-body">
                    {cartItem.length < 1 ? (
                        <EmptyCart openCart={openCart} />
                    ) : (
                        <CartWithItems />
                    )}
                </div>
            </div>

            <nav className="navbar">
                <div className="container">
                    <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
                        <Link to='/'>
                            <img onClick={scrollToTop} src={LogoImg} alt='logo' className="logo-img" />
                        </Link>
                        <div className="nav-links">
                            <Link to={'/categories/all'} onClick={() => window.scrollTo(0, 0)}>
                                categories
                            </Link>
                            <i
                                data-array-length={cartItem.length}
                                onClick={openCart}
                                className={`fa-solid fa-cart-shopping ${cartItem.length < 1 ? 'cart-icon' : 'cart-icon with-items'
                                    }`}
                            ></i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;