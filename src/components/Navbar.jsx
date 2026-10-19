const Navbar = () => {
  return (
    <div className="bg-indigo-950 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-row justify-between items-center">

        <div className="text-white font-black text-2xl tracking-tight select-none cursor-pointer">
        <span>&lt;Pass</span><span className="text-emerald-500">MF/&gt;</span>
        </div>

        <ul className="flex flex-row gap-6 text-white font-semibold">
          <li><a href="/" className="transition duration-200 hover:text-emerald-400">Home</a></li>
          <li><a href="/about" className="transition duration-200 hover:text-emerald-400">About</a></li>
          <li><a href="/contact" className="transition duration-200 hover:text-emerald-400">Contact</a></li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
