import React, { useEffect, useState } from 'react'
import Useshop from "../shopcontext";
import axios from 'axios';
import toast from 'react-hot-toast';
const Payments=()=>{
    const initialpayment={
        sahal:false,
        evc:false,
        zaad: false,
    }
    const [paymentMethod,setpayment]=useState(initialpayment);
    const [updated,setupdated]=useState(false);
    const [phone,setphone]=useState("");
    const [loading,setloading]=useState(false);
    const {total,ClearCart}=Useshop();

    useEffect(()=>{},[updated]);
    let Mya="1Maya";
    let Haa="Haa";
   const handlesubmit=(event)=>{
        event.preventDefault();
        if(!phone) return toast.error("phone numeber can't Empty",{
                style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                        fontSize:'18px',
                      },
                      iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                      },}
        );
        let pr=prompt(`the total u parchase is :${total} and ur number is : ${phone}  Enter Haa or Maya`);
        event.preventDefault();
        
        if(pr === Haa){
                setloading(true)
                console.log(`the total u paid is :${total} and ur number is : ${phone}`);
                ClearCart();
                alert("success...");
                setloading(false);
        }
        
        else if(pr===Mya){
                console.log("you cancled")
                ClearCart();
                alert("invalid pin ...");
        }
   }


//    const processpayment= async ()=>{
//       try{  const body ={
//                 schemaVerion: "1.0",
//                 resquestId:"10111331033",
//                 timestamp: "1590587436057686",
//                 channelName:"WEB",
//                 serviceName:"API_PURCHASE",
//                 serviceParams:{
//                         marchantUid:process.env.REACT_APP_MERCHANT_U_ID,
//                         apiUserId:process.env.REACT_APP_USER_ID,
//                         apiKey:process.env.REACT_APP_MERCHANT_API_KEY,
//                         paymentMethod:"mwallet_account",
//                         payerInfo:{
//                                 accountno:phone,
//                         },
//                         transectionInfo:{
//                                 referenceId:"12334",
//                                 invoiceId:"7896504",
//                                 amount:total,
//                                 currnecy:"USD",
//                                 description:"SHOPCART"
//                         },
//                 },
                
//         };
//         const data=await axios.post("https//api.waafi.com/asm", body);
//         console.log(data);
// }
// catch(err){
//         console.log(err);
// }
//    };

  return (<div>
    <h2>pay with</h2>
    <div className="payment-cards">
    <div className={`payment-card ${paymentMethod.zaad && "selected"}`} onClick={()=>setpayment({...initialpayment,zaad:true})}>
            <h3>Zaad service </h3>
    </div>
    <div className={`payment-card ${paymentMethod.evc && "selected"}` } onClick={()=>setpayment({...initialpayment,evc:true})}>
            <h3>Evc plus</h3>
    </div>
    <div className={`payment-card ${paymentMethod.sahal && "selected"}`} onClick={()=>setpayment({...initialpayment,sahal:true})}>
            <h3>Sahal</h3>
    </div>
    <form action='submit' >
        <input type="text" placeholder="+2526..." className='from-control' onChange={(e)=>setphone(e.target.value)}/>
        <button type="button" className='btn-proceed' onClick={handlesubmit}>{loading? "isloading":"proceed!"}</button>
    </form>
    </div>
    </div>
  )
}

export default Payments;