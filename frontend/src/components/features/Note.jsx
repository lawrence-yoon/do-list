import { ButtonTrash, ButtonOptions, ButtonMove } from "../ui/Button";

function Note({
  id,
  _id,
  entry,
  isDashBoardList,
  onClickDelete = () => {},
  onClickEdit = () => {},
  onClickMove = () => {},
}) {
  return (
    <section className="bg-blue-500 border-2 border-black p-2 rounded-md m-1 flex flex-row align-middle justify-between">
      <div className="break-words overflow-hidden mr-3">
        <h2 className="text-lg bold border-b border-black">{entry.title}</h2>
        <p className="text-sm ">{entry.details}</p>
      </div>
      {isDashBoardList ? (
        <div className="flex flex-col">
          <ButtonOptions onClick={() => onClickEdit(_id)} title="Edit" />
          <ButtonMove onClick={() => onClickMove(_id)} title="Move" />
          <ButtonTrash onClick={() => onClickDelete(_id)} title="Delete" />
        </div>
      ) : (
        <div className="flex flex-col">
          <ButtonOptions onClick={() => onClickEdit(id)} title="Edit" />
          <ButtonMove onClick={() => onClickMove(id)} title="Move" />
          <ButtonTrash onClick={() => onClickDelete(id)} title="Delete" />
        </div>
      )}
    </section>
  );
}

export default Note;
