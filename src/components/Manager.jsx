import { useState } from "react"
import SaveButton from "./SaveButton"
import LogTable from "./LogTable"

const Manager = () => {
  const [form, setform] = useState({site: "", username: "", password: ""})

  const [passwordArray, setPasswordArray] = useState(() => {
    const saved = localStorage.getItem("passwords")
    return saved ? JSON.parse(saved) : []
  })

  const handleChange = (e) => {
    setform({...form, [e.target.name] : e.target.value})
  }

  const saveCredentials = () => {
     if (!form.site || !form.username || !form.password) {
      alert("Please fill out all fields before saving!")
      return
    }

    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    setPasswordArray([...passwordArray, form])
    setform({ site: "", username: "", password: "" })
    console.log([...passwordArray, form])
  }

  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
    </div>

    <div className="container mx-auto bg-slate-800 max-w-4xl rounded-2xl mt-10">
    <div className="text-white flex flex-col p-6 gap-6">

      <div className="flex justify-center text-4xl font-black">
      <span>&lt;Pass</span><span className="text-emerald-500">MF/&gt;</span>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-red-400 font-semibold">Website Name or URL</label>
        <input className="bg-white rounded-lg p-2 text-black w-full" value={form.site} name="site" onChange={handleChange} placeholder="Website URL" type="text"/>
      </div>

    <div className="flex flex-row gap-6 justify-between mt-2">    
      <div className="flex flex-col gap-2 w-1/2">
        <span className="text-red-400 font-semibold">Email</span>
        <input className="bg-white rounded-lg p-2 text-black w-full"  value={form.username} name="username" onChange={handleChange} placeholder="your-email@domain.com" type="text"/>
      </div>

      <div className="flex flex-col gap-2 w-1/2">
        <span className="text-red-400 font-semibold">Password</span>
        <input className="bg-white rounded-lg p-2 text-black w-full"  value={form.password} name="password" onChange={handleChange} placeholder="••••••••" type="password"/>
      </div>   
    </div>
    <SaveButton onClick={saveCredentials}/>

    </div>
    </div>

    <LogTable passwordArray={passwordArray}/>

    </>
  )
}

export default Manager