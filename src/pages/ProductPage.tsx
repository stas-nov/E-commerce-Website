import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { CartContextType, CartItems, Items, items } from "../components/ProductData";
import '../components/ProductPage.css'
import TrendingSlider from "../components/TrendingSlider";
import { formatCurrency } from "../utilities/formatCurrency";

export const CartContext = createContext<CartContextType>({
    cartItem: [],
    addToCart: (item: CartItems, condition?: boolean) => { },
    setCartItem: (item: CartItems[]) => { }
});

const ProductPage = () => {

    const { id } = useParams();
    const [quantity, setQuantity] = useState(1)

    const item: Items = items.filter((item) => item.id === parseInt(id ? id : ''))[0]
    const itemToCart: CartItems = {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        quantity: quantity,
    }

    const [image, setImage] = useState(item.img)
    const [notify, setNotify] = useState(false)

    const { addToCart } = useContext(CartContext)

    const changeImage = (e: any) => {
        setImage(e.target.src)
    }

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const increase = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1)
        }
    }

    const calcPrice = (quantity: number) => {
        return quantity * item.price
    }

    const showNotify = () => {
        setNotify(!notify)
    }

    return (
        <>
            <div
                onAnimationEnd={() => setNotify(false)}
                className={`notify ${notify ? 'slide-in' : ''}`}
            >
                <p>Item has been added to the cart &nbsp; ✅</p>
            </div>
            <div className="product-page-div">
                <div className="container">
                    <div className="product-div">
                        <h3 className="product-big-name">{item.name}</h3>
                        <div className="product-left">
                            <div className="big-img">
                                <img src={image} alt='product' />
                            </div>
                            <div className="small-imgs">
                                {item.img && (
                                    <img onMouseOver={changeImage} src={item.img} alt="product" />
                                )}
                                {item.otherImg && item.otherImg[0] && (
                                    <img onMouseOver={changeImage} src={item.otherImg[0]} alt="product" />
                                )}
                                {item.otherImg && item.otherImg[1] && (
                                    <img onMouseOver={changeImage} src={item.otherImg[1]} alt="product" />
                                )}
                            </div>
                        </div>
                        <div className="product-right">
                            <p className="product-desc">{item.description}</p>
                            <div className="product-stock">
                                {item.isAvailable ? <p className="product-stock-avail">Available</p> : <p className="product-stock-out">Out of stock</p>}
                            </div>
                            {item.isAvailable && (
                                <div className="product-quant">
                                    <p>Quantity</p>
                                    <div className="product-btns">
                                        <button onClick={decrease}>-</button>
                                        <p>{itemToCart.quantity}</p>
                                        <button onClick={increase}>+</button>
                                    </div>
                                    <p>{formatCurrency(calcPrice(itemToCart.quantity))}</p>
                                </div>
                            )}
                            {item.isAvailable && (
                                <div className="atc-buy">
                                    <button className="atc-btn" onClick={() => { addToCart(itemToCart); showNotify() }}>add to cart</button>
                                    <button className="buy-btn">buy now</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="specifications">
                        <div className="spec" style={{ whiteSpace: 'pre-line' }}>
                            <p className="spec-title">Material:</p>
                            <p className="spec-desc">{item.material}</p>
                        </div>
                        <div className="spec">
                            <p className="spec-title">Dimensions:</p>
                            <p className="spec-desc">{item.size}</p>
                        </div>
                        <div className="spec">
                            <p className="spec-title">Country of Origin:</p>
                            <p className="spec-desc">{item.country}</p>
                        </div>
                    </div>
                </div>
                <TrendingSlider />
                <Newsletter />
                <Footer />
            </div>
        </>
    );
};

export default ProductPage