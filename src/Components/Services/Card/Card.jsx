


const Card = ({data}) => {
     
    
    const {image_url, price, title,short_Description} = data

    return (
        <div className="p-4 md:p-0">
            <div className="card card-compact  md:p-0 bg-base-100 shadow-xl">
  <figure><img className="h-64 w-full" src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-xl md:text-3xl font-bold">{title}</h2>
    <p className="text-xl md:text-2xl font-semibold h-28 md:h-20 mb-7">{short_Description}</p>
    <div className="flex justify-between items-center">
        <p className="text-xl md:text-2xl font-semibold">Price: {price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-accent text-white font-medium">View-Details</button>
    </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Card;