import React from 'react'
import img1 from "../assets/sectionImages/img1.png";
import img2 from "../assets/sectionImages/img2.png";
import img3 from "../assets/sectionImages/img3.png";
import img4 from "../assets/sectionImages/img4.png";
import img5 from "../assets/sectionImages/img5.png";
import img6 from "../assets/sectionImages/img6.png";
import img7 from "../assets/sectionImages/img7.png";
import img8 from "../assets/sectionImages/img8.png"

const Section = () => {

const data=[
    {
        id:1,
        img:img1,
        heading:"High-End New Technology",
        para:"Kairaa offers you a complete end-to-end crypto trading solution High-quality development, auditing, and"
    },
    {
        id:2,
        img:img2,
        heading:"Lighting Speed KYC",
        para:"We execute your KYC while guaranteeing the proper KYC protocol, within 30 minutes of signing up. We are incorporating"
    },
    {
        id:3,
        img:img3,
        heading:"Fund Your Account",
        para:"It's been easy fund transfer with Kairaa, for both withdrawal and deposit mechanisms. The transaction is very smooth and",

    },
    {
        id:4,
        img:img4,
        heading:"Seamless Trading",
        para:"We provide a trusted and intuitive platform for users, of all experience levels, to trade how they want. Whether you’re a"
    },
    {
        id:5,
        img:img5,
        heading:"Live Trade Chart",
        para:"Our trading charts provide a comprehensive picture of the live exchange rate, assets, and crypto currency price"
    },
    {
        id:6,
        img:img6,
        heading:"Quick Transaction",
        para:"Send and receive crypto coins globally with kairaa and experience world-class exchange at the least price.",
    },
    {
        id:7,
        img:img7,
        heading:"Instant Withdrawal",
        para:"Withdrawal is made simple, quick, and instant in kairaa. We offer an easy-to-use online withdrawal process that allows",
    },
    {
        id:8,
        img:img8,
        heading:"4x7 Support Multi-Lingual",
        para:"Our team provides multilingual customer service to customers around the world. Our mission is to provide the best possible"
    }

]


  return (
    <div className='py-4'>
        <h2 className='text-center font-bold text-3xl'>Build Your Crypto Portfolio</h2>
        <div className='text-white text-sm flex flex-row flex-wrap justify-between p-12 '>
      {data.length >0 &&  data.map((dt)=>{
      return  <div className='w-64 h-[300px] rounded-xl p-4 bg-[#061121] space-y-3 m-4'>
        <img src={dt.img} className='pb-8'/>
        <p className='text-lg'>{dt.heading}</p>
        <p>{dt.para}</p>
        </div>
       
      })}
       </div>
    </div>
  )

}

export default Section
