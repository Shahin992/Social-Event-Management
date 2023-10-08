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
        <div>
            <div className="flex flex-col justify-center items-center p-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Experience Our Offerings</h2>
        <p className="md:w-3/4 mb-8 text-left md:text-center text-2xl md:text-2xl font-semibold">Discover our range of services designed to make your special moments extraordinary. From weddings and birthdays to anniversaries and more, we bring your dreams to life.</p>
        </div>
            
            <div className=" grid grid-cols-1 mb-10 lg:grid-cols-2 gap-12 justify-center items-center">
             {
                data.map((data) => <Card data={data}></Card>)
             }
            
            
        </div>
        </div>
    );
};

export default Services;