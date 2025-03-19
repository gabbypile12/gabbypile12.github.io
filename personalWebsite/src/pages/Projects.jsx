import NavBar from "../components/NavBar";
//try to use github's api in order to get my projects
//open source projects for my projects
//display as a list
function Projects(){
    return(
        <div>
            <NavBar></NavBar>
            <div className = "min h-screen bg-darkred">
                <h2>Projects</h2>
            </div>
            

        </div>
    );
}

export default Projects;