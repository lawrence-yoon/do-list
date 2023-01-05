import { useState, useEffect } from "react";
import List from "../components/features/List";
import Footer from "../components/features/Footer";

function Dashboard({ loginToken, handleToken = () => {} }) {
  // useEffect(() => {
  //   //test free access endpoint
  //   //get all items with that token? get all items associated with login.
  //   //need to figure it out for sure.
  //   //maybe make a state for user info? maybe save it in same place token is. maybe i just need to pass token.

  //   {
  //     loginToken &&
  //       fetch("/api/items", {
  //         method: "GET",
  //         body: JSON.stringify({
  //           email: loginToken.email,
  //         }),
  //         headers: {
  //           "Content-type": "application/json",
  //           Authorization: `Bearer ${loginToken.token}`,
  //         },
  //       })
  //         .then((response) => {
  //           if (response.ok) {
  //             return response.json();
  //           }
  //           throw response;
  //         })
  //         .then((data) => {
  //           setData(data);
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching data: ", error);
  //           setError(error);
  //           alert("Login failed");
  //           //this get request is not going as planned need to figure it out.
  //           //create some console logs for this auth endpoint. check the terminal
  //         })
  //         .finally(() => {
  //           setIsLoading(false);
  //         });
  //   }
  // }, []);
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
    <div className="bg-orange-300 h-full flex flex-col justify-between">
      <div className="flex flex-row items-start py-5 overflow-auto md:gap-3 md:justify-center">
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
