import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
    // 
    return (
        <div>
            <Header></Header>
            <div className="min-h-[calc(100vh-260px)]">
            <Outlet></Outlet>
            </div>
            <div className="w-full">
            <Footer></Footer> 
            </div>
        </div>
    );
};

export default Root;