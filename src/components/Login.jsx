import { useRef } from "react";
import logo from "../assets/site-logo/logo.svg";
import { useState } from "react";

const Login = ({onUserIdSubmit}) => {
 const [showRegister, setShowRegister] = useState(false)

const IdRef = useRef()

 const handleSubmitRegister = (e)=>{

 }
 const handleSubmitLogin = (e)=>{
  e.preventDefault()
  onUserIdSubmit(IdRef.current[0].value)
  console.log(IdRef);
 }
 
  return (
    <>
      <div className="w-screen h-52 bg-secondary">
        <div className="w-[1000px] mx-auto absolute top-10 left-1/2 -translate-x-1/2">
          <div className="flex justify-center items-center w-fit text-white gap-2">
            <img src={logo} alt="" />
            <span className=" uppercase font-semibold">WhatsApp web</span>
          </div>

          <div className="bg-white mt-10 rounded-md p-10 shadow-xl shadow-slate-300">
            {showRegister ?
            <div className="register ">
              <form className="max-w-sm mx-auto" onSubmit={handleSubmitRegister}>
                <h3 className=" text-cente mb-10 text-3xl font-semibold ">
                  Register
                </h3>
                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your mobile
                  </label>
                  <input
                    type="number"
                    id="phone"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    placeholder="+99 9876543210"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="repeat-password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Repeat password
                  </label>
                  <input
                    type="password"
                    id="repeat-password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                    required
                  />
                </div>
                <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                      required
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    I agree with the{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                  </label>
                </div>
                <div className="flex justify-between">
                <button
                  type="submit"
                  className="text-white bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Register new account
                </button>
                <button onClick={()=>setShowRegister(false)} className="underline text-blue-500 text-md font-semibold">Login Here</button>
                </div>
              </form>
            </div>
            :
            <div className="login">
              <form className="max-w-sm mx-auto" onSubmit={handleSubmitLogin} ref={IdRef} >
              <h3 className=" text-cente mb-10 text-3xl font-semibold ">
                  Login
                </h3>
                <div className="mb-5">
                  <label
                    htmlFor="loginNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your mobile
                  </label>
                  <input
                    type="number"
                    id="loginNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    placeholder="+99 9876543210"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    
                  />
                </div>
                {/* <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    Remember me
                  </label>
                </div> */}
                <div className="flex justify-between">
                <button
                  type="submit"
                  className="text-white bg-secondary hover:secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Login
                </button>
                <button onClick={()=>setShowRegister(true)} className="underline text-blue-500 text-md font-semibold">Create Account</button>
                </div>
              </form>
            </div>
}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
