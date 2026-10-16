import { useState } from 'react';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';


const SaveButton = ({onClick}) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center mt-4">
    <button type="button" onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="flex flex-row items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-emerald-400/30">

      <div className="w-8 h-8 pointer-events-none">
        <DotLottieReact src="/check-mark.json" loop={false} autoplay={isHovered} key={isHovered ? "playing" : "stopped"}/>
      </div>

      <span className="text-lg tracking-wide">Save Credentials</span>
    </button>
  </div>
  )
}

export default SaveButton