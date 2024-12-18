import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutBUtton from "./SignOutBUtton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Honeymoon.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600 rounded"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600 rounded"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutBUtton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white rounded items-center text-blue-600 px-3 font-bold hover:bg-gray-200 hover:text-blue-500"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
