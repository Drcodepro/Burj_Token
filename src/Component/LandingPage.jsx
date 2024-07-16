import roundShape from "../assets/Image/blackshape.png";
import bg_img from "../assets/Image/lineBg.svg";
import "./All_css/LandingPage.css";
import "./All_css/Button.css";

export const LandingPage = ()=>{
   
    return(
        <div  className="LandingPage  w-[100%] relative flex flex-col justify-center items-start">
            <div className="landingPoster">
            <img src={bg_img} className="landingPosterimg" alt="bg-img"/>
            </div>
            <img src={roundShape} alt="roundShape"  className="landing_shapeRound"/>
            {/* <img src={poster} alt="landing poster"  className="landingPoster"/> */}
            <div className=" landing_info" >
                <h1 className="heading">Welcom to <br />
                    Burj Trading Decentralized Token
                </h1>                
                <p className="para">The platform supports yield farming, allowing users to provide liquidity to trading pairs and earn BTDT as incentives.</p>
            </div>
            <div className="home_button_container">
                <button className="btn">Buy Token</button>
                <button className="btn">WhitePaper</button>
            </div>
        </div>
    )
}