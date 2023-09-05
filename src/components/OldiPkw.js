import Car from "../assets/oldi1.jpeg";
import Car1 from "../assets/oldi2.jpeg";
import Car2 from "../assets/oldi3.jpeg";
import Car3 from "../assets/oldi4.jpeg";

import "../styles/styleOldies.css";

const OldiPkw = () => {
  return (
    <>
      <h1>Oldtimer Autos</h1>
      <div className="container">
        <div className="oldies">
          <img className="pic" src={Car} alt="Oldtimer" />
          <img className="pic" src={Car1} alt="Oldtimer" />
          <img className="pic" src={Car2} alt="Oldtimer" />
          <img className="pic" src={Car3} alt="Oldtimer" />
        </div>
        <button
          onClick={() =>
            window.open("https://de.wikipedia.org/wiki/Oldtimer", "_blank")
          }
        >
          <p>Mehr Infos</p>
        </button>
      </div>
    </>
  );
};

export default OldiPkw;
