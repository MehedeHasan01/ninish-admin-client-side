import { Helmet } from "react-helmet";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const ErrorMessage = () => {
    return (
        <>
        <Helmet>
            <title>নিণীষ | Data Not Found</title>
        </Helmet>
        <Navbar/>
        <div className="bg-bgBlueGray h-[70vh] flex items-center justify-center">
            <h1 className="text-5xl font-bold text-[#542CC0]">Data Not Found</h1>
        </div>
        <Footer/>
        </>
    );
};

export default ErrorMessage;