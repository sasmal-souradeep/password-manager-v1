import SaveButton from "./SaveButton"

const Manager = () => {
  return (
    <>
    <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
    </div>

    <div className="container mx-auto bg-slate-800 max-w-4xl rounded-2xl mt-10">
    <div className="text-white flex flex-col p-6 gap-6">

      <div className="flex justify-center text-4xl font-black">
      <span>&lt;Pass</span><span className="text-emerald-500">MF/&gt;</span>
      </div>

      
      <div className="flex flex-col gap-2">
        <label className="text-red-400 font-semibold">Website Name or URL</label>
        <input className="bg-white rounded-lg p-2 text-black w-full" type="text" placeholder="Website URL"/>
      </div>

    <div className="flex flex-row gap-6 justify-between mt-2">
      
      <div className="flex flex-col gap-2 w-1/2">
        <span className="text-red-400 font-semibold">Email</span>
        <input className="bg-white rounded-lg p-2 text-black w-full" type="text" placeholder="your-email@domain.com"/>
      </div>
      

      <div className="flex flex-col gap-2 w-1/2">
        <span className="text-red-400 font-semibold">Password</span>
        <input className="bg-white rounded-lg p-2 text-black w-full" type="text" placeholder="••••••••"/>
      </div>
    
    </div>

    <SaveButton/>
    
    </div>
    </div>
    </>
  )
}

export default Manager