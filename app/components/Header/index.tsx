const Navbar: React.FC = () => {
    return (
      <nav className="bg-[#a8d3eb] p-4 flex justify-between items-center">
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-lg bg-white text-white focus:outline-none focus:ring focus:border-blue-300 w-100"
          />
        </div>
        <div>
          {/* Add user picture here */}
          <img
            src="/path/to/user-picture.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  