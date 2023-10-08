import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { image_url, price, title, short_Description,id } = data;

  return (
    <div className="p-4 md:p-0">
      <div className="card card-compact  md:p-0 bg-base-100 shadow-xl">
        <figure>
          <img className="h-64 w-full" src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl md:text-3xl font-bold">{title}</h2>
          <p className="text-xl md:text-2xl font-semibold h-28 md:h-20 mb-7">
            {short_Description}
          </p>
          <p className="text-xl md:text-2xl font-bold mb-5">Price: {price}</p>
          <div className="flex justify-between items-center w-full">
            
            
             <Link to={`/Home/${id}`}>
             
             <button className="btn btn-accent w-[100%] text-white font-medium">
                View-Details
              </button>
              
             </Link>
              
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
