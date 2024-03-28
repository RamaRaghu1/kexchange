import React, {useContext } from 'react';
import { DataContext } from '../Context/dataContext';

const Table = () => {
const data=useContext(DataContext)
// console.log(data)


let newData= data.data.filter((dt)=>dt.secondcurrency==="inr");
// console.log(newData)

  return (
    <>
   <h2 className='text-3xl font-bold text-center p-4'>Market trend</h2>
  <div className='bg-black text-white m-auto'>
    <table className='table-fixed'>
      <thead>
      <tr >
        <td className='w-2/12
         p-8 m-4'>Pair</td>
        <td className='w-1/12
         p-8 m-4'>Last Price</td>
        <td className='w-2/12
         p-8 m-4'>24h Change</td>
        <td className='w-1/12
         p-8 m-4'>24h High</td>
        <td className='w-1/12
         p-8 m-4'>24h Low</td>
        <td className='w-1/12
         p-8 m-4'>24h Volume</td>
        <td className='w-2/12
         p-8 m-4'>Start Trade</td>
      </tr>
      </thead>
      <tbody>
      {newData.length>0 && newData.map((dt)=> {
         const isChangeHigher= dt.change >=0? true: false;
        return(
         
  <tr>
    <td className='w-3/12
         p-8 m-4'><p><img src={dt.logo} className='w-8 h-8 inline-block'/> {dt.pair.toUpperCase()}</p></td>
    <td className='w-3/12
         p-8 m-4'>{dt.lastprice.toFixed(2)}</td>
       <td className={`w-1/12
         p-8 m-4  ${isChangeHigher ?  "text-green-500" : "text-red-500"}`}>{dt.change.toFixed(2)}%</td>
        <td className='w-1/12
         p-8 m-4'>{dt.high}</td>
        <td className='w-1/12
         p-8 m-4'>{dt.low}</td>
        <td className='w-1/12
         p-8 m-4'>{dt.volume.toFixed(2)}</td>
        <td className='w-2/12
        p-4 '><button className='border border-blue-500 px-4 py-2 rounded-lg mx-2'>Trade</button></td>
   </tr>
   )
  }
   )} 
   </tbody> 
  
    </table>
  </div>
 
  </>
  )
}

export default Table
