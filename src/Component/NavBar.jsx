import "./All_css/NavBar.css";
import burj_logo from "../assets/Image/burj-token.webp";
import { useState,useEffect } from "react";

export const NavBar = ()=>{
    const [isvisible,setisvisible] = useState(false);
    useEffect(() => {
        const navbar = document.querySelector(".nav_navigation_container")
        navbar.classList.add("animateNav");

 },[isvisible]);

    function handleIsVisible(){
        setisvisible(!isvisible);
    }


    return(
    <div className=" nav_container" id="NavBar">
        <h1 className="text-[1.5rem] font-bold flex gap-2 items-center"><img src={burj_logo} alt="token_logo" className=" nav-img h-[3rem]"/>BTDT</h1>

        <div  className={`${isvisible  ?  "none" :"navIsHidden "} nav_navigation_container`}>
           
               <a href="#NavBar" onClick={handleIsVisible}><div className="nav_navigation flex" >Home</div></a>

               <hr />

               <a href="#AboutSection" onClick={handleIsVisible}><div className="nav_navigation flex" >About Us</div></a>

               <hr />

               <a href="#FeatureSection" onClick={handleIsVisible}><div className="nav_navigation flex" >Features</div></a>
             
               <hr />

               <a href="#TokenomicSection" onClick={handleIsVisible}><div className="nav_navigation flex" >Tokenomics</div></a>
               
               <hr />

                <a href="#RoadMapSection" onClick={handleIsVisible}><div className="nav_navigation"  >RoadMap</div></a>

                <hr className="buyNow_navigation" />

                <a href="" className="buyNow_navigation" onClick={handleIsVisible}><div className="nav_navigation"  >Buy Now</div></a>

                
            </div>

            <button className="nav_buy-btn"><span className="text">Buy Token</span></button>

            <div className= "toggle_nav_button" onClick={handleIsVisible}>
                <i className="fa-solid fa-bars fa-xl"></i>        
            </div>

    </div>)     
}