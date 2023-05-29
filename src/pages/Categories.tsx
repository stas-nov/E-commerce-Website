import { Outlet } from "react-router"
import CategoriesHeader from "../components/CategoriesHeader"
import "../components/ProudProducts.css";

const Categories = () => {
    return (
        <>
            <CategoriesHeader />
            <Outlet />
        </>
    )
}

export default Categories