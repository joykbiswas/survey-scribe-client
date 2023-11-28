import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm, } from "react-hook-form"
// import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const SignUp = () => {
    const  axiosPublic = useAxiosPublic();
    const { register, handleSubmit,reset, formState: { errors }} = useForm()
    const navigate =useNavigate();
    const [error, setError] = useState('')
    const {createUser, updateUserprofile} =useContext(AuthContext)

      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserprofile(data.name, data.photoURL)
            .then(() =>{
              // create user entry in the database;
              const userInfo = {
                name: data.name,
                email: data.email
              }
              axiosPublic.post('/users', userInfo)
              .then(res =>{
                if(res.data.insertedId) {
                  console.log('user added to the database');
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
                }
              })


            })
            .catch(error=>{
              setError(error.message)
              console.error(error)})
        })
      }
  return (
    <div>
        <Helmet>
            <title>survey scribe | Sign Up</title>
        </Helmet>
      <div className="">
        <div className=" mt-12 lg:mt-16">
        <h1 className="text-3xl text-center font-semibold">Sign Up now!</h1>
          
          <div className=" w-1/2 mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}
             className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name" {...register("name" , { required: true })}

                 
                  placeholder="type your name"
                  className="input input-bordered"
                  
                />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="name" {...register("photoURL" , { required: true })}

                  placeholder="photo URL"
                  className="input input-bordered"
                  
                />
                {errors.photoURL && <span className="text-red-500">photo URL is required</span>}
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder=" type your email"
                  className="input input-bordered"
                  
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true, minLength:8, maxLength: 20, pattern:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ })}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  
                />
                {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 8 character</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-500">Password must be less then 20 character</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-500">Password must be one upper case, one lower case,one number and one special character</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>

                </label>
              </div>
              <p className="text-red-500">{error}</p>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <p className='pb-4 pl-4'><>Already have an account <Link className='text-red-400' to='/login'>Login</Link></></p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
