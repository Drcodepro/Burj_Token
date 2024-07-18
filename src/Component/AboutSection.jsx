import about_poster from "../assets/Image/about_poster.png";
import "./All_css/AboutSection.css";

export const AboutFeture = ()=>{

    return(
        <div className="AboutSection" id="AboutSection">
            <div className="about_poster_container">
            <img src={about_poster} alt="aout-poster" className="about_poster_img" />
            <button className="btn mt-8">Learn More</button>
            </div>

            <div className="About-info_container">
                <h1 className="about-heading">About Us</h1>
                <p className="about-heading-2">Burj Trading Decentralized Token</p>
                <p className="about-info">BTDT is a BEP-20 compliant token designed to revolutionize the trading ecosystem by integrating decentralized finance (DeFi) principles into traditional trading systems. BTDT aims to provide traders with a secure, transparent, and efficient platform for executing trades while leveraging blockchain technology to enhance trust and reduce intermediaries.</p>

                <button className="btn mt-8">Learn More</button>
            </div>
        </div>
    )
}