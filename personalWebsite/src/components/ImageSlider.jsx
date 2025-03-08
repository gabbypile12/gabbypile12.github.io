import { useState,useEffect } from "react";
//First I need to get all my iamges together
import imageOne from '../images/impactlabs.jpg'
import imageTwo from '../images/hackdiversity.jpeg'
import {ArrowBigLeft, ArrowBigRight} from "lucide-react"
import '../image-slider.css'

function ImageSlider(){
    const images = [imageOne, imageTwo]
    const [imageIndex, setImageIndex] = useState(0)
    return(
        <div>
            <div className= "h-full w-full relative border-1 border-solid border-white">
                <img src={images[imageIndex]}></img>
                <button className = "image-button" style = {{left:0}}><ArrowBigLeft></ArrowBigLeft></button>
                <button className = "image-button" style = {{right:0}}><ArrowBigRight></ArrowBigRight></button>
            </div>
            
        </div>

    );
   
}
export default ImageSlider;