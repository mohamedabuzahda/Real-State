import "../style/Home.css";
import { Link } from "react-router-dom";
import villas1 from "../images/villa-1.jpg";
import villas2 from "../images/villa-2.jpg";
import apartments1 from "../images/apartment-1.jpg";
import apartments2 from "../images/apartment-2.jpg";

export default function Home() {
  const text1 = "Rosewood Residences Realty Agency Roundrestaurantcy";
  const text2 = "the buutterfly";
  const text3 = "the best apartments";
  const text4 = "the best villas";
  const nextProjects = "strategies of the Next Projects";

  function animateText(text) {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return (
          <span
            className="letter"
            style={{ "--i": `${index * 0.1}s` }}
            key={index}>
            &nbsp;
          </span>
        );
      } else {
        return (
          <span
            className="letter"
            style={{ "--i": `${index * 0.1}s` }}
            key={index}>
            {char}
          </span>
        );
      }
    });
  }
  return (
    <div className={"home"}>
      <div className={"landing"}>
        <h1>Representing the world’s finest real estate</h1>
        <Link to="/properties">
          <button className={"btn-17"}>
            <span className={"textContainer"}>
              <span className="text">About Us</span>
            </span>
          </button>
        </Link>
      </div>
      <div className={"summary"}>
        <h1 className={"section-title"}>The Evolving World Of Luxury Living</h1>
        <p>
          We are a leading real estate agency with a passion for helping our
          clients find their dream homes. Our team of experts is dedicated to
          providing personalized service and expert guidance throughout the
          buying and selling process.
        </p>
      </div>
      <div className={"home-properties"}>
        <Link to="/properties" className={"project"}>
          <img src={villas1} alt="Property 1" />
          <h1 className="animated-title" id="text-1">
            {animateText(text1)}
          </h1>
          <Link to="/properties">
            <button className={"btn-17"}>
              <span className={"text-container"}>
                <span className={"text"}>View</span>
              </span>
            </button>
          </Link>
        </Link>
        <Link to="/properties" className={"project"}>
          <img src={apartments1} alt="Property 1" />
          <h1>{animateText(text2)}</h1>
          <Link to="/properties">
            <button className={"btn-17"}>
              <span className={"text-container"}>
                <span className={"text"}>View</span>
              </span>
            </button>
          </Link>
        </Link>
        <Link to="/properties" className={"project"}>
          <img src={apartments2} alt="Property 1" />
          <h1>{animateText(text3)}</h1>
          <Link to="/properties">
            <button className={"btn-17"}>
              <span className={"text-container"}>
                <span className={"text"}>View</span>
              </span>
            </button>
          </Link>
        </Link>
        <Link to="/properties" className={"project"}>
          <img src={villas2} alt="Property 1" />
          <h1>{animateText(text4)}</h1>
          <Link to="/properties">
            <button className={"btn-17"}>
              <span className={"text-container"}>
                <span className={"text"}>View</span>
              </span>
            </button>
          </Link>
        </Link>
        <div className={"more-container"}>
          <span></span>{" "}
          <Link to="/properties" className={"more"}>
            see more Projects
          </Link>
        </div>
      </div>
      <Link to="/contact" className={"go-contact"}>
        <h1 className={"section-title"}>{animateText(nextProjects)}</h1>
        <h2>Schedule a Private Consultation With Our Experts</h2>
        <Link to="/contact">
          <button className={"btn-17"}>
            <span className={"text-container"}>
              <span className={"text"}>Inquire</span>
            </span>
          </button>
        </Link>
      </Link>
    </div>
  );
}
