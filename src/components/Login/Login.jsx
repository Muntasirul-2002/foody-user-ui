import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import './Login.css'
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios'
import {toast} from 'react-toastify'
const Login = ({ setShowLogin }) => {
  const {url,setToken,token } = useContext(StoreContext)
  const [currentState, setCurrentState] = useState("Login");

  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler  = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data,[name]:value}))

  }

const onLogin = async (event) =>{
event.preventDefault()
let newUrl = url;
if(currentState==="Login"){
  newUrl += "/api/user/login"
}else{
  newUrl += "/api/user/signup"
}

const response = await axios.post(newUrl,data)
if(response.data.success){
  setToken(response.data.token)
  localStorage.setItem('token', response.data.token)
  if(currentState==="Login"){
    toast.success("Login successful")
  } else{
    toast.success("Signup successful")
  }
  setShowLogin(false)

}else{
  alert(response.data.message)
}
}
  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder="Name" required />
          )}
          <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Email" required />
          <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Password" required />
        </div>
        <button type="submit">
          {currentState === "sign up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms and conditions.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account? <span onClick={()=>setCurrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={()=> setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
