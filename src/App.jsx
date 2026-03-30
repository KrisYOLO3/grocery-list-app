import GroceryList from './components/GroceryList/GroceryList'
import AddItem from './components/AddForm/AddItem'
import SearchItem from './components/SearchForm/SearchItem'
import Header from './components/Header/Header'
import './App.css'
import {useState} from 'react'

function App() {

  const [items, setItems] = useState(()=>{
    const savedItems = localStorage.getItem('listItems')
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [newItem, setNewItem] = useState('')
  const [searchItem, setSearchItem] = useState('')
  const [filteredItems, setFilteredItems] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!newItem) return;
    addNewItem(newItem)
    setNewItem('')
  }

  const addNewItem=(item)=>{
    const id = items.length ? items[items.length-1].id +1 : 1;
    const myNewItem = {id, checked: false, name:item };
    const listItems = [...items, myNewItem ];
    setAndSave(listItems)
  }

  const handleClick= (id)=>{
    const listItems = items.map(item => item.id === id ?
      {...item, checked: !item.checked} : item
     )
     setAndSave(listItems)
  }

  const handleDelete = (id)=>{
    const listItems = items.filter(item=> item.id !==id);
    setItems(listItems)
  }

  const setAndSave = (listItems)=>{
    setItems(listItems)
    localStorage.setItem('listItems', JSON.stringify(listItems))
  }
 
  const searchItems = (searchItem)=>{
    const listItems = items.filter( (item)=> item.name.toLowerCase().includes(searchItem.toLowerCase()))
    setFilteredItems(listItems)
  }

  const handleSubmitSearch= (e)=>{
    e.preventDefault();
    if (!searchItem) return;
    searchItems(searchItem);
    setSearchItem("")
  }

  const handleClearAll = ()=>{
    setItems([]);
    localStorage.removeItem('listItems');
  }


  return (
    <div className='content'>
      <Header />
      <AddItem  newItem={newItem}
                onSetItem = {setNewItem}
                onAddItem = {addNewItem}
                onSubmit = {handleSubmit}
      />
      <SearchItem searchItem={searchItem} 
                  setSearchItem= {setSearchItem}
                  onSearch = {handleSubmitSearch}
      />

      {items?.length >0  && <GroceryList 
                                items={filteredItems?.length > 0 ? filteredItems : items}
                                setItems ={setItems}
                                handleClick = {handleClick}
                                handleDelete={handleDelete}
                                onClearAll = {handleClearAll}
      />}
      
    </div>
    
  )
}

export default App
