import NavBar from "../components/NavBar";
import BiscuitGreen from "../images/"
function About(){
    return(
        <div className = "h-screen bg-purple">
            <NavBar></NavBar>
            {/* <BiscuitGreen></BiscuitGreen> */}
            <p className = "text-white"> Gabrielle Pile is an asprining Software Engineer from Brooklyn, New York with a BA in Computer Science and a minor in African and Afican American Studies from Brandeis Univeristy. </p>
            <p className = "text-white">Passionate about using technology to improve lives, Gabrielle's work ranges from web development at the West African Research Center in Dakar, Senegal to projects like the Brandeis Black Student Archive.</p>
            <p className = "text-white">Inspired by her Haitain and Bajan hertiage and her Brooklyn upbringning, Gabrielle's colorful bodega-themed website celebrates her roots and reflects her ambitions</p>

            
        </div>
    );
}
export default About;