import { Link, useNavigate } from "react-router-dom";
import { ButtonBurger } from "./Button";

function Header() {
  return (
    <header className="bg-orange-500 flex flex-row justify-between items-center h-10 p-6">
      <Link className="text-4xl" to="/">
        TaskBoard
      </Link>
      <div className="flex justify-around gap-6 items-center">
        <Link className="text-xl" to="/tryme">
          Try Me
        </Link>
        <Link className="text-xl" to="/login">
          Login
        </Link>
        {/* <a className='text-2xl'>Logout</a> */}
        <Link className="text-xl" to="/register">
          Register
        </Link>
        <ButtonBurger />
      </div>
    </header>
  );
}

export default Header;
