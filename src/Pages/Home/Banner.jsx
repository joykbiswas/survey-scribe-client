import Typewriter from "react-ts-typewriter";

const Banner = () => {
    return (
        <div className=' mt-9 relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
            <div className="flex  md:h-[70vh] lg:h-[80vh]">
            <div className="w-3/5 ml-4 lg:ml-6 h-full pt-2 space-y-3 md:pt-3 md:space-y-5 lg:pt-5 lg:space-y-9"
            
            >
                <h5 className="text-2xl font-semibold text-yellow-500">BEST BUSINESS PLATFORM OF</h5>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">ONLINE SURVEY</h2>

                {/* <h3 className="text-xl md:text-2xl  text-white hidden md:block">Survey Smart, Read Deep, Explore Wide: Welcome to Survey Scribe!</h3>
                <p>Your Gateway to Data Discovery with Survey Scribe!</p> */}
               <div className="text-xl md:text-2xl  text-white hidden md:block ">
                 
               <h1>Survey Smart, Explore Wide:
                    <Typewriter 
                    speed={100}
                    text={[" Welcome to Survey Scribe!  .", " Data Discovery with Survey Scribe!  ."]}
                    loop={true}
                    ></Typewriter>
                </h1>
               </div>





                <div className="flex items-center ">
                <button className="rounded-full bg-slate-300 text-blue-700 border  p-4 hover:text-green-600 hover:bg-white">Explore Now </button>
                
                </div>
            </div>

            <div className="w-2/5  object-cover  "
            data-aos="fade-left"
            data-aos-duration="3000"
            >
                <img className="  h-full" src="https://i.ibb.co/3rz0Wyw/banner-img-removebg-preview.png" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;