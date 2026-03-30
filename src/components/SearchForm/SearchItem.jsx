import Input from '../Input'
import './SearchItem.css'
import { CiSearch } from "react-icons/ci";

export default function SearchItem({searchItem, setSearchItem, onSearch}){

  return(
    <form className='forsearch-item' onSubmit={onSearch}>
      <Input type="text"
            id="search-item"
            placeholder="Search item"
            value ={searchItem} 
            onChange={(e)=>setSearchItem(e.target.value)}
            />
      <button className='search-btn'>
        <span className="icon">
          <CiSearch />
        </span>
        Search 
      </button>      
    </form>
  )

}