import { useState } from "react";
import TextField from "../components/ui/TextField";
import { ButtonRegister } from "../components/ui/Button";

function Register() {
  const [field, setField] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  function handleTextChange(e) {
    setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  //maybe add the pasword check here in front end, see if password matches password2. then send just name, email, password
  //need to make sure props are passed properly
  function handleRegister(e) {
    e.preventDefault();
    fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({
        name: field.name,
        email: field.email,
        password: field.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        handleToken(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        alert("Login failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div className="flex flex-col mx-auto w-60 py-5">
      <h2 className="text-3xl text-center my-5">Register</h2>
      <label>name</label>
      <TextField
        type="text"
        name="name"
        value={field.name}
        onChange={handleTextChange}
      />
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
      <label>confirm password</label>
      <TextField
        type="password"
        name="password2"
        value={field.password2}
        onChange={handleTextChange}
      />
      <ButtonRegister />
    </div>
  );
}

export default Register;
