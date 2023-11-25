import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FaRegRectangleList } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { SiCheckmarx } from "react-icons/si";
import { MdOutlineFeedback } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";
import useSurveyor from "../hooks/useSurveyor";
// import useRole from "../hooks/useRole";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isSurveyor] =useSurveyor();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 ">
                <ul className="menu p-4">
                    {/* admin  role */}
                   { isAdmin && <>
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
                   </>} 

                   { isSurveyor && <>
                   <li> 
                        <NavLink to= '/dashboard/create-survey'> <SiCheckmarx /> 
                        Create Survey</NavLink>
                    </li>
                    <li> 
                        <NavLink to= '/dashboard/survey-details'> <FaRegRectangleList /> 
                        Survey Details</NavLink>
                    </li>
                    <li> 
                        <NavLink to= '/dashboard/feedback'> <MdOutlineFeedback /> 
                        Feedback</NavLink>
                    </li>
                   </>}


                    {/* {
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
                        <NavLink to= '/dashboard/create-survey'> <SiCheckmarx /> 
                        Create Survey</NavLink>
                    </li>
                    <li> 
                        <NavLink to= '/dashboard/survey-details'> <FaRegRectangleList /> 
                        Survey Details</NavLink>
                    </li>
                    <li> 
                        <NavLink to= '/dashboard/feedback'> <MdOutlineFeedback /> 
                        Feedback</NavLink>
                    </li>

                        </>
                    }
                    */}

                   
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;