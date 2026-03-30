import { BsCart4 } from "react-icons/bs";
import './Header.css'

export default function Header() {
  return (
    <header className="app-header">
        <div className="logo-container">
            <span className="logo-icon"><BsCart4 /></span> 
            <div className="logo-text">
                <h3>Grocery List</h3>
                <p>My shopping list</p>
            </div>
        </div>
    </header>
  )
}

