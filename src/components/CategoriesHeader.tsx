import { useState } from "react";
import { Link } from "react-router-dom";

const CategoriesHeader = () => {
    const [btnName, setBtnName] = useState('All');

    const handleName = (e: string) => {
        setBtnName(e)
    }

    return (
        <div className="container">
            <div className="catego-header">
                <div className="title-home">
                    <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                        <i className="fa-solid fa-angle-left"></i> Home
                    </Link>
                    <h3>{btnName}</h3>
                </div>
                <div className="filter-btns">
                    <Link to='all' onClick={() => handleName('All')}><button>All</button></Link>
                    <Link to='bags'><button onClick={() => handleName('Bags')}>Bags</button></Link>
                    <Link to='aroma-fragrances'><button onClick={() => handleName('Aroma & Fragrances')}>Aroma & Fragrances</button></Link>
                    <Link to='skincare'><button onClick={() => handleName('Skincare')}>Skincare</button></Link>
                    <Link to='paper-goods'><button onClick={() => handleName('Paper Goods')}>Paper Goods</button></Link>
                    <Link to='furniture'><button onClick={() => handleName('Furniture')}>Furniture</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CategoriesHeader