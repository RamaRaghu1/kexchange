import React, { useContext, useState } from 'react';
import { DataContext } from '../Context/dataContext';

const Converter = () => {
  const data = useContext(DataContext)
  // console.log(data)

  const [inputVal, setInputVal] = useState();
  const [outputVal, setOutputVal] = useState(0)


  const inrData = data.data.find((dt) => dt.pair === 'kaitcoin/inr')
  console.log(inrData)
  const inrVal = inrData ? inrData.lastprice : 0;


  const usdtData = data.data.find((dt) => dt.pair === 'kaitcoin/usdt')
  console.log(usdtData)
  const usdtVal = usdtData ? usdtData.lastprice : 0;




  const handleInput = (e) => {

    const num = parseInt(e.target.value);
    setInputVal(num>0 ? num: 0)
    setOutputVal(num>0?outputVal:0 )

  }


  const handleConversion=()=>{

    const selectedCurrency = document.getElementById('currency').value;
    console.log(selectedCurrency)

    const conversionRate = selectedCurrency === 'INR' ? inrVal : usdtVal;
    setOutputVal(inputVal * conversionRate );


  }

 


  return (
    <div className='flex justify-around my-12'>
      <div>
        <p className='text-white'>From Coin</p>
        <select className='border border-blue-900 text-white bg-black w-[220px] h-12 text-xl'>
          <option value='kaitcoin' >KAITCOIN</option>
        </select>
      </div>
      <div>
        <p>Spend Amount</p>
        <input type="text" inputmode="numeric" pattern="[0-9]*" className='bg-black border border-blue-900 w-[220px] h-12 text-xl active:border-blue-900' onChange={handleInput} value={inputVal} />
      </div>
<div className='m-4'>
<button className='bg-blue-500 rounded-lg p-2' onClick={handleConversion}>Convert</button>
</div>
     
      <div>
        <p className='text-white'>From Coin</p>
        <select className='border border-blue-900 text-white bg-black w-[220px] h-12 text-xl' id='currency'>
          <option value='INR'>INR</option>
          <option value='USDT'>USDT</option>
        </select>
      </div>
      <div>
        <p>Recieve Amount</p>
        <input className='bg-black border border-blue-900 w-[220px] h-12 text-xl' id='output' value={outputVal} />
      </div>

    </div>
  )
}

export default Converter
