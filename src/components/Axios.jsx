
import axios from "axios";
import { useState } from "react";


const Axios = () => {
    const [phones,setPhones]=useState([])
    // axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    //     .then(data=>setPhones(data.data.data))
       
    return (
        <div>
            <div className="text-3xl">All Phones:{phones.length}</div>
        </div>
    );
};

export default Axios;