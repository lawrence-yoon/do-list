import { useState } from "react";
import TextField from "../components/TextField";
import { ButtonRegister } from "../components/Button";

function Register() {
  const [field, setField] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  return (
    <div className="flex flex-col mx-auto w-60 py-5">
      <h2 className="text-3xl text-center my-5">Register</h2>
      <label>name</label>
      <TextField />
      <label>email</label>
      <TextField />
      <label>password</label>
      <TextField />
      <label>confirm password</label>
      <TextField />
      <ButtonRegister />
    </div>
  );
}

export default Register;
