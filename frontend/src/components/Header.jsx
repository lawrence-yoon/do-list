function Header() {
  return (
    <header className="bg-orange-500 flex flex-row justify-between items-center h-10 p-6">
      <h1 className="text-4xl">TaskBoard</h1>
      <div className="flex justify-around gap-6">
        <a className="text-xl">Login</a>
        {/* <a className='text-2xl'>Logout</a> */}
        <a className="text-xl">Register</a>
      </div>
    </header>
  );
}

export default Header;
