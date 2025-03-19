import { useState,useEffect } from "react";
//First I need to get all my iamges together
import imageOne from '../images/impactlabs.jpg'
import imageTwo from '../images/hackdiversity.jpeg'
import {ArrowBigLeft, ArrowBigRight} from "lucide-react"
import '../image-slider.css'

//make the images props 
function ImageSlider(props){
    const images = props.images
    const [imageIndex, setImageIndex] = useState(0)
    
    function showNextImage(){
        if(imageIndex+1 >= images.length){
            setImageIndex(0)
        } else{
            setImageIndex(imageIndex+1)
        }
    }
    function showPreviousImage(){
        if(imageIndex - 1 >= 0){
            setImageIndex(imageIndex-1)
        }

    }
    return(
        <div>
            <div className= "h-full w-full relative border-1 border-solid border-white">
                <img src={images[imageIndex]}></img>
                <button onClick =  {showPreviousImage} className = "image-button" style = {{left:0}}><ArrowBigLeft></ArrowBigLeft></button>
                <button onClick = {showNextImage}className = "image-button" style = {{right:0}}><ArrowBigRight></ArrowBigRight></button>
            </div>
            
        </div>

    );
   
}
export default ImageSlider;