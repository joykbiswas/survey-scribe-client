import { axiosSecure } from "../hooks/useAxiosSecure"

export const createPaymentIntent = async (price) =>{
    const {data} = await axiosSecure.post("/create-payment-intent", price)
    return data;
}

// save booking info in db
export const saveBookingInfo = async (paymentInfo) => {
    const { data } = await axiosSecure.post("/payments", paymentInfo);
    return data;
  };
  export const updateProUser = async (email) =>{
    const {data} = await axiosSecure.patch(`/users/proUser/${email}`,{})
    return data;
  }