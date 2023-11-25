import { Outlet,  useLocation } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
import Footer from "../../Pages/Footer/Footer";


const Root = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('register')
    return (
        <div className="max-w-screen-xl mx-auto">
            { noHeaderFooter|| <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter|| <Footer></Footer>}
        </div>
    );
};

export default Root;