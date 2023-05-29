import './TrendingSlider.css'
import { Link } from 'react-router-dom'
import { items } from './ProductData'

const TrendingItem = () => {
    const filteredItems = items.filter((item) => item.id % 4 === 3 || item.id % 4 === 0)
    return (
        <>
            {filteredItems.map((item) => (
                <div key={item.id} className="row-item">
                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to={`/categories/product/${item.id}`}
                    >
                        <div className="item-header">
                            <img src={item.img} alt="product" />
                        </div>
                        <div className="item-description">
                            <p>{item.name}</p>
                            <p className="item-price">{item.price}0$</p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default TrendingItem