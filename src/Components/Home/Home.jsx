import About_Us from "../About/About_Us";
import ContactUs from "../About/ContactUs/ContactUs";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="1500">
      <div className="my-8 w-full p-4" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div
          className="hero min-h-screen rounded-lg"
          style={{
            backgroundImage: "url(https://i.ibb.co/tPxTnS6/pexels-4936446.jpg",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="md:w-2/3">
              <h1 className="mb-5 md:text-5xl font-bold">
                Life is a collection of moments, make this one unforgettable
                with<span className="text-yellow-300 font-extrabold"> EVENT</span> <span className="font-extrabold text-slate-950">WIZARDS</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
      < Services />
      </div>
      <div data-aos="zoom-in-right" >
      <About_Us/>
      </div>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <ContactUs/>
      </div>
      
    </div>
  );
};

export default Home;
