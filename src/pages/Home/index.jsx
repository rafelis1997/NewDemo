import { Link, } from "react-router-dom";
import ar from '../../assets/ar.svg';

export function Home() {

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-8">
      <img src={ar} width={350}/>

      <h1 className="text-3xl text-center">Welcome to this WebAR Demo</h1>

      <Link to="/instructions" className="w-7/12">
	     <span className="font-bold text-xl text-slate-50 flex justify-center items-center py-4 px-8 rounded-md bg-[#6e5dcf]">Start</span>
      </Link>


      <Link to="/world-ar" className="w-7/12">
	     <span className="font-bold text-xl text-slate-50 flex justify-center items-center py-4 px-8 rounded-md bg-[#6e5dcf]">World Tracking</span>
      </Link>

      <h3 className="absolute bottom-3 font-bold text-xl">
        Developed by <span>Rafael Almeida</span>
      </h3>     
    </div>
  )
}