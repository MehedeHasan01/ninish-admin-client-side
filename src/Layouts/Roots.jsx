import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Roots = () => {
    return (
        <div>
            <Navbar/>
            <div className="bg-bgBlueGray">
            <Outlet/>


            </div>
            <Footer/>
        </div>
    );
};

export default Roots;