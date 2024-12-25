import React, { useState } from "react";
import Card from "./Card";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";
const Testimonials=(props)=>{
    let review=props.review
    const[index,setIndex]=useState(0);
    function leftShiftHandler(){
        if(index===0){
            setIndex(review.length-1);
        }
        else{
            setIndex(index-1);
        }
    }
    function rightShiftHandler(){
        if(index===review.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    function surpriseHandler(){
        setIndex(Math.floor(Math.random()*review.length));
    }
    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-700 hover:shadow-xl"> 
            
                <Card review={review[index]}/>
                <div className="flex text-3xl mt-7 gap-3 text-violet-300 font-bold mx-auto">
                    <button className="cursor-pointer hover:text-violet-500"
                    onClick={leftShiftHandler}>
                    <FaChevronLeft/>
                    </button>

                    <button className="cursor-pointer hover:text-violet-500"
                    onClick={rightShiftHandler}>
                    <FaChevronRight/>
                    </button>
                </div> 

                <div>
                    <button onClick={surpriseHandler} 
                    className="bg-violet-400 hover:bg-violet-500 transition-all 
                    duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-5">
                        Surprise Me
                    </button>
                </div>
            
        </div>
    )
}
export default Testimonials;