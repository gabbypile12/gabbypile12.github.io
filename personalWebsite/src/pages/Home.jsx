// import '../Home.css'
import homePhoto from '../images/GabriellePilePhoto.jpeg'
import NavBar from '../components/NavBar';
function Home(){
    return(
        <div className=" h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${homePhoto})` }}>
            <NavBar></NavBar>
        </div>
    );
}
export default Home;