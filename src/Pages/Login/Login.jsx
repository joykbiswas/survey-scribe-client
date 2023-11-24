import Swal from 'sweetalert2'
import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Login = () => {

    
    const [disabled, setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location =useLocation();
    const [error,setError] =useState('')

    const from = location.state?.from?.pathname || "/";
    console.log('user location login', location.state);

    useEffect(() =>{
        loadCaptchaEnginge(6)
    },[])

    const handleLogin = event =>{
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password =form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
          const user =result.user
          console.log(user);
          Swal.fire({
            title: "User login successful",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from, {replace: true});
        })
        .catch(error=>{
          // setError('Wrong password')
          setError(error.message)
          console.error(error)
        })
    }

    const handleValidateCaptcha = (e) =>{
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }
  return (
    <div>
      <Helmet>
            <title>Bistro Boss | log in</title>
        </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 text-center  lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card w-1/2 flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}
             className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
              
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
                //   required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input  onBlur={handleValidateCaptcha}
                  type="text"
                  
                  name="captcha"
                  placeholder="Type the captcha above"
                  className="input input-bordered"
                  required
                />
                {/* <button  className='btn btn-outline btn-xs mt-2'>Validate</button> */}
              </div>
              <p className="text-red-500">{error}</p>
              <div className="form-control mt-6">
                <input disabled={disabled} className='btn btn-primary' type="submit" value="Login" />
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <p className='pb-4 pl-3 md:pl-8'><>New Here? <Link className='text-red-400' to='/signup'>Create an account</Link></></p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
