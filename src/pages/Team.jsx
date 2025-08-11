import React from "react";
import "../style/Team.css";
import karamImg from "../images/karam.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    { name: "member1", role: "Computer Engineer", img: karamImg, linkedin: "#", github: "#" },
    { name: "Abdalkarim Suhail", role: "Computer Engineer", img: karamImg, linkedin: "https://www.linkedin.com/in/abdalkarim-suhail-500502277/", github: "https://github.com/AbdSarabi" },
    { name: "member3", role: "Computer Engineer", img: karamImg, linkedin: "#", github: "#" },
    { name: "A4", role: "Computer Engineer", img: karamImg, linkedin: "#", github: "#" },
    { name: "5", role: "Computer Engineer", img: karamImg, linkedin: "#", github: "#" },
    { name: "6", role: "Computer Engineer", img: karamImg, linkedin: "#", github: "#" },
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