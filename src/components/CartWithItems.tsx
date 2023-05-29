import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../pages/ProductPage"
import { formatCurrency } from "../utilities/formatCurrency"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"


const CartWithItems = () => {
    const { cartItem, setCartItem } = useContext(CartContext)

    const [totalPrice, setTotalPrice] = useState(0)
    const [quantityList, setQuantityList] = useState<Record<number, number>>({})

    useEffect(() => {
        const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(newTotalPrice);
    }, [cartItem]);

    useEffect(() => {
        const newQuantityList = {...quantityList}
        cartItem.forEach(item => {
            if (item.id in newQuantityList) {
                newQuantityList[item.id] += 1
            } else {
                newQuantityList[item.id] = 1
            }
        })
        setQuantityList(newQuantityList)
    }, [cartItem])

    return (
        <>
            <div className="full-cart-div">
                <div className="full-cart">
                    {cartItem.map((item) =>
                        <CartItem key={item.id} item={item}  />
                    )}
                </div>
            </div>
            <div className="subtotal-div">
                <div className="sub-right">
                    <p>Subtotal</p>
                    <p className="total-price">{formatCurrency(totalPrice)}</p>
                </div>
                <div className="sub-left">
                    <Link to={""}>Go to Checkout</Link>
                </div>
            </div>
        </>
    )
}

export default CartWithItems