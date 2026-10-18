import PassIcon from "./PassIcon";
import { useState } from "react";
import { toast, Bounce } from 'react-toastify';

const EditModel = ({ item, onClose, passwordArray, setPasswordArray }) => {
  const [localForm, setLocalForm] = useState({
    site: item.site,
    username: item.username,
    password: item.password,
  });

  const [showModalPassword, setShowModalPassword] = useState(false);

  const handleChange = (e) => {
    setLocalForm({ ...localForm, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    const updatedArray = passwordArray.map((p) =>
      p.id === item.id ? { ...p, ...localForm } : p
    );

    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
    onClose();

    toast.success('Credentials Edited', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce
    })
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-800 text-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-slate-700 mx-4">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-emerald-400">Edit Credentials</h2>
          <button 
            type="button" 
            onClick={onClose} 
            className="text-slate-400 hover:text-white text-lg font-bold cursor-pointer transition">
            ✕
          </button>
        </div>

        <form onSubmit={handleSaveChanges} className="flex flex-col gap-4 text-black">
          <div className="flex flex-col gap-1">
            <label className="text-red-400 font-semibold text-sm">Website URL</label>
            <input
              className="bg-white rounded-lg p-2 w-full outline-none focus:ring-2 focus:ring-emerald-500"
              value={localForm.site}
              name="site"
              onChange={handleChange}
              type="text"
              required/>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-red-400 font-semibold text-sm">Email / Username</label>
            <input
              className="bg-white rounded-lg p-2 w-full outline-none focus:ring-2 focus:ring-emerald-500"
              value={localForm.username}
              name="username"
              onChange={handleChange}
              type="text"
              required/>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-red-400 font-semibold text-sm">Password</label>

            <div className="relative w-full flex items-center">
            <input
              className="bg-white rounded-lg p-2 w-full outline-none focus:ring-2 focus:ring-emerald-500"
              value={localForm.password}
              name="password"
              onChange={handleChange}
              type={showModalPassword ? "text" :"password"}
              required/>

                <div className="absolute right-3 z-10 flex items-center justify-center cursor-pointer select-none">
                    <PassIcon onClick={() => setShowModalPassword(!showModalPassword)} />
                </div>
              </div>
          </div>

          <div className="flex flex-row gap-3 justify-end mt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-xl cursor-pointer transition">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-xl cursor-pointer transition">
              Save Changes
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default EditModel;
