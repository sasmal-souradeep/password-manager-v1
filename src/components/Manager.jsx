import { useState } from "react";
import SaveButton from "./SaveButton";
import LogTable from "./LogTable";
import PassIcon from "./PassIcon";
import EditModel from "./EditModel";
import DeleteModal from "./DeleteModel";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [editingItem, setEditingItem] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [ShowPassword, setShowPassword] = useState(false)

  const [passwordArray, setPasswordArray] = useState(() => {
    const saved = localStorage.getItem("passwords");
    const parsed = saved ? JSON.parse(saved) : [];
    return parsed.map((item) => (item.id ? item : { ...item, id: uuidv4() }));
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const saveCredentials = () => {
    if (!form.site || !form.username || !form.password) {
      toast.error('Fill all Fields before svaing', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce
      })
      return;
    }

    toast.success('Password saved successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce
      })

    const newEntry = { ...form, id: uuidv4() };
    const updatedArray = [...passwordArray, newEntry];

    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));

    setform({ site: "", username: "", password: "" });
    console.log(updatedArray);
  };
  
  return (
    <>
    <ToastContainer/>
      <div className="container mx-auto bg-slate-800 max-w-4xl rounded-2xl mt-10">
        <div className="text-white flex flex-col p-6 gap-6">
          <div className="flex justify-center text-4xl font-black">
            <span>&lt;Pass</span>
            <span className="text-emerald-500">MF/&gt;</span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-red-400 font-semibold">
              Website Name or URL
            </label>

            <input
              className="bg-white rounded-lg p-2 text-black w-full"
              value={form.site}
              name="site"
              onChange={handleChange}
              placeholder="Website URL"
              type="text"/>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-between mt-2">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <span className="text-red-400 font-semibold">Email</span>

              <input
                className="bg-white rounded-lg p-2 text-black w-full"
                value={form.username}
                name="username"
                onChange={handleChange}
                placeholder="your-email@domain.com"
                type="text"/>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <span className="text-red-400 font-semibold">Password</span>

              <div className="relative w-full flex items-center">
                <input
                  className="bg-white rounded-lg p-2 text-black w-full"
                  value={form.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="••••••••"
                  type={ShowPassword ? "text" : "password"}/>

                <div className="absolute right-3 z-10 flex items-center justify-center cursor-pointer select-none">
                  <PassIcon onClick={() => setShowPassword(!ShowPassword)} />
                </div>
              </div>
            </div>
          </div>

          <SaveButton onClick={saveCredentials} />
        </div>
      </div>
      
      <LogTable passwordArray={passwordArray}  
        onEditItem={(id) => setEditingItem(passwordArray.find(p => p.id === id))} 
        onDeleteItem={(id) => setDeletingId(id)} />  

      {editingItem && (
        <EditModel
          item={editingItem}
          onClose={() => setEditingItem(null)}
          passwordArray={passwordArray}
          setPasswordArray={setPasswordArray} />
      )}
      {deletingId && (
        <DeleteModal 
          id={deletingId}
          passwordArray={passwordArray}
          setPasswordArray={setPasswordArray}
          onClose={() => setDeletingId(null)} />
      )}

    </>
  );
};

export default Manager;
