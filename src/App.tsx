import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import All from './components/Categories-Pages/All';
import Bags from './components/Categories-Pages/Bags';
import Skincare from './components/Categories-Pages/Skincare';
import Aroma from './components/Categories-Pages/Aroma';
import Furniture from './components/Categories-Pages/Furniture';
import Paper from './components/Categories-Pages/Paper';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Home from './pages/Home';
import ProductPage, { CartContext } from './pages/ProductPage';
import { CartContextType, CartItems, items, Items } from './components/ProductData';

const App = () => {
  const [cartItem, setCartItem] = useState([] as CartItems[])

  const addToCart = (product: CartItems, condition?: boolean) => {
    if (!condition) {
      setCartItem(prev => {
        const isItemInCart = prev.find(item => item.id === product.id)

        if (isItemInCart) {
          return prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          );
        }

        return [...prev, { ...product, quantity: product.quantity }]
      })
    } else {
      setCartItem(prev => {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: product.quantity }
            : item
        )
      })
    }

  }

  useEffect(() => {
    const json = localStorage.getItem('cartItem')
    const savedCart = json ? JSON.parse(json) : null
    if (savedCart) {
      setCartItem(savedCart)
    }
    // localStorage.clear()
    // setCartItem([])
  }, [])

  useEffect(() => {
    const json = JSON.stringify(cartItem)
    localStorage.setItem('cartItem', json)
  }, [cartItem])

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='categories' element={<Categories />}>
          <Route path='all' element={<All />} />
          <Route path='bags' element={<Bags />} />
          <Route path='aroma-fragrances' element={<Aroma />} />
          <Route path='skincare' element={<Skincare />} />
          <Route path='paper-goods' element={<Paper />} />
          <Route path='furniture' element={<Furniture />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
