import React from "react";
import "./index.css";
import Flower1 from "../../assets/image/Flower-1.png";
import Flower2 from "../../assets/image/Flower-2.png";

const InvitationPage = () => {
  return (
    <section className="invite-sec">
      <div className="flower-container-3">
        <img src={Flower1} alt="flower-3" className="flower-3" />
      </div>
      <div className="invite-info">
        <div className="opening">
          <h1>Assalamualaikum Wr. Wb.</h1>
          <p>Tanpa mengurangi rasa hormat, Kamu mengundang</p>
          <p>Bapak/Ibu/Saudara/i pada acara pernikahan kami:</p>
        </div>
        <div className="pengantin-info">
          <h1>Mustika</h1>
          <p>Putri dari Bpk Winarno & Ibu Julaikah</p>
          <h1>&</h1>
          <h1>Wira</h1>
          <p>Putra dari Bpk Winarko & Ibu Julaiyah</p>
        </div>
        <div className="surah">
          <h1>QS. Ar-Rum Ayat 21</h1>
          <p>
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir
          </p>
        </div>
      </div>
      <div className="flower-container-4">
        <img src={Flower2} alt="flower-4" className="flower-4" />
      </div>
    </section>
  );
};

export default InvitationPage;
