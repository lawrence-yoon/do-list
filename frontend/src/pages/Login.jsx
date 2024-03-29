import { useState, useEffect } from "react";
import TextField from "../components/ui/TextField";
import { ButtonLogin } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

function Login({ token, handleToken = () => {} }) {
  const [field, setField] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function handleTextChange(e) {
    setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleLogin(e) {
    e.preventDefault();
    if (!field.email || !field.password) {
      return alert("Please fill in all fields");
    }
    fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
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

  //may need to touch up on what states should the useeffect watch and what states to be used in the conditional
  const navigate = useNavigate();

  useEffect(() => {
    if (token || !isLoading) {
      navigate("/");
    }
  }, [isLoading]);

  return (
    <>
      {token ? (
        <p>logged in</p>
      ) : (
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
          <ButtonLogin onClick={handleLogin} />
        </div>
      )}
    </>
  );
}

export default Login;
