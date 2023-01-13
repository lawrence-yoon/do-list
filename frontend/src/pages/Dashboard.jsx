import { useState, useEffect } from "react";
import List from "../components/features/List";
import Footer from "../components/features/Footer";
import { text } from "express";

function Dashboard({ token, handleToken = () => {} }) {
  useEffect(() => {
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
            // setData(data);
            // console.log(data);
            // alert(token.message);
            setListDo(data.filter((elem) => elem.list === "do"));
            setListDoing(data.filter((elem) => elem.list === "doing"));
            setListDone(data.filter((elem) => elem.list === "done"));
          })
          .catch((error) => {
            console.error("Error fetching data in useEffect: ", error);
            setError(error);
            alert("Login failed");
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
  //
  //probably can make this into one. passing through "list" property. probabl same with the move.
  function handleCreateDoItem() {
    e.preventDefault();
    // if (!field.email || !field.password) {
    //   return alert("Please fill in all fields");
    // }
    fetch("/api/items", {
      method: "POST",
      body: JSON.stringify({
        title: text.title,
        details: text.detail,
        list: text.list,
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
        alert("Failed to create new item.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleCreateDoingItem() {}
  function handleCreateDoneItem() {}

  function handleMoveDoItem() {}
  function handleMoveDoingItem() {}
  function handleMoveDoneItem() {}

  function handleDeleteItem() {}

  //retrieve data, use the setters to update list data, render data from lists. from the get. then sort by "list" key and values
  //post and delete handler buttons send requests to endpoints. the useeffect should update lists with useeffect.
  const [listDo, setListDo] = useState(initialListState);
  const [listDoing, setListDoing] = useState(initialListState);
  const [listDone, setListDone] = useState(initialListState);

  const [isLinked, setIsLinked] = useState(false);

  //handle submit, will send the body with specific list "do" "doing" "done"
  return (
    <div className="bg-orange-300 h-full flex flex-col">
      {token ? <h1>{token.name} logged in</h1> : <h1>Not logged in</h1>}
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
