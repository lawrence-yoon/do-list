import useLocalStorage from "../hooks/useLocalStorage";
import List from "../components/features/List";
import Footer from "../components/features/Footer";

function TryMe() {
  const initialListState = [];

  const [listDo, setListDo] = useLocalStorage("listDo", initialListState);
  const [listDoing, setListDoing] = useLocalStorage(
    "listDoing",
    initialListState
  );
  const [listDone, setListDone] = useLocalStorage("listDone", initialListState);

  return (
    <div className="bg-orange-300 h-full">
      <div className="flex flex-row items-start p-5 overflow-auto gap-3">
        <List
          list={listDo}
          setList={setListDo}
          setListLeft={setListDone}
          setListRight={setListDoing}
          left="Done"
          right="Doing"
          label="Do List"
          isDashBoardList={false}
        />
        <List
          list={listDoing}
          setList={setListDoing}
          setListLeft={setListDo}
          setListRight={setListDone}
          left="Do"
          right="Done"
          label="Doing List"
          isDashBoardList={false}
        />
        <List
          list={listDone}
          setList={setListDone}
          setListLeft={setListDoing}
          setListRight={setListDo}
          left="Doing"
          right="Do"
          label="Done List"
          isDashBoardList={false}
        />
      </div>
      <p className="text-center">
        <i>
          If you like the app, register so that you can access your data from
          any device. The data on this page is saved to your local storage on
          your device.
        </i>
      </p>
      <Footer />
    </div>
  );
}

export default TryMe;
