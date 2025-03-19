import NavBar from "../components/NavBar";
import Gabrielle from "../images/GabriellePhoto.jpg"
import PhotoThree from "../images/GabbyPhotoThree.jpg"
import Slider from '../components/ImageSlider'
import { useState,useEffect } from "react";
import imageOne from '../images/impactlabs.jpg'
import imageTwo from '../images/hackdiversity.jpeg'

function About() {
    const [theheight, findheight] = useState(0);
    const img = document.getElementById('leftimage');
    const images = [imageOne,imageTwo]
    
    // useEffect

    return (
        <div>
            <NavBar />
            <div className = "h-full bg-blue p-4">
                <div className="mx-auto px-4 pt-10 mt-4">
                    <div className = "flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-start  min h-full bg-blue gap-8">
                        <div className = "w-full lg:w-1/3">
                            <img className= "border-1 border-solid border-white" src = {PhotoThree} id ="leftimage"></img>
                        </div>
                        
                        <div className = "w-full lg:w-1/3 space-y-6 mx-10 pt-10 mt-10">
                            <p className="font-basramele font-normal text-xl text-white tracking-widest">Gabrielle Pile is an aspiring Software Engineer from Brooklyn New York with a B.A. in Computer Science and a minor in African and African American Studies from Brandeis University.</p>
                            <p className="font-basramele font-normal text-xl text-white tracking-widest">Her passion for coding began in high school at Brooklyn Technical High School’s Girls Who Code Club. For her first assignment, she created a website dedicated to her love of music and Brooklyn. Through that experience, she discovered the power of code to bring her passions to life.</p>    
                            <p className="font-basramele font-normal text-xl text-white tracking-widest">Committed to leveraging technology to make a difference, Gabrielle has worked on a range of projects, from web development at the West African Research Center in Dakar, Senegal, to full stack development at the Impact Labs fellowship.</p>
                        </div>
                        <div className = "w-full lg:w-1/3">
                            <Slider images={images}></Slider>
                        </div>
                        

                    </div>

                </div>

            </div>
        </div>
    );
}

export default About;
