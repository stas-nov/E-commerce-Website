import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";

const Home = () => {
    return (
        <>
            <Hero />
            <ProudProducts />
            <TrendingSlider />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home;