import { toast, Bounce } from 'react-toastify';

const DeleteModal = ({ id, passwordArray, setPasswordArray, onClose }) => {
  const itemToDelete = passwordArray.find(item => item.id === id);

  const handleConfirmDelete = () => {
    const updatedList = passwordArray.filter(item => item.id !== id);
    
    setPasswordArray(updatedList);
    localStorage.setItem("passwords", JSON.stringify(updatedList));
    
    toast.error(`🗑️ Deleted ${itemToDelete?.site || 'credential'}!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
      transition: Bounce
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-800 text-white border border-slate-700 p-6 rounded-2xl max-w-md w-full mx-4 shadow-2xl flex flex-col gap-4">
        
        <h3 className="text-2xl font-black text-red-500 flex items-center gap-2">
          Confirm Deletion
        </h3>
        
        <p className="text-slate-300 text-sm leading-relaxed">
          Are you sure you want to permanently delete the credentials for 
          <span className="text-emerald-400 font-bold block bg-slate-900/50 p-2 rounded-lg mt-1 border border-slate-700/50 truncate">
            {itemToDelete?.site || "this website"}
          </span>
          This action cannot be undone.
        </p>
        
        <div className="flex justify-end gap-3 mt-2">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer">
            Cancel
          </button>
          <button 
            onClick={handleConfirmDelete}
            className="px-5 py-2.5 bg-red-500 hover:bg-red-600 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-red-500/20">
            Yes, Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeleteModal;
