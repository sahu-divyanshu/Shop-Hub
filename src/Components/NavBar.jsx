import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center relative border-b-4 pb-2 mb-6 border-gray-400 ">
      <Link to={'/'} className="w-full px-9 sm:text-4xl text-xl font-bold text-Bg   hover:animate-pulse ">
        Shop Hub
      </Link>

      <Link to="/AddToCard" className="mr-12">
        <MdShoppingCart className="sm:text-5xl text-3xl text-Bg pt-2 hover:animate-pulse " />
      </Link>
    </div>
  );
};

export default NavBar;
