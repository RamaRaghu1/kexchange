import React, { useEffect } from 'react';
// import axios from 'axios';

const Hero = () => {


    useEffect(() => {
        fetchData();
    }, [])


const fetchData=()=>{
    const apiUrl = 'https://example.com/api/data';


    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YourAuthTokenHere'
    };
    
    
    fetch(apiUrl, {
      method: 'GET', 
      headers: headers,
    })
      .then(response => {
       
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
     
        return response.json();
      })
      .then(data => {
    
        console.log(data);
      })
      .catch(error => {
       
        console.error('There was a problem with the fetch operation:', error);
      });
    
}



  
    return (
        <div>
            <p className='text-3xl text-white'>Hero</p>
        </div>
    )
}

export default Hero
