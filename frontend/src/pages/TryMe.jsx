import useLocalStorage from "../hooks/useLocalStorage";
import List from "../components/List";

function TryMe() {
  const initialListState = [{ title: "", details: "" }];

  const [listDo, setListDo] = useLocalStorage("listDo", initialListState);
  const [listDoing, setListDoing] = useLocalStorage(
    "listDoing",
    initialListState
  );
  const [listDone, setListDone] = useLocalStorage("listDone", initialListState);

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
      <p className="text-center">
        <i>
          If you like the app, register so that you can access your data from
          any device. The data on this page is saved to your local storage on
          your device.
        </i>
      </p>
    </div>
  );
}

export default TryMe;
