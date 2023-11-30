/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import {  useEffect, useState } from 'react'
import './CheckoutForm.css'
// import useAuth from '../../hooks/useAuth'
import { toast } from 'react-toastify'
import { ImSpinner9 } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { createPaymentIntent, saveBookingInfo, updateProUser,  } from '../../../api/payment'
import useProUser from '../../../hooks/useProUser'

// import Swal from 'sweetalert2'

const CheckoutForm = ({ bookingInfo, closeModal, }) => {
  // const axiosSecure = useAxiosSecure();
  const stripe = useStripe()
  const elements = useElements()
  const { user } = useAuth()
  const [ , ,refetch] = useProUser();

  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

//   Create Payment Intent
    useEffect(() =>{
        // Create Payment Intent
        if(bookingInfo?.price > 0){
          createPaymentIntent({price: bookingInfo?.price})
          .then(data =>{
            console.log(data.clientSecret);
            setClientSecret(data.clientSecret)
          })
        }
    },[bookingInfo])

    // const handleProUser = user =>{
    //   axiosSecure.patch(`/users/proUser/${user._id}`)
    //   .then(res =>{
    //     console.log(res.data);
    //     if(res.data.modifiedCount > 0){
    //       // refetch();
    //       Swal.fire({
    //           position: "top-end",
    //           icon: "success",
    //           title: `${user.name} is an Surveyor now !`,
    //           showConfirmButton: false,
    //           timer: 1500
    //         });
    //   }

    //   })
    // }
  
  
    const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }

    // card data lookup (Asynchronous network call )
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('error', error)
      setCardError(error.message)
    } else {
      setCardError('')
      console.log('payment method', paymentMethod)
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      })

    if (confirmError) {
      console.log(confirmError)
      setCardError(confirmError.message)
    }

    console.log('payment intent', paymentIntent)

    if (paymentIntent.status === 'succeeded') {
      // save payment information to the server
      
      const paymentInfo = {
        ...bookingInfo,
        transactionId: paymentIntent.id,
        date: new Date(),
      }
      try{
        // save payment info to the server
        await saveBookingInfo(paymentInfo)
        // await updateStatus(bookingInfo.roomId, true)
        console.log("bookingInfo",bookingInfo);
        await updateProUser(bookingInfo.email)
        const text = `Payment Successful! ${paymentIntent.id} `
        
        navigate('/')
        toast.success(text);
        toast.success("You are now Pro-user")
        refetch()
      }catch (err){
        console.log(err);
        toast.error(err.message)
      }finally{
        setProcessing(false)
      }

      // setProcessing(false)
    }
  }
  console.log('bookingInfo',bookingInfo);

  return (
    <>
      <form className='my-2' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='flex mt-2 justify-around'>
          <button
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type='submit'
            disabled={!stripe || !clientSecret || processing}
            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          >
            {processing ? (
              <ImSpinner9 className='m-auto animate-spin' size={24} />
            ) : (
              `Pay ${bookingInfo?.price}$`
            )}
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
    </>
  )
}

export default CheckoutForm
