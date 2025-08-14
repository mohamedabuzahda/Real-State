import React from "react";
import "../style/Team.css";
import karamImg from "../images/karam.png";
import farg from "../images/faragmohamed.png";
import hazem from "../images/hazemmahmoud.png";
import atta from "../images/mohamedatta.png";
import mohamed from "../images/mohamedabozahda.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Abdelkareem Suhail",
      role: "Computer Engineer",
      img: karamImg,
      linkedin: "https://www.linkedin.com/in/abdalkarim-suhail-500502277/",
      github: "https://github.com/AbdSarabi",
    },
    {
      name: "Farag Mohammed Sherif",
      role: "Computer Engineer",
      img: farg,
      linkedin: "#",
      github: "#",
    },
    {
      name: "Mohamed Atta",

      role: "Computer Engineer",
      img: atta,
      linkedin: "#",
      github: "#",
    },
    {
      name: "Hazem Mahmoud Al-Melli",
      role: "Computer Engineer",
      img: hazem,
      linkedin: "https://www.linkedin.com/in/hazem-al-melli-a0a0992a5/",
      github: "https://github.com/HazemAlMili",
    },
    {
      name: "Mohamed Osama Abuzahda",
      role: "Computer Engineer",
      img: mohamed,
      linkedin: "#",
      github: "#",
    },
    {
      name: "Osama Ramadan",
      role: "Computer Engineer",
      // img: karamImg,
      linkedin: "#",
      github: "#",
    },
  ];

  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="image-container">
              <img src={member.img} alt={member.name} />
              <div className="overlay">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="social-icons">
                  <a href={member.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={member.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
