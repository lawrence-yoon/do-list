import Note from "./Note";
import { ButtonNote } from "../ui/Button";
import { ModalNote, ModalDelete, ModalMove } from "./Modal";
import { useState } from "react";

export default function List({
  list,
  setList,
  setListLeft,
  setListRight,
  left,
  right,
  label,
  isDashBoardList,
  isLoggedIn,
  token,
  countChanges,
  setCountChanges,
}) {
  const initialTextState = {
    title: "",
    details: "",
    list: "",
  };

  const [text, setText] = useState(initialTextState);
  const [textTargeted, setTextTargeted] = useState({ id: null, data: {} });
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);

  function handleTextChange(e) {
    setText((prevText) => ({
      ...prevText,
      [e.target.name]: e.target.value,
    }));
  }

  //Create new Note
  //
  function handleNote() {
    setIsNoteModalOpen(true);
  }

  function handleConfirmNoteDB() {
    fetch("/api/items", {
      method: "POST",
      body: JSON.stringify({
        title: text.title,
        details: text.details,
        list: label,
      }),
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
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        alert("Create note failed");
      })
      .finally(() => {
        const newCount = countChanges + 1;
        setCountChanges(newCount);
      });
  }

  function handleConfirmNote() {
    if (!text.title || !text.details) {
      return alert("Please fill out all fields.");
    }
    if (isDashBoardList) {
      if (!isLoggedIn) {
        return alert("Please log in.");
      }
      handleConfirmNoteDB();
    } else {
      setList((prevList) => [...prevList, text]);
    }
    setText(initialTextState);
    setIsNoteModalOpen(false);
  }

  function handleClose() {
    setText(initialTextState);
    setIsNoteModalOpen(false);
  }

  //Delete targeted Note
  //
  function handleDelete(ID) {
    if (isDashBoardList) {
      setTextTargeted({
        _id: ID,
        data: list.find((elem) => elem._id == ID),
      });
    } else {
      setTextTargeted({
        id: ID,
        data: list[ID],
      });
    }
    setIsDeleteModalOpen(true);
  }

  function handleDeleteNoteDB() {
    fetch("/api/items/" + textTargeted._id, {
      method: "DELETE",
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
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        alert("Delete note failed");
      })
      .finally(() => {
        const newCount = countChanges + 1;
        setCountChanges(newCount);
      });
  }

  function handleConfirmDelete() {
    if (isDashBoardList) {
      handleDeleteNoteDB();
    } else {
      // alert("firedhandleconfirmdelete: " + textTargeted._id)
      setList((prev) => prev.filter((elem, index) => index != textTargeted.id));
    }
    setTextTargeted({});
    setIsDeleteModalOpen(false);
  }

  function handleCancelDelete() {
    setTextTargeted(0);
    setText(initialTextState);
    setIsDeleteModalOpen(false);
  }

  //Edit targeted Note
  //
  function handleEdit(ID) {
    if (isDashBoardList) {
      const listData = list.find((elem) => elem._id == ID);
      setTextTargeted({
        _id: ID,
        data: listData,
      });
      setText(listData);
    } else {
      setTextTargeted({
        id: ID,
        data: list[ID],
      });
      setText(list[ID]);
    }
    setIsEditModalOpen(true);
  }

  function handleEditNoteDB() {
    fetch("/api/items/" + textTargeted._id, {
      method: "PUT",
      body: JSON.stringify({
        title: text.title,
        details: text.details,
        // list: label,
      }),
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
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        alert("Edit note failed");
      })
      .finally(() => {
        const newCount = countChanges + 1;
        setCountChanges(newCount);
      });
  }

  function handleConfirmEdit() {
    if (isDashBoardList) {
      // alert("handleconfirmedit fired");
      handleEditNoteDB();
    } else {
      const edittedArray = list;
      list[textTargeted.id] = text;
      setList(edittedArray);
    }
    setText(initialTextState);
    setIsEditModalOpen(false);
  }

  function handleCancelEdit() {
    setText(initialTextState);
    setIsEditModalOpen(false);
  }

  //Move targeted Note
  //
  function handleMove(ID) {
    if (isDashBoardList) {
      const listData = list.find((elem) => elem._id == ID);
      setTextTargeted({
        _id: ID,
        data: listData,
      });
      setText(listData);
    } else {
      setTextTargeted({
        id: ID,
        data: list[ID],
      });
      setText(list[ID]);
    }
    setIsMoveModalOpen(true);
  }

  function handleMoveNoteDB(listMove) {
    fetch("/api/items/" + textTargeted._id, {
      method: "PUT",
      body: JSON.stringify({
        // title: text.title,
        // details: text.details,
        list: listMove,
      }),
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
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        alert("Move note failed");
      })
      .finally(() => {
        const newCount = countChanges + 1;
        setCountChanges(newCount);
      });
  }

  function handleMoveLeft() {
    if (isDashBoardList) {
      // alert("handlemoveleft fired");
      handleMoveNoteDB(left);
    } else {
      setListLeft((prevList) => [...prevList, text]);
      setList((prev) => prev.filter((elem, index) => index != textTargeted.id));
    }
    setText(initialTextState);
    setTextTargeted({ id: null, data: {} });
    setIsMoveModalOpen(false);
  }

  function handleMoveRight() {
    if (isDashBoardList) {
      // alert("handlemoveright fired");
      handleMoveNoteDB(right);
    } else {
      setListRight((prevList) => [...prevList, text]);
      setList((prev) => prev.filter((elem, index) => index != textTargeted.id));
    }
    setText(initialTextState);
    setTextTargeted({ id: null, data: {} });
    setIsMoveModalOpen(false);
  }

  function handleCancelMove() {
    setText(initialTextState);
    setIsMoveModalOpen(false);
  }

  return (
    <div className="w-4/12 drop-shadow-lg border-black border-2 rounded-lg flex flex-col p-2 bg-blue-600 lg:w-[450px]">
      <h1 className="text-3xl pt-6 pb-3 text-center">{label}</h1>

      <NoteArea>
        {list.map((elem, index) => (
          <Note
            key={isDashBoardList ? elem._id : index}
            _id={elem._id}
            id={index}
            entry={elem}
            isDashBoardList={isDashBoardList}
            onClickDelete={handleDelete}
            onClickEdit={handleEdit}
            onClickMove={handleMove}
          />
        ))}
      </NoteArea>

      <div className="flex justify-end">
        <ButtonNote onClick={handleNote} title="Create New Item" />
      </div>

      {/* MODALS */}
      {isNoteModalOpen ? (
        <ModalNote
          text={text}
          handleTextChange={handleTextChange}
          handleConfirm={handleConfirmNote}
          handleCancel={handleClose}
        />
      ) : null}
      {/* <ModalNote */}
      {isDeleteModalOpen ? (
        <ModalDelete
          textTargeted={textTargeted}
          handleConfirm={handleConfirmDelete}
          handleCancel={handleCancelDelete}
        />
      ) : null}

      {isEditModalOpen ? (
        <ModalNote
          text={text}
          handleTextChange={handleTextChange}
          handleConfirm={handleConfirmEdit}
          handleCancel={handleCancelEdit}
        />
      ) : null}

      {isMoveModalOpen ? (
        <ModalMove
          textTargeted={textTargeted}
          handleMoveLeft={handleMoveLeft}
          handleMoveRight={handleMoveRight}
          handleCancel={handleCancelMove}
          left={left}
          right={right}
        />
      ) : null}
    </div>
  );
}

export function NoteArea({ children, ...rest }) {
  return (
    <div className="container min-h-[200px] border-2 border-black flex flex-col bg-blue-700 mx-auto p-2 mb-2 rounded-md md:min-w-[25%]">
      {children}
    </div>
  );
}
