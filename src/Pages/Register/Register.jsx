import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, handleUpdateProfile, googleLogin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
   
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=!])(.{6,12})$/.test(password)) {
      setError("Minimum six characters, at least one uppercase and special character");
      console.log(
        "Minimum six characters,at least one uppercase and special character"
      );
    } else {
      
      toast.success("register successfully");

      createUser(email, password).then((result) => {
        console.log(result);
        handleUpdateProfile(name, photo).then(() => {
          navigate("/");
        });
      });
    }

    
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("google login");
      })
      .catch((error) => console.error(error));
      navigate("/");
  };

  return (
    <div className="mt-12 lg:mt-16">
      
      <h2 className="text-3xl text-center font-semibold">Please Register Now</h2>
      <div className="w-1/2 mx-auto">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <p className="text-red-500">{error}</p>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
            <p>
              {" "}
              Already you have account?
              <Link to="/login" className="text-blue-500 pl-2">
                login
              </Link>
            </p>
          </div >
          <div className="text-black flex justify-around items-center">
            <hr className=" border border-blue-300 w-2/5 "/> OR <hr className=" border border-blue-300 w-2/5"/>
          </div>
          <button
            onClick={handleGoogleLogin}
            className="btn text-green-600 text-2xl w-full border border-black"
          >
            <FaGoogle></FaGoogle> <span className="text-black">Google</span>
          </button>
        </form>
      </div>
      <div>
        
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
