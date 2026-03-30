import {useRef} from 'react'
import Input from '../Input'
import './AddItem.css'
import { FaPlus } from "react-icons/fa6";

export default function AddItem({newItem, onSetItem, onSubmit}){
  const inputRef = useRef();


  return(
    <form className='form-add-item' onSubmit={onSubmit}>
      <Input type="text"
            id="add-item"
            ref = {inputRef}
            placeholder="Add new item"
            required
            autoFocus
            value ={newItem} 
            onChange={(e)=>onSetItem(e.target.value)}
            />
      <button className='add-btn 'onClick = {()=>inputRef.current.focus()}>
        <span className="icon">
          <FaPlus/>
        </span>
        Add 
      </button>      
    </form>
  )
  
}