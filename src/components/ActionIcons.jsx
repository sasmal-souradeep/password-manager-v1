import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ActionIcons = ({ onEdit, onDelete }) => {
  const [editInstance, setEditInstance] = useState(null);
  const [deleteInstance, setDeleteInstance] = useState(null);

  
  return (
    <div className="flex flex-row justify-center items-center gap-3 w-full h-full inline-flex whitespace-nowrap">

      <button
        type="button"
        onClick={onEdit}
        onMouseEnter={() => editInstance?.play()}
        onMouseLeave={() => {
          editInstance?.stop();
          editInstance?.goToAndStop(0);
        }}

        className="flex items-center justify-center p-1.5 rounded-lg hover:bg-slate-200 transition duration-150 transform active:scale-95 cursor-pointer min-w-[32px] w-8 h-8">

        <div className="w-6 h-6 pointer-events-none flex items-center justify-center">
          <DotLottieReact
            src="/edit-button.json"
            loop={false}
            autoplay={false}
            dotLottieRefCallback={setEditInstance}/>
        </div>
      </button>

      <button
        type="button"
        onClick={onDelete}
        onMouseEnter={() => deleteInstance?.play()}
        onMouseLeave={() => {
          deleteInstance?.stop();
          deleteInstance?.goToAndStop(0);
        }}
        className="flex items-center justify-center p-1.5 rounded-lg hover:bg-red-100 transition duration-150 transform active:scale-95 cursor-pointer min-w-[32px] w-8 h-8">

        <div className="w-6 h-6 pointer-events-none flex items-center justify-center">
          <DotLottieReact
            src="/trash-bin.json"
            loop={false}
            autoplay={false}
            dotLottieRefCallback={setDeleteInstance}/>
        </div>
      </button>

    </div>
  );
};

export default ActionIcons;
