import { createContext } from 'react';
import { useState, useEffect } from 'react';



export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        console.log(`sast{}`)
        try {
            const response = await fetch('https://bxnzaopdi.kairaaexchange.com/api/v1/pair-list');
            const newData = await response.json();
            console.log(`my data ${newData.data}`)
            setData(newData.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}