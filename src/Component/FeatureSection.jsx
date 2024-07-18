import { FeatureBox } from "./HelperComponent/FeatureBox/FeatureBox"
import burj_logo from "../assets/Image/burj-token.webp";
import line_bg from "../assets/Image/lineSmall-bg.png";
import loopShape_black from "../assets/Image/loop_shapeblack.png";
import Tokenomic_img from "../assets/Image/burj-tokenomic-img_new.webp";

import "./All_css/FeatureSection.css";

const FeatureInfo = [{Image:{burj_logo},Name:"Decentralized Trading Platform:",Info:"BTDT powers a decentralized trading platform where users can trade various digital assets without relying on centralized exchanges.The platform offers features such as order matching, liquidity provision, and automated market making, ensuring seamless trading experiences."},
                     {Image:{burj_logo},Name:"Staking and Yield Farming:",Info:"BTDT holders can stake their tokens to earn rewards.The platform supports yield farming, allowing users to provide liquidity to trading pairs and earn BTDT as incentives."},
                     {Image:{burj_logo},Name:"Fee Discounts:",Info:"Users who hold BTDT can enjoy reduced trading fees on the platform.Different tiers of fee discounts are offered based on the amount of BTDT held."},
                     {Image:{burj_logo},Name:"Cross-Chain Compatibility:",Info:"The Burj Trading platform supports cross-chain trading, enabling users to trade assets from different blockchain networks.BTDT acts as a bridge token, facilitating interoperability between various blockchains."},
                     {Image:{burj_logo},Name:"Secure and Transparent:",Info:"Built on the Binance Smart Chain (BEP-20), BTDT benefits from the security and efficiency of one of the leading blockchain networks.All transactions are transparent and can be verified on the blockchain."},
                    ];

export const FeatureSection =()=>{
    return (
        <div className="FeatureSection" id="FeatureSection">
            <h1 className="FeatureSection-heading">Key Features</h1>
            <p className="FeatureSection-info">We Provide Many Features to Our Buyers.</p>

            <div className="Feature-boxes-container">
            <img src={line_bg} alt="" className="line_bg"/>
               {FeatureInfo.map((Feature,index)=><FeatureBox key={index} FeatureImg={Feature.Image} FeatureName={Feature.Name} FeatureInfo={Feature.Info}/>)}

               <img src={loopShape_black} alt="black loop shape" className="loopShape_black" />
            </div>


            {/* Tokenomic section */}

            <div className="tokenomicSection" id="TokenomicSection">

                <h1 className="FeatureSection-heading">Tokenomics</h1>
                <img src={Tokenomic_img} alt="tokenomic graph" className="tokenomic_img" />

                <div className="tokenomic-details">
                    <div className="tokenomc-detail-box"> Total Supply : 1 Billion</div>
                    <div className="tokenomc-detail-box">Name : Burj Trading Token</div>
                    <div className="tokenomc-detail-box">Symbol : BTDT</div>
                    <div className="tokenomc-detail-box">Network : BEP20</div>

                </div>
            </div>

        </div>
    )
}