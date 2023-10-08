const EventCard = ({ data }) => {
  const { title,image,short_description,date } = data;
  return (
    <div className="p-4">
      <div className="card flex flex-col lg:flex-row lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img className="w-full h-[270px]"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body h-[270px] lg:w-1/2">
          <h2 className=" text-xl font-medium h-14">{title}</h2>
          <p className="">{short_description}</p>
          <p className="font-medium">Date: {date}</p>
            
         
          <div className="card-actions justify-end">
            <button className="btn btn-accent text-white">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
