import { useNavigate } from "react-router-dom";

function Logout({ handleToken = () => {} }) {
  const navigate = useNavigate();
  //add some token overwrite to clear from localstorage
  handleToken("");
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return <div>Logout Successful</div>;
}

export default Logout;
