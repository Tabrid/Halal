
import { IoSearchOutline, IoCartOutline, IoPersonOutline, IoSearch } from 'react-icons/io5';
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className="w-full shadow-md lg:px-20 sticky top-0 z-[100]  bg-white">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between p-2 lg:p-4 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <img src="https://ik.imagekit.io/ez31v1jau4/Logo.jpg?updatedAt=1725204187749" alt="Logo" className="h-10" />
        </div>

        {/* Search bar */}
        <div className=" flex-1 justify-center px-4 hidden md:flex lg:flex">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search entire store here..."
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 p-2 rounded-full text-white">
              <IoSearchOutline />
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3 lg:space-x-6">
          {/* Cart */}
          <div className="relative hidden md:block lg:block">
            <IoCartOutline className="text-2xl text-green-500" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs px-1">1</span>
          </div>

          {/* User */}
          <IoSearch   className="text-3xl md:hidden lg:hidden text-green-500"  />
          <IoMdMenu  className="text-3xl md:hidden lg:hidden" />

          <IoPersonOutline className="text-2xl hidden md:block lg:block text-green-500" />
        </div>
      </nav>
      <div className='bg-slate-100 h-[1.5px] hidden md:block lg:block'>
      </div>
      {/* Bottom Navbar with Menu Items */}
      <div className=" w-full hidden md:flex  lg:flex justify-evenly bg-white py-6">
        <a href="#" className="text-black text-[18px]  font-sans font-semibold hover:text-green-500">Skin Care</a>
        <a href="#" className="text-black text-[18px]  font-sans font-semibold hover:text-green-500">Hair Care</a>
        <a href="#" className="text-black text-[18px]  font-sans font-semibold hover:text-green-500">Men</a>
        <a href="#" className="text-black text-[18px]  font-sans font-semibold hover:text-green-500">MakeUp</a>
        <a href="#" className="text-black text-[18px]  font-sans font-semibold hover:text-green-500">Baby Care</a>
        <a href="#" className="text-black text-[18px]  font-sans font-semibold hover:text-green-500">Women</a>
        <a href="#" className="text-black text-[18px]  font-sans font-semibold hover:text-green-500">Brand</a>
      </div>
    </div>
  );
};

export default Navbar;
