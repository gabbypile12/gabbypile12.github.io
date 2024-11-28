import { Link } from 'react-router-dom';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function NavBar(){

    const [isMenuOpen, setMenuOpen] = useState(false);
    function myFunction() {
        alert("I am an alert box!");
      }

    return(
        <div>
            <nav className = "bg-white flex items-center justify-between h-14 pr-8 pl-8 px-10">
                <Link to = "/"><h1 className = "text-2xl px-3">Gabrielle Pile</h1></Link>
                <ul className = "flex items-center hidden lg:block ">
                    <Link to = "/"><li className = "inline-block px-3 text-lg">Home</li></Link>
                    <Link to = "/about"><li className = "inline-block px-3 text-lg">About</li></Link>
                    <Link to = "/projects"><li className = "inline-block px-3 text-lg">Projects</li></Link>
                    <Link to = "/contact"><li className = "inline-block px-3 text-xl">Contact</li></Link>
                </ul>
                <div className = "block lg:hidden" onClick = {myFunction}><FontAwesomeIcon icon={faBars} /></div> 

                {/* <div className = "block lg:hidden" onClick = {() => setMenuOpen(!isMenuOpen)}><FontAwesomeIcon icon={faBars} /></div> 
                <div className = {`absolute top 24 left-0 w-full bg-white flex flex-col items-center gap-6 transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}>
                    <ul>
                        <li className = "list-none w-full">Home</li>
                        <li className = "list-none w-full">About</li>
                        <li className = "list-none w-full">Projects</li>
                        <li className = "list-none w-full">Contact</li>
                    </ul>
                </div> */}
               
            </nav>
            
        </div>
    );
}
export default NavBar;