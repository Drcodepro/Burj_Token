import "./All_css/Footer.css";
import burj_logo from "../assets/Image/burj-token.webp";
import blue_loop from "../assets/Image/loop_shape_blue.png";


import facebook_icon from '../assets/icon/socialMedia/facebook_white.png';
import insta_icon from '../assets/icon/socialMedia/instagram_white.png';
import twitter_icon from '../assets/icon/socialMedia/twitter_white.png';
import youtube_icon from '../assets/icon/socialMedia/youtube_white.png';
import mail_icon from '../assets/icon/socialMedia/email_white.png';
import telegram_icon from '../assets/icon/socialMedia/telegram_white.png';


export default function Footer() {
  return (
    <div className="Home_footer_section" id="footer">

        <img src={blue_loop} alt="blue loop png"  className="blueLoop_img"/>

      <div className="footer_mainContent">
        <div className="Home_footer_info">
          <div className="Home_Footer_logo_container">
           <img src={burj_logo}  loading="lazy" alt="" />
           <h1>BTDT</h1>
          </div>
          <div className="footer_info">The Burj Trading Decentralized Token (BTDT) represents a significant advancement in the integration of blockchain technology with trading systems.</div>
        </div>

        <div className="Important">
          <h2>Tabs</h2>
          <a href="#NavBar"><p>Home</p></a>
          <a href="#AboutSection"><p>About Us</p></a>
          <a href="#FeatureSection"><p>Features</p></a>
          <a href="#TokenomicSection"><p>Tokenomics</p></a>
          <a href="#RoadMapSection"><p>RoadMap</p></a>
        </div>

        <div className="Important">
          <h2>Important</h2>
          <a href=""><p>Buy Now</p></a>
          <a href=""><p>WhitePaper</p></a>
        </div>


        <div className="contact_us">
          <div className="social_media_icons">
            <a href=""><img src={mail_icon} alt="" /></a> 
            <a href=""><img src={facebook_icon} alt="" /></a> 
            <a href=""><img src={insta_icon} alt="" /></a> 
            <a href=""><img src={twitter_icon} alt="" /></a>
            <a href=""><img src={telegram_icon} alt="" /></a> 
            <a href=""><img src={youtube_icon} alt="" /></a> 
          </div>
        </div>

      </div>

      <hr />

      <div className="footer_rights">

        <div className="rights">
          <p>BTDT@2024. All rights reserved </p>
        </div>
      </div>
    </div>
  );
}
