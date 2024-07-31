import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const success = searchParams.get("success")
  const orderId = searchParams.get("orderId")
  const navigate = useNavigate()
const {url} = useContext(StoreContext)

const verifyPayment = async ()=>{
  const response = await axios.post(url+"/api/order/verify-order",{success,orderId})
  if(response.data.success){
navigate('/my-orders')
  }else{
    navigate('/')
  }
}

useEffect(()=>{
verifyPayment()
},[])
  return (
    <div className='verify'>
      <div className="spinner">
      </div>
        <h3 >Verifying payment</h3>
      
    </div>
  )
}

export default Verify