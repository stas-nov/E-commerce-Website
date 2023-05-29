import "./ProudProducts.css";
import { items } from "./ProductData";
import { Link } from "react-router-dom";

const ProductItem = () => {
  const filteredItems = items.filter((item) => item.id % 4 === 2 || item.id % 4 === 1).slice(0, 8);

  return (
    <>
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
    </>
  );
}

export default ProductItem;
