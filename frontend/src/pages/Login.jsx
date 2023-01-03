import { useState } from "react";
import TextField from "../components/TextField";
import { ButtonLogin } from "../components/Button";

function Login() {
  const [field, setField] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function handleTextChange(e) {
    setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  //test free access endpoint
  function handleTest() {
    fetch("/api/items2")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogin(e) {
    e.preventDefault();
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
        console.log(data);
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
  );
}

export default Login;
