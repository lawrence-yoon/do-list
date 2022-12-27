import { useState } from "react";
import TextField from "../components/TextField";
import { ButtonLogin } from "../components/Button";

function Login() {
  const [field, setField] = useState({
    email: "",
    password: "",
  });

  function handleTextChange(e) {
    setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div className="flex flex-col mx-auto w-60 py-5">
      <h2 className="text-3xl text-center my-5">Login</h2>
      <label>email</label>
      <TextField
        type="email"
        name="email"
        value={field.email}
        onChange={handleTextChange}
      />
      <label>password</label>
      <TextField
        type="password"
        name="password"
        value={field.password}
        onChange={handleTextChange}
      />
      <ButtonLogin />
    </div>
  );
}

export default Login;
