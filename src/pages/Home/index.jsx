import { Link, } from "react-router-dom";
import ar from '../../assets/ar.svg';

export function Home() {

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-8">
      <img src={ar} width={350} className="w-[350px] mobile:w-[200px] "/>

      <h1 className="text-3xl text-center">Welcome to this WebAR Demo</h1>

      <Link to="/instructions-image" className="w-7/12">
	     <span className="font-bold text-xl text-slate-50 flex justify-center items-center py-3 px-7 rounded-md bg-[#6e5dcf]">Image Tracking</span>
      </Link>


      <Link to="/instructions-world" className="w-7/12">
	     <span className="font-bold text-xl text-slate-50 flex justify-center items-center py-3 px-7 rounded-md bg-[#6e5dcf]">World Tracking</span>
      </Link>

      <h3 className="absolute bottom-7 mobile:bottom-1 font-bold text-xl">
        Developed by <span>Rafael Almeida</span>
      </h3>     
    </div>
  )
}