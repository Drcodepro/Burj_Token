import React from "react";
import "./All_css/RoadMap.css";

const RoadMap = () => {
  return (
    <div className="RoadMapSection">
      <h1 className="roadmap_heading">RoadMap</h1>

      <div className="outer_roadmap_container">
        <div className="roadmap_points_container ">

            <div className="roadmap_point point-box-anim">
                <div className="roadmap_info">
                  <p className=" point_heading  font-semibold w-fit">
                    PHASE 1
                  </p>
                  <div className="roadmap_info_points">
                    <p>Launch of Burj Trading website and community building.</p>
                    <p>Initial Token Offering (ITO) for BTDT.</p>
                  </div>
                </div>
                <div className="dotLine"></div>
            </div>

            <div className="roadmap_point point-box-anim">
                <div className="roadmap_info">
                  <p className="point_heading text-2xl font-semibold w-fit">
                    PHASE 2
                  </p>
                  <div className="roadmap_info_points">
                    <p>Development and beta testing of the decentrapzed trading platform.</p>
                    <p>psting BTDT on major decentrapzed exchanges (DEXs).</p>
                  </div>
                </div>
                <div className="dotLine"></div>
            </div>

            <div className="roadmap_point point-box-anim">
                <div className="roadmap_info">
                  <p className=" point_heading text-2xl font-semibold w-fit">
                    PHASE 3
                  </p>
                  <div className="roadmap_info_points">
                    <p>Fdivl launch of the Burj Trading platform.</p>
                    <p>Introduction of staking and yield farming features.</p>
                  </div>
                </div>
                <div className="dotLine"></div>
            </div>

            <div className="roadmap_point point-box-anim">
                <div className="roadmap_info">
                  <p className="point_heading text-2xl font-semibold w-fit">
                    PHASE 4
                  </p>
                  <div className="roadmap_info_points">
                    <p>Implementation of governance mechanisms.</p>
                    <p>Expansion of cross-chain trading capabipties.</p>
                  </div>
                </div>
                <div className="dotLine"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
