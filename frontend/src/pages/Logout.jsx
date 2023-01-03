function Logout({ handleToken = () => {} }) {
  //add some token overwrite to clear from localstorage
  handleToken("");
  return <div>Logout Successful</div>;
}

export default Logout;
