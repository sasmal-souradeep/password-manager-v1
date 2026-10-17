import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const PasswordEye = ({ onClick }) => {
  const [lottieInstance, setLottieInstance] = useState(null);

  const handleMouseEnter = () => {
    if (lottieInstance) {
      lottieInstance.play();
    }
  };

  const handleMouseLeave = () => {
    if (lottieInstance) {
      lottieInstance.stop();
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute right-2 flex items-center justify-center cursor-pointer w-6 h-6 select-none"
    >
      <DotLottieReact
        src="/eye-icon-password.json"
        loop={false}
        autoplay={false}
        dotLottieRefCallback={setLottieInstance}
      />
    </div>
  );
};

export default PasswordEye;
