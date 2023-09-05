import Traktor from "../assets/traktor1.jpeg";
import Traktor1 from "../assets/traktor2.jpeg";
import Traktor2 from "../assets/traktor3.jpeg";
import Traktor3 from "../assets/traktor4.jpeg";

import "../styles/styleOldies.css";



const OldiTraktor = () => {
  return (
    <>
      <h1>Oldtimer Traktoren</h1>
      <div className="container">
        <div className="oldies">
          <img className="pic" src={Traktor} alt="Traktor Oldtimer" />
          <img className="pic" src={Traktor1} alt="Traktor Oldtimer" />
          <img className="pic" src={Traktor2} alt="Traktor Oldtimer" />
          <img className="pic" src={Traktor3} alt="Traktor Oldtimer" />
        </div>
        <button
          onClick={() =>
            window.open(
              "https://de.wikibooks.org/wiki/Traktorenlexikon",
              "_blank"
            )
          }
        >
          <p>Mehr Infos</p>
        </button>
      </div>
    </>
  );
};

export default OldiTraktor;
