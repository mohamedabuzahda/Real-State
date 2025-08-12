import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../style/Team.css";

export default function TeamMember({ name, role, img, linkedin, github }) {
  return (
    <div className="team-card">
      <div className="image-container">
        <img src={img} alt={name} className="team-image" />
      </div>
      <h2 className="team-name">{name}</h2>
      <p className="team-role">{role}</p>
      <div className="team-icons">
        <a href={linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href={github} target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
    </div>
  );
}