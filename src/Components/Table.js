import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Table = () => {
const [data,setData]=useState([]);
useEffect(()=>{
fetchData()
},[])

const fetchData = async()=>{
 const info= await fetch('https://bxnzaopdi.kairaaexchange.com/api/v1/pair-list');
//  let newData = info.data;
const newData = await info.json();
 setData(newData.data);

}


  return (
    <div className=''>
      <table border="1">
        <thead>
        <tr >
          <td>Pair</td>
          <td>Last Price</td>
          <td>24h Change</td>
          <td>24h High</td>
          <td>24h Low</td>
          <td>24h Volume</td>
          <td>Start Trade</td>
        </tr>
        </thead>
        <tbody>
        {data.length>0 &&data.map((dt)=> 
    <tr>
      <td>{dt.pair.toUpperCase()}</td>
      <td>{dt.lastprice.toFixed(2)}</td>
         <td>{dt.change.toFixed(2)}%</td>
          <td>{dt.high}</td>
          <td>{dt.low}</td>
          <td>{dt.volume.toFixed(2)}</td>
          <td>Start Trade</td>
     </tr>
  )} 
     </tbody> 
  
      </table>
    </div>
  )
}

export default Table
