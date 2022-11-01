import React from "react";
import "./index.css";
import Profil from "../../assets/image/Profil.png";
import Flower1 from "../../assets/image/Flower-4.png";
import Audio from "../../assets/audio/audio.mp3";
import ReactAudioPlayer from "react-audio-player";
import Curved from "../../components/Curved";

const HeroPage = () => {
  return (
    <section className="hero-sec">
      <ReactAudioPlayer
        src={Audio}
        autoPlay
        controls
        loop
        muted
        className="lagu"
      />
      <Curved/>
      <div className="flower-container-1">
        <img src={Flower1} alt="flower-1" className="flower-1" />
      </div>
      <img src={Profil} alt="img-profil" className="profil" />
      <div className="information">
        <h1>Mustika</h1>
        <h1>& Wira</h1>
        <h2>25 | 05 | 2022</h2>
        <p>di mohon kehadirannya</p>
      </div>
      <div className="flower-container-2">
        <img src={Flower1} alt="flower-2" className="flower-2" />
      </div>
    </section>
  );
};

export default HeroPage;
