import vedio1 from "../assets/video1.mp4";
import vedio2 from "../assets/video2.mp4";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 ">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className="py-3 px-4 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border"> 
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay muted loop className="rounded-lg w-1/2 border border-orange-700 shadow-orange-700 mx-2 my-4">
          <source src={vedio1} type="video/mp4" />
            Your browser does not support the vedio tag.
        </video>
        <video autoPlay muted loop className="rounded-lg w-1/2 border border-orange-700 shadow-orange-700 mx-2 my-4">
          <source src={vedio2} type="video/mp4" />
            Your browser does not support the vedio tag.
        </video>

      </div>

    </div>
  );
};

export default HeroSection;
