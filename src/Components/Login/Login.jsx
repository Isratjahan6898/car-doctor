import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { MdFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const {signIn}= useContext(AuthContext);
    console.log(signIn)
    const handleLogin=(e)=>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password)

      signIn(email, password)
      .then(result=>{
        const user =result.user;
        console.log(user)
    })
    .catch(error=> console.log(error))
    }
    return (
        <div className="lg:mx-[100px] my-[70px]">
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 ">
      
      <img src={login} alt="" className='pr-[30px]' />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-3xl text-center font-bold">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] text-white font-bold">Sign In</button>
        </div>
      </form>
      <div className='flex items-center justify-center my-[20px] gap-[20px]'>
      <MdFacebook  className='text-2xl text-blue-600'/>
      <FaLinkedin className='text-2xl text-blue-600' />
      <FcGoogle className='text-2xl' />
      </div>

      <p className='text-center mb-[16px]'>Have an account <Link to='/signUp'><btn className='text-[#FF3811] font-bold'>SingUP</btn></Link></p>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Login;