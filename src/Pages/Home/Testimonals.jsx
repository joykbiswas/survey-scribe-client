const Testimonals = () => {
  return (
    <div className="px-4 lg:px-0">
      <div className="carousel w-full shadow-2xl h-[500px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="absolute rounded-xl flex items-center h-full ">
            <div className=" space-y-7 px-2 md:px-6 w-5/6 mx-auto">
              <p className="text-lg">
              Survey Scribe has revolutionized our market research efforts. The intuitive interface and robust analytics tools make gathering and analyzing data a breeze. Our team can now make informed decisions faster than ever before!
              </p>
              <div className="flex items-center gap-7 justify-center ">
                <div>
                  <img
                    className="w-24 rounded-full"
                    src="https://i.ibb.co/Fm5pLJN/Untitled-6.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Joy KB</h3>
                  <h2 className="text-xl">Marketing Manager</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className="absolute rounded-xl flex items-center h-full ">
            <div className=" space-y-7 pl-12 w-5/6 mx-auto">
              <p className="text-lg">
              As a small business owner, Survey Scribe has been a game-changer for understanding our customers. The platform is user-friendly, and the customization options allowed us to tailor surveys to our specific needs. The insights gained have directly influenced our business strategy
              </p>
              <div className="flex items-center gap-7 justify-center ">
                <div>
                  <img
                    className="w-24 rounded-full"
                    src="https://i.ibb.co/4JYdKmf/author3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Russell Lee</h3>
                  <h2 className="text-xl"> Small Business Owner</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <div className="absolute rounded-xl flex items-center h-full ">
            <div className=" space-y-7 pl-12 w-5/6 mx-auto">
              <p className="text-lg">
              Survey Scribe is an invaluable tool for employee feedback. The anonymity feature encourages honest responses, and the reporting features help us identify trends over time. It has become an essential part of our employee engagement strategy
              </p>
              <div className="flex items-center gap-7 justify-center ">
                <div>
                  <img
                    className="w-24 rounded-full"
                    src="https://i.ibb.co/hD0Mcgp/author6.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">
                  David M..
                  </h3>
                  <h2 className="text-xl">HR Professional</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <div className="absolute rounded-xl flex items-center h-full ">
            <div className=" space-y-7 pl-12 w-5/6 mx-auto">
              <p className="text-lg">
              Survey Scribe simplified our event feedback process. Creating surveys for attendees was a breeze, and the real-time feedback allowed us to make on-the-fly adjustments. It is a must-have for anyone organizing events or gatherings!
              </p>
              <div className="flex items-center gap-7 justify-center ">
                <div>
                  <img
                    className="w-24 rounded-full"
                    src="https://i.ibb.co/1TswrNh/author7.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Isabel Austin</h3>
                  <h2 className="text-xl">Event Coordinator</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
