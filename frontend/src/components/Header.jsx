import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonBurger } from "./Button";

function Header() {
  function handleBurger() {
    setToggleBurger((prev) => !prev);
    alert(toggleBurger);
  }

  const [toggleBurger, setToggleBurger] = useState(false);

  return (
    <header className="bg-orange-500 drop-shadow-xl border-black flex flex-row justify-between items-center p-3">
      <Link className="text-4xl self-start" to="/">
        TaskBoard
      </Link>
      {toggleBurger ? (
        <nav className="flex flex-col justify-around gap-6 items-center md:flex-row">
          <Link className="text-xl" to="/try-me">
            Try Me
          </Link>
          <Link className="text-xl" to="/login">
            Login
          </Link>
          <Link className="text-xl" to="/register">
            Register
          </Link>
          <ButtonBurger onClick={handleBurger} />
        </nav>
      ) : (
        <nav className="flex flex-row justify-around gap-6 items-center">
          <Link className="text-xl hidden md:block" to="/try-me">
            Try Me
          </Link>
          <Link className="text-xl hidden md:block" to="/login">
            Login
          </Link>
          <Link className="text-xl hidden md:block" to="/register">
            Register
          </Link>
          <ButtonBurger onClick={handleBurger} className="order-first" />
        </nav>
      )}
    </header>
  );
}

export default Header;
