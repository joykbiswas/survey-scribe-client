const OurServices = () => {
  return (
    <div className="mb-16">
      <div>
        <h3 className="text-5xl font-bold text-center my-4">
          Discover Journey with Survey Scribe
        </h3>
      </div>
      <div className="flex justify-between gap-3 overflow-x-hidden py-14">
        <div className="  bg-base-100 border hover:shadow-2xl">
          <figure>
            <img className="w-24 mx-auto" src="https://i.ibb.co/tK7w9bR/img1.jpg" alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center ">
              Create Your Survey
            </h2>
          </div>
        </div>

        <div className=" bg-base-100 border hover:shadow-2xl">
          <figure>
            <img className="w-24 mx-auto"  src="https://i.ibb.co/nCPNS3G/Finding-Target.jpg" alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center ">
            Target Your Audience
            </h2>
          </div>
        </div>

        <div className="  bg-base-100 border hover:shadow-2xl">
          <figure>
            <img className="w-24 mx-auto" src="https://i.ibb.co/ySKwStP/support.png" alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center ">
            24/7 Support
            </h2>
          </div>
        </div>

        <div className=" bg-base-100 border hover:shadow-2xl">
          <figure>
            <img className="w-24 mx-auto" src="https://i.ibb.co/Y86sSPT/real-time2.jpg" alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center ">
            Real-Time Analytics
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
