import { useState, useEffect } from "react";
import List from "../components/features/List";

function Dashboard() {
  useEffect(() => {
    //test free access endpoint
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
        setIsLinked((prev) => !prev);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const initialListState = [];
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //remove the local state and put in useEffect to grab data from get endpoint with token.
  //may have to get token from parent? parent reach down into login to get token and save token in parent.
  //wait, this is weird. i copy pasted this code from the try me. and this state was retrieved from same place in local state it seems.
  //definitely dont need to do any token shenanigans with lifting up in state.
  //should be able to access it with the localstorage.

  const [listDo, setListDo] = useState(initialListState);
  const [listDoing, setListDoing] = useState(initialListState);
  const [listDone, setListDone] = useState(initialListState);

  const [isLinked, setIsLinked] = useState(false);

  return (
    <div className="bg-orange-300 h-full">
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
      {}
      <p className="text-center">
        <i>
          If you like the app, register so that you can access your data from
          any device.
        </i>
      </p>
    </div>
  );
}

export default Dashboard;
