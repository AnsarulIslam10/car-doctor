
const Hero = () => {
  return (
    <div className="w-full rounded-md h-[60vh] flex items-center" style={{
        backgroundImage: `url("/assets/images/banner/5.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
        
    }}>
      {/* header */}
      <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0 lg:mt-3">
        <div className="px-8 mt-8 lg:mt-0 w-full md:w-[50%]">
          <h1 className="text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px] text-white font-bold">
          Affordable Price For Car Servicing
          </h1>
          <p className="text-[18px] mt-2 text-gray-200">
          There are many variations of passages of  available, but the majority have suffered alteration in some form
          </p>

          <div className="flex items-center flex-wrap gap-[20px] mt-6">
            <button className="btn bg-[#FF3811] text-white rounded-sm border-none shadow-none">
              Discover More
            </button>

            <button className="btn btn-outline text-white rounded-sm">
              
              Latest Project
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
