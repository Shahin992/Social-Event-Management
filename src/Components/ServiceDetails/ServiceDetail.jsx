import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetail = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    console.log(intId);

    const serviceDetails = data?.find((data)=> data.id ===intId);
    
    
    return (
        <div>
            <div className="mb-10 rounded-lg bg-base-200">
  <div className="hero-content">
   <div className="flex flex-col md:flex-row-reverse w-full">
   <div className="md:w-1/2">
   <img src={serviceDetails.image_url} className="w-full h-full rounded-lg shadow-2xl" />
   </div>
    <div className="md:w-1/2">
      <h1 className="text-2xl md:text-4xl font-bold">{serviceDetails.title}</h1>
      <p className="py-6 md:text-xl">{serviceDetails.description}</p>
      <p className="text-xl md:text-2xl font-bold mb-5">Price: {serviceDetails.price}</p>
      <button className="btn btn-accent text-white text-2xl">Book Now</button>
    </div>
   </div>
  </div>
</div>

            
        </div>
    );
};

export default ServiceDetail;