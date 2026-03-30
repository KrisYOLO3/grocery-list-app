
import { FaRegTrashAlt } from "react-icons/fa";


export default function GroceryItem({item, onClick, onDelete}){

  return(
    <li className='grocery-item'>
      <input
        type='checkbox'
        checked={item.checked}
        onChange={()=>onClick(item.id)}
      />
      <label className='product' style={{textDecoration: item.checked ? 'line-through' : 'none'}}>{item.name}</label>
      <FaRegTrashAlt  size={30} onClick = {()=>onDelete(item.id)}/>
    </li>
  )

}