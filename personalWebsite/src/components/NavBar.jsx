import { Link } from 'react-router-dom';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

function NavBar(){

    const [isMenuOpen, setMenuOpen] = useState(false);
    function menu(){
        setMenuOpen(!isMenuOpen);
        // alert(isMenuOpen);
    }
    return(
        <div>
            <nav className = "bg-white flex items-center justify-between h-16 pr-8 pl-8 px-10">
                <h1 id = "navBrand" className = "font-ten text-2xl sm:text-4xl md:text-5xl  px-3 p-7"><Link to = "/">Gabrielle Pile &#127469;&#127481; &#127463;&#127463;</Link></h1>
                <ul className = "flex items-center hidden lg:block ">
                    <li className = "inline-block px-3  font-robinez text-2xl"><Link to = "/">Home</Link></li>
                    <li className = "inline-block px-3 font-robinez  text-2xl"> <Link to = "/about">About</Link></li>
                    <li className = "inline-block px-3 font-robinez  text-2xl"> <Link to = "/projects">Projects</Link></li>
                    <li className = "inline-block px-3 font-robinez  text-2xl"><Link to = "/contact">Contact</Link></li>
                </ul>
                <div className = "block lg:hidden" onClick = {menu}><FontAwesomeIcon icon={faBars} /></div> 
               

                {isMenuOpen && <div className="absolute top-0 left-0 xl:hidden flex flex-col items-center gap-8 w-full bg-white mt-16 p-3  ">
                    <ul className = "">
                        <li id="dropDown" className = "w-full font-robinez text-2xl sm:text-3xl "><Link to = "/">Home</Link></li>
                        <li id="dropDown" className = "w-full font-robinez text-2xl sm:text-3xl"> <Link to = "/about">About</Link></li>
                        <li id="dropDown" className = "w-full font-robinez text-2xl sm:text-3xl"><Link to = "/projects">Projects</Link></li>
                        <li id="dropDown"className = "w-full font-robinez text-2xl sm:text-3xl"><Link to = "/contact">Contact </Link></li>
                    </ul>
                </div>}
               
            </nav>
            
        </div>
    );
}
export default NavBar;