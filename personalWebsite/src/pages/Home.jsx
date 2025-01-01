// import '../Home.css'
import HomePhoto from '../images/GabriellePilePhoto.jpeg'
import NavBar from '../components/NavBar';
function Home(){
    return(
        <div className=" h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${HomePhoto})` }}>
            <NavBar></NavBar>
        </div>
    );
}
export default Home;