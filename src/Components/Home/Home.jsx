import Services from "../Services/Services";






const Home = () => {
    return (
        <div>
            <div className="my-8 w-full p-4">
            <div className="hero min-h-screen rounded-lg" style={{backgroundImage: 'url(https://i.ibb.co/tPxTnS6/pexels-4936446.jpg'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="md:w-2/3">
      <h1 className="mb-5 md:text-5xl font-bold">Life is a collection of moments, make this one unforgettable with <span className="font-extrabold text-accent">Event Organizer</span></h1>
      
    </div>
  </div>
</div>
            </div>



            


            <Services/>
            
            
            
            
        </div>
    );
};

export default Home;