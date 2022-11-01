import React from "react";
import "./index.css";
import Daun1 from "../../assets/image/Leaf-1.png";
import Daun2 from "../../assets/image/Leaf-2.png";
import HeroPage from "../../pages/HeroPage";
import InvitationPage from "../../pages/InvitationPage";

const Leaf = () => {
  return (
    <div>
      <div className="daun-anime">
        <HeroPage />
        <InvitationPage />
        <div className="set">
          <div>
            <img src={Daun1} alt="daun-1" />
          </div>
          <div>
            <img src={Daun2} alt="daun-2" />
          </div>
          <div>
            <img src={Daun1} alt="daun-1" />
          </div>
        </div>
        <div className="set set1">
          <div>
            <img src={Daun1} alt="daun-1" />
          </div>
          <div>
            <img src={Daun2} alt="daun-2" />
          </div>
          <div>
            <img src={Daun1} alt="daun-1" />
          </div>
        </div>
        <div className="set set2">
          <div>
            <img src={Daun1} alt="daun-1" />
          </div>
          <div>
            <img src={Daun2} alt="daun-2" />
          </div>
          <div>
            <img src={Daun1} alt="daun-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaf;
