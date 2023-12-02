import { MdAccountCircle } from "react-icons/md";
import { MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <nav className="bg-teal-700 p-2 text-white overflow-x-hidden">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="text-2xl font-bold mb-2 md:mb-0 md:pr-4">Caro store</div>
                    <div className="flex flex-wrap">
                        <Link to={'/'} className="text-white hover:text-gray-800 ml-4">Home</Link>
                        <Link to={'/products'} className="text-white hover:text-gray-800 ml-4">Products</Link>
                        <Link to={'/about'} className="text-white hover:text-gray-800 ml-4">About</Link>
                        <Link to={'/contact'} className="text-white hover:text-gray-800 ml-4">Contact</Link>
                        <Link to={'/cart'} className="text-white hover:text-gray-800 ml-4 items-center flex"><MdShoppingBasket /></Link>
                    
                        <Link to={'/account'} className="text-white hover:text-gray-800 ml-4 flex items-center gap-2"><MdAccountCircle /> Sign In </Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
