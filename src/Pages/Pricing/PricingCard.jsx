/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import Feature from "./Feature";
import { useState } from "react";
import PaymentModal from "../../Components/Modal/PaymentModal";
import useAuth from "../../hooks/useAuth";

const PricingCard = ({option}) => {
  const {Name, Features, Price,Button} = option;
  let [isOpen, setIsOpen] = useState(false);
  
  const closeModal = ()=>{
    setIsOpen(false);
  }

  const {user} =useAuth();
  const totalPrice = Price
  const [bookingInfo, setBookInfo] = useState({
    price: totalPrice,
    name: user?.displayName,
    email:user?.email
    
  })
  console.log(option);
  return (
    <div>
      <div className="">
        
      </div>
      <div className="md:flex  mx-12 py-7 space-y-4 md:space-y-0">
      <div className="   max-w-sm mx-auto bg-white hover:shadow-2xl  overflow-hidden border rounded-tl-3xl rounded-br-3xl border-x-indigo-500 border-y-indigo-500">
        <div className="px-6 py-4 ">
          <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">{Name}</h2>
          <h3 className="text-5xl text-center font-bold text-red-500">{Price} <span className="text-black text-xl">Monthly</span> </h3>
            

          <div className='flex-grow m-3 mb-14'>
                {
                    Features.map((feature,idx)=><Feature key={idx}
                    feature={feature}
                   ></Feature>)
                }
            </div>
          
          
        </div>
        <div className="px-6 pt-4 pb-2 text-center">
          <button onClick={() =>setIsOpen(true)}
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-7">
             {Button}
          </button>
        </div>
      </div>
       
      <PaymentModal closeModal={closeModal} isOpen={isOpen} bookingInfo={bookingInfo}
      ></PaymentModal>
    </div>
    </div>
  );
};

export default PricingCard;
