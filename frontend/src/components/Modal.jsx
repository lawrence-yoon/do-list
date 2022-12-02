import TextFieldArea from './TextFieldArea'
import TextField from './TextField'
import { ButtonConfirm, ButtonCancel } from './Button'

export function ModalNote({text, handleTextChange, handleConfirmNote, handleClose}){
    return (
      <div className='w-full h-full bg-[rgba(0,0,0,0.5)] absolute top-0 left-0'>      
        <div className='flex flex-col border rounded-md bg-gray-700 p-1 top-[40%] absolute'>
          <TextField name="title" value={text.title} onChange={handleTextChange}/>
          <TextFieldArea name="details" value={text.details} onChange={handleTextChange}/>
          <div className='flex justify-end gap-2'>
            <ButtonConfirm onClick={handleConfirmNote}/>
            <ButtonCancel onClick={handleClose}/>
          </div>
        </div> 
      </div>
    )
}