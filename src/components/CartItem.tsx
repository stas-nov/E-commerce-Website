import { useContext, useEffect, useState } from "react"
import { CartContext } from "../pages/ProductPage"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItems, Items } from "./ProductData"

const CartItem = ({ key, item }: { key: number, item: CartItems }) => {
    const [quantity, setQuantity] = useState(item.quantity)
    const { cartItem, setCartItem } = useContext(CartContext)
    const { addToCart } = useContext(CartContext)
    const itemToCart: CartItems = {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        quantity: quantity,
    }

    const increase = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1)
            addToCart({ ...item, quantity: itemToCart.quantity + 1 }, true)
        }
    }

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            addToCart({ ...item, quantity: itemToCart.quantity - 1 }, true)
        }
    }

    const calcPrice = (quantity: number, item: number) => {
        return quantity * item
    }

    const [deleteItem, setDeleteItem] = useState(cartItem)

    const removeFromCart = (id: number) => {
        const updateCart = cartItem.filter((item) => item.id !== id)
        setDeleteItem(updateCart)
        const json = JSON.stringify(updateCart[0])
        localStorage.removeItem(json)
    }

    useEffect(() => {
        setCartItem(deleteItem);
    }, [deleteItem, setCartItem]);

    // useEffect(({item}) => {
    //     setCartItem({...item, quantity: quantity})
    // }, [setQuantity])

    return (
        <>
            <div className="cart-item" key={key}>
                <div className="cart-img">
                    <img src={item.img} alt='product' />
                </div>
                <div className="cart-middle">
                    <p className="cart-name">{item.name}</p>
                    <div className="cart-btns">
                        <button onClick={decrease}>-</button>
                        <p className="quantity">{itemToCart.quantity}</p>
                        <button onClick={increase}>+</button>
                    </div>
                </div>
                <div className="cart-right">
                    <p className="cart-price">{formatCurrency(calcPrice(itemToCart.quantity, item.price))}</p>
                    <i onClick={() => removeFromCart(item.id)} className='fa-sharp fa-solid fa-xmark'></i>
                </div>
            </div>
        </>
    )
}

export default CartItem