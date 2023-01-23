import { useNavigate } from "react-router-dom";

function Logout({ handleToken = () => {} }) {
  const navigate = useNavigate();
  //add some token overwrite to clear from localstorage
  handleToken("");
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return <h2 className="text-center text-xl pt-4">Logout Successful</h2>;
}

export default Logout;
