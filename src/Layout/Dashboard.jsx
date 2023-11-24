import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FaRegRectangleList } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 ">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                           <li> 
                        <NavLink to= '/'> <FaHome></FaHome> 
                         Home</NavLink>
                    </li>
                    <li> 
                        <NavLink to= '/dashboard/manage-users'> <FaUsers />
                        Manage Users</NavLink>
                    </li>
                    <li> 
                        <NavLink to= '/dashboard/survey-status'><ImStatsBars /> 
                        Survey Status</NavLink>
                    </li>
                    <li> 
                        <NavLink to= '/dashboard/payment-history'> <MdOutlinePayment /> 
                        Payment History</NavLink>
                    </li>
                        </>
                        : <>
                         <li> 
                        <NavLink to= '/dashboard/create-survey'> <FaHome></FaHome> 
                        Create Survey</NavLink>
                    </li>
                    <li> 
                        <NavLink to= '/dashboard/survey-details'> <FaRegRectangleList /> 
                        Survey Details</NavLink>
                    </li>
                    <li> 
                        <NavLink to= '/dashboard/feedback'> <FaHome></FaHome> 
                        Feedback</NavLink>
                    </li>

                        </>
                    }
                   

                   
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;