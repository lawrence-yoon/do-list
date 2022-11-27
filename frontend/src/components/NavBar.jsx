import NavBarLinks from "./NavBarLinks"

function NavBar(){
    return (
      <nav className='container flex flex-row justify-between'>
      <NavBarLinks label="To Do List"/>
      <div className="flex">
        <NavBarLinks label="Log In"/>
        <NavBarLinks label="Log Out"/>
        <NavBarLinks label="Register"/>
        <NavBarLinks label="About"/>
      </div>
    </nav>
    )
  }
  

export default NavBar