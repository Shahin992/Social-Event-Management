// import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";
import { useEffect, useState } from "react";

const Services = () => {
    const [data,setData] = useState([])
    // const data = useLoaderData();
    useEffect(()=>{
        fetch('serviceData.json') 
        .then(response => response.json())
        .then(data => setData(data));
    },[])
    
    return (
        <div className=" grid grid-cols-1 mb-10 lg:grid-cols-2 gap-12 justify-center items-center">
             {
                data.map((data) => <Card data={data}></Card>)
             }
            
            
        </div>
    );
};

export default Services;