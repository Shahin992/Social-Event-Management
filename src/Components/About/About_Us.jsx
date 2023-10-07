
const About_Us = () => {
    return (
        <div>
            <div className="my-10 p-4">
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">About Us</h2>
        <p className="md:w-3/4 mb-8 text-center text-2xl md:text-2xl font-semibold">Crafting Unforgettable Moments: Your Partner in Creating Extraordinary Celebrations and Cherished Memories</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 my-5 w-full">
          <div className="md:w-1/2 ">
            
            <img className=""
              src="https://i.ibb.co/Wgb3CdW/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="md:w-1/2">
            <p className="md:text-4 text-2xl font-medium">
              <span className="font-bold text-3xl ">Welcome to Event Organizer</span>, where we turn your special moments into
              Event Organizer is your partner in crafting extraordinary moments. With a dedicated team of event professionals, we specialize in transforming special occasions into cherished memories. Our commitment to attention to detail, creativity, and personalized service sets us apart. From weddings to birthdays and anniversaries, we're here to make your dreams a reality. Join us in celebrating life's precious moments, and let's create memories that last a lifetime.
            </p>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default About_Us;