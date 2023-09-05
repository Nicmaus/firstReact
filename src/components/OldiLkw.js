import Lkw from "../assets/lkw1.jpeg";
import Lkw1 from "../assets/lkw2.jpeg";
import Lkw2 from "../assets/lkw3.jpeg";
import Lkw3 from "../assets/lkw4.jpeg";

import "../styles/styleOldies.css";


const OldiLkw = () => {
  return (
    <>
      <h1>Oldtimer Lkw's</h1>
      <div className="container">
        <div className="oldies">
          <img className="pic" src={Lkw} alt="Oldtimer Lkw" />
          <img className="pic" src={Lkw1} alt="Oldtimer Lkw" />
          <img className="pic" src={Lkw2} alt="Oldtimer Lkw" />
          <img className="pic" src={Lkw3} alt="Oldtimer Lkw" />
        </div>
        <button
          onClick={() =>
            window.open("https://de.wikipedia.org/wiki/Lastkraftwagen", "_blank")
          }
        >
          <p>Mehr Infos</p>
        </button>
      </div>
    </>
  );
};

export default OldiLkw;
