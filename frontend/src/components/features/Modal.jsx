import TextFieldArea from "../ui/TextFieldArea";
import TextField from "../ui/TextField";
import {
  ButtonConfirm,
  ButtonCancel,
  ButtonLeft,
  ButtonRight,
} from "../ui/Button";

export default function Modal({ children, ...rest }) {
  return (
    <div
      className="w-full h-full bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 flex justify-center items-center"
      onClick={handleCancel}
    >
      <div
        className="flex flex-col border rounded-md bg-blue-700 p-1 w-10/12"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}

// export const TestModal = () => {
//   return (
//     <Modal>
//       <h1>hi</h1>
//     </Modal>
//   );
// };

export function ModalNote({
  text,
  handleTextChange,
  handleConfirm,
  handleCancel,
  ...rest
}) {
  return (
    <div
      className="w-full h-full bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 flex justify-center items-center"
      onClick={handleCancel}
    >
      <div
        className="flex flex-col border rounded-md bg-blue-700 p-1 w-10/12"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <TextField
          name="title"
          value={text.title}
          onChange={handleTextChange}
        />
        <TextFieldArea
          name="details"
          value={text.details}
          onChange={handleTextChange}
        />
        <div className="flex justify-end gap-2">
          <ButtonConfirm onClick={handleConfirm} />
          <ButtonCancel onClick={handleCancel} />
        </div>
      </div>
    </div>
  );
}

export function ModalDelete({
  textTargeted,
  handleConfirm,
  handleCancel,
  ...rest
}) {
  return (
    <div
      className="w-full h-full bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 flex justify-center items-center"
      onClick={handleCancel}
    >
      <div
        className="flex flex-col border rounded-md bg-blue-700 p-1 w-10/12 break-words overflow-hidden"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span className="text-lg p-2 mt-2 mb-12">
          Are you sure you want to delete "{textTargeted.data.title}"?
        </span>
        <div className="flex justify-end">
          <ButtonConfirm onClick={handleConfirm} />
          <ButtonCancel onClick={handleCancel} />
        </div>
      </div>
    </div>
  );
}

export function ModalMove({
  textTargeted,
  handleMoveLeft,
  handleMoveRight,
  handleCancel,
  left,
  right,
  ...rest
}) {
  return (
    <div
      className="w-full h-full bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 flex justify-center items-center"
      onClick={handleCancel}
    >
      <div
        className="flex flex-col border rounded-md bg-blue-700 p-1 w-10/12 break-words overflow-hidden"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span className="text-lg p-2 mt-2 mb-12">
          Where would you like to move "{textTargeted.data.title}"?
        </span>
        <div className="flex justify-around mb-6">
          <div>
            <label>{left}</label>
            <ButtonLeft onClick={handleMoveLeft} />
          </div>
          <div>
            <label>{right}</label>
            <ButtonRight onClick={handleMoveRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

//code below is exactly the same as the above ModalNote. and that name also suits the generic version of this.
//

// export function ModalEdit({text, handleTextChange, handleConfirm, handleCancel}){
//   return (
//     <div className='w-full h-full bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 flex justify-center items-center'>
//     <div className='flex flex-col border rounded-md bg-gray-700 p-1 w-10/12'>
//       <TextField name="title" value={text.title} onChange={handleTextChange}/>
//       <TextFieldArea name="details" value={text.details} onChange={handleTextChange}/>
//       <div className='flex justify-end gap-2'>
//         <ButtonConfirm onClick={handleConfirm}/>
//         <ButtonCancel onClick={handleCancel}/>
//       </div>
//     </div>
//   </div>
//   )
// }
