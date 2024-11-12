import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <div class = "bg-white">
            <nav className = "... flex items-center justify-end h-14">
                <ul className = "inline-flex">
                    <Link to = "/"><li className = "px-3">Gabrielle Pile</li></Link>
                    <Link to = "/"><li lassName = "px-3"> Home</li></Link>
                    <Link to= "/about"><li className = "px-3"> About</li></Link>
                    <Link to= "/projects"><li className = "px-3"> Projects</li></Link>
                    <Link to = "/contact"><li className = "px-3"> Contact</li></Link>
                </ul>
            </nav>
            
        </div>
    );
}
export default NavBar;