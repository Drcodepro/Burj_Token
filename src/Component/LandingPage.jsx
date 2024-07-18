import roundShape from "../assets/Image/blackshape.png";
import bg_img from "../assets/Image/lineBg.svg";
import "./All_css/LandingPage.css";
import "./All_css/Button.css";
import { useRef,useEffect } from "react";

export const LandingPage = ()=>{
    const landingref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('landing_animate');
          }
          else{
              entry.target.classList.remove('landing_animate');
          }
        });
      },{ threshold: 0.1 });
  
      if (landingref.current) {
        observer.observe(landingref.current);
      }
  
      return () => {
        if (landingref.current) {
          observer.unobserve(landingref.current);
        }
      };
    }, []);
    return(
        <div  className="LandingPage  w-[100%] relative flex flex-col justify-center items-start">
            <div className="landingPoster">
                <img src={bg_img} className="landingPosterimg" alt="bg-img"/>
            </div>

            <img ref={landingref} src={roundShape} alt="roundShape"  className="landing_shapeRound"/>
            
            <div className="landing_info" >
                <h1 className="heading">Welcome to <br />
                    Burj Trading Decentralized Token
                </h1>                
                <p className="para">The platform supports yield farming, allowing users to provide liquidity to trading pairs and earn BTDT as incentives.</p>
            </div>
            <div ref={landingref} className="home_button_container">
                <button className="btn">Buy Token</button>
                <button className="btn">WhitePaper</button>
            </div>
        </div>
    )
}