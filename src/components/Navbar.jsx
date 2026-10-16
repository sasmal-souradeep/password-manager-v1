const Navbar = () => {
  return (
    <div className="bg-indigo-950 p-4"> 
      <div className="container mx-auto flex flex-row justify-end">
        <ul className="flex flex-row gap-6 text-white font-semibold">
          <li><a href="/" className="hover:text-emerald-400">Home</a></li>
          <li><a href="/about" className="hover:text-emerald-400">About</a></li>
          <li><a href="/contact" className="hover:text-emerald-400">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
