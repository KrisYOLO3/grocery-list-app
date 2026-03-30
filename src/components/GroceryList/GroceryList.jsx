 import GroceryItem from './GroceryItem'
 import './GroceryList.css'

export default function GroceryList({items, handleClick, handleDelete, onClearAll}){
  return(
    <div className= 'grocery-list-wrapper'>
      <ul className= 'grocery-list'>
        {items.map((item)=>
          <GroceryItem key={item.id}
                     item={item}
                    onClick = {handleClick}
                    onDelete= {handleDelete}
                     />
        )}  
      </ul>
      <div className= 'grocery-list-info'> 
        <button className='clear-btn' onClick={onClearAll}>Clear All</button>
        <p >Total items: {items?.length}</p>
      </div>
      

    </div>
    
  )

}