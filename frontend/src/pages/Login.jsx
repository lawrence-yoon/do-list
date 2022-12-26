import { useState } from "react";
import TextField from "../components/TextField";
import { ButtonLogin } from "../components/Button";

function Login() {
  return (
    <div className="flex flex-col mx-auto w-60 py-5">
      <h2 className="text-3xl text-center my-5">Login</h2>
      <label>email</label>
      <TextField />
      <label>password</label>
      <TextField />
      <ButtonLogin />
    </div>
  );
}

export default Login;
