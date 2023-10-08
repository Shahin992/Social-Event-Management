import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard/EventCard";

const Event = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Our Success Stories
        </h2>
        <p className="md:w-3/4 mb-8 text-left md:text-center text-2xl md:text-2xl font-semibold">
        Explore our past projects and events that reflect our commitment to excellence and creativity. Dive into the stories behind each success, and get inspired for your upcoming celebration.
        </p>
      </div>

      <div className=" grid grid-cols-1 mb-10 lg:grid-cols-2 gap-12 justify-center items-center">
             {
                data.map((data) => <EventCard data ={data}></EventCard>)
             }
            
 
        </div>
    </div>
  );
};

export default Event;
