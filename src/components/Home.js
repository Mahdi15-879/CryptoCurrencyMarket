import React, {useState, useEffect} from 'react';

// API
import {getProducts} from "../services/api"

const Home = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const fetchAPI = async () => {
            setData(await getProducts());
            setLoad(false);
          };
      
          fetchAPI();
          
    }, []);

    return(
        <div className='Home'>

        </div>
    )
}

export default Home;