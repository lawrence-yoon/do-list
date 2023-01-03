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
}) {
  const initialTextState = {
    title: "",
    details: "",
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

  function handleConfirmNote() {
    setList((prevList) => [...prevList, text]);
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
    setTextTargeted({
      id: ID,
      data: list[ID],
    });
    setIsDeleteModalOpen(true);
  }

  function handleConfirmDelete() {
    setList((prev) => prev.filter((elem, index) => index != textTargeted.id));
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
    setTextTargeted({
      id: ID,
      data: list[ID],
    });
    setText(list[ID]);
    setIsEditModalOpen(true);
  }

  function handleConfirmEdit() {
    const edittedArray = list;
    edittedArray[textTargeted.id] = text;
    setList(edittedArray);
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
    setTextTargeted({
      id: ID,
      data: list[ID],
    });
    setText(list[ID]);
    setIsMoveModalOpen(true);
  }

  function handleMoveLeft() {
    setListLeft((prevList) => [...prevList, text]);
    setList((prev) => prev.filter((elem, index) => index != textTargeted.id));
    setText(initialTextState);
    setTextTargeted({ id: null, data: {} });
    setIsMoveModalOpen(false);
  }

  function handleMoveRight() {
    setListRight((prevList) => [...prevList, text]);
    setList((prev) => prev.filter((elem, index) => index != textTargeted.id));
    setText(initialTextState);
    setTextTargeted({ id: null, data: {} });
    setIsMoveModalOpen(false);
  }

  function handleCancelMove() {
    setText(initialTextState);
    setIsMoveModalOpen(false);
  }

  return (
    <div className="max-w-md min-w-[300px] drop-shadow-lg border-black border-2 rounded-lg flex flex-col p-2 relative bg-blue-600">
      <h1 className="text-3xl pt-6 pb-3 text-center">{label}</h1>

      <NoteArea>
        {list.map((elem, index) => (
          <Note
            key={index}
            id={index}
            entry={elem}
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
