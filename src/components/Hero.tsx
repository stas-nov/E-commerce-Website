import { Link } from "react-router-dom";
import Main1 from "../img/header/head-img-1.webp";
import Main3 from "../img/header/head-img-2.webp";
import Main2 from "../img/header/head-img-3.jpg";
import Main4 from "../img/header/head-img-4.webp";
import "./Header.css";

const Hero = () => {

    return (
        <>
            <div className="home-container">
                <div className="container">
                    <div className="grid-container">
                        <div className="featured grid-one">
                            <Link to="categories/bags">
                                <div id="img1" className="lil-overlay"></div>
                                <img src={Main1} alt="img1" />
                                <p className="main-description">Bags</p>
                            </Link>
                        </div>
                        <div className="featured grid-two">
                            <Link to="categories/skincare">
                                <div id="img2" className="lil-overlay"></div>
                                <img src={Main2} alt="img2" />
                                <p className="main-description">Skincare</p>
                            </Link>
                        </div>
                        <div className="featured grid-four">
                            <Link to="categories/furniture">
                                <div id="img3" className="lil-overlay"></div>
                                <img src={Main3} alt="img3" />
                                <p className="main-description">Furniture</p>
                            </Link>
                        </div>
                        <div className="featured grid-four-low">
                            <Link to="categories/paper-goods">
                                <div id="img4" className="lil-overlay"></div>
                                <img src={Main4} alt="img4" />
                                <p className="main-description">Paper Goods</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Hero;