import { Link } from "react-router-dom"
import { items } from "../ProductData"

const SkincareItem = () => {
    const filteredItems = items.filter((item) => item.category === 'skincare')

    return (
        <>
            <div className="proud-container">
                <div className="container">
                    <div className="products-grid">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="product normal">
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to={`/categories/product/${item.id}`}
                                >
                                    <div className="product-header">
                                        <img src={item.img} alt="product1" />
                                    </div>
                                    <div className="product-details">
                                        <p>{item.name}</p>
                                        <p className="item-price">{item.price}0$</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkincareItem