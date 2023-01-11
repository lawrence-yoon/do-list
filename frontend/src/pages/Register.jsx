import { useState, useEffect } from "react";
import TextField from "../components/ui/TextField";
import { ButtonRegister } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

function Register() {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [field, setField] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  function handleTextChange(e) {
    setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleRegister(e) {
    e.preventDefault();
    if (field.password !== field.password2) {
      return alert("Passwords do not match");
    }
    //maybe add the pasword check here in front end, see if password matches password2. then send just name, email, password
    //need to make sure props are passed properly

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
        console.log(data);
        alert(`successfully registered ${data.email}`);
        setRegisterSuccess(true);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        alert("Register failed");
        setRegisterSuccess(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //useeffect to navigate
  const navigate = useNavigate();

  //may need to touch up on what states should the useeffect watch and what states to be used in the conditional
  useEffect(() => {
    if (registerSuccess && !isLoading) {
      navigate("/");
    }
  }, [isLoading]);

  return (
    <>
      {registerSuccess ? (
        <p>Successfully registered</p>
      ) : (
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
          <ButtonRegister onClick={handleRegister} />
        </div>
      )}
    </>
  );
}

export default Register;
