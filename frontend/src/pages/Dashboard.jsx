import { useState, useEffect } from "react";
import List from "../components/features/List";
import Footer from "../components/features/Footer";

function Dashboard({ token, handleToken = () => {} }) {
  const initialListState = [];
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //this countChanges is used to trigger a rerender whenever buttons are pressed.
  const [countChanges, setCountChanges] = useState(0);

  const [listDo, setListDo] = useState(initialListState);
  const [listDoing, setListDoing] = useState(initialListState);
  const [listDone, setListDone] = useState(initialListState);

  useEffect(() => {
    {
      token &&
        fetch("/api/items", {
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
            setIsLoggedIn(true);
            setListDo(data.filter((elem) => elem.list === "do"));
            setListDoing(data.filter((elem) => elem.list === "doing"));
            setListDone(data.filter((elem) => elem.list === "done"));
          })
          .catch((error) => {
            console.error("Error fetching data in useEffect: ", error);
            setError(error);
            alert("Login failed");
            setIsLoggedIn(false);
          })
          .finally(() => {
            setIsLoading(false);
          });
    }
  }, [countChanges]);

  //handle submit, will send the body with specific list "do" "doing" "done"
  return (
    <div className="bg-orange-300 h-full flex flex-col">
      {token && isLoggedIn ? (
        <h2 className="text-center text-xl pt-4">Hello {token.name}</h2>
      ) : (
        <h2 className="text-center text-xl pt-4">
          Please log in, or visit the Try-Me page for an offline experience.
        </h2>
      )}
      <div className="flex flex-row items-start p-5 overflow-auto gap-2">
        <List
          list={listDo}
          setList={setListDo}
          setListLeft={setListDone}
          setListRight={setListDoing}
          left="done"
          right="doing"
          label="do"
          isDashBoardList={true}
          isLoggedIn={isLoggedIn}
          token={token}
          countChanges={countChanges}
          setCountChanges={setCountChanges}
        />
        <List
          list={listDoing}
          setList={setListDoing}
          setListLeft={setListDo}
          setListRight={setListDone}
          left="do"
          right="done"
          label="doing"
          isDashBoardList={true}
          isLoggedIn={isLoggedIn}
          token={token}
          countChanges={countChanges}
          setCountChanges={setCountChanges}
        />
        <List
          list={listDone}
          setList={setListDone}
          setListLeft={setListDoing}
          setListRight={setListDo}
          left="doing"
          right="do"
          label="done"
          isDashBoardList={true}
          isLoggedIn={isLoggedIn}
          token={token}
          countChanges={countChanges}
          setCountChanges={setCountChanges}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
