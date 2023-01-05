import { useState, useEffect } from "react";
import List from "../components/features/List";
import Footer from "../components/features/Footer";

function Dashboard({ token, handleToken = () => {} }) {
  useEffect(() => {
    //cannot send body with get request
    {
      token &&
        fetch("/api/items", {
          // method: "GET",
          // body: JSON.stringify({
          //   email: token.email,
          // }),
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token.token}`,
          },
        })
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
            console.error("Error fetching data in useEffect: ", error);
            setError(error);
            alert("Login failed");
            //this get request is not going as planned need to figure it out.
            //create some console logs for this auth endpoint. check the terminal
          })
          .finally(() => {
            setIsLoading(false);
          });
    }
  }, []);
  const initialListState = [];
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //add handlers for all buttons here. handlers will send post/put/delete requests to protected endpoints.

  //retrieve data, use the setters to update list data, render data from lists. from the get.
  //post and delete handler buttons send requests to endpoints. the useeffect should update lists with useeffect.
  const [listDo, setListDo] = useState(initialListState);
  const [listDoing, setListDoing] = useState(initialListState);
  const [listDone, setListDone] = useState(initialListState);

  const [isLinked, setIsLinked] = useState(false);

  return (
    <div className="bg-orange-300 h-full flex flex-col">
      <h1>{token.name} logged in</h1>
      <div className="flex flex-row items-start p-5 overflow-auto gap-2">
        <List
          list={listDo}
          setList={setListDo}
          setListLeft={setListDone}
          setListRight={setListDoing}
          left="Done"
          right="Doing"
          label="Do List"
        />
        <List
          list={listDoing}
          setList={setListDoing}
          setListLeft={setListDo}
          setListRight={setListDone}
          left="Do"
          right="Done"
          label="Doing List"
        />
        <List
          list={listDone}
          setList={setListDone}
          setListLeft={setListDoing}
          setListRight={setListDo}
          left="Doing"
          right="Do"
          label="Done List"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
