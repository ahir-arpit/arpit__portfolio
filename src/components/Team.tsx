import { useState } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./styles/Team.css";

const teamMembers = [
  {
    name: "Member 1",
    role: "Lead Developer",
    image: "https://via.placeholder.com/150",
    bio: "Passionate developer with expertise in React and Node.js. Loves building scalable applications and exploring new technologies.",
    skills: ["React", "Node.js", "TypeScript", "Express"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Member 2",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
    bio: "Creative designer focused on crafting beautiful and intuitive user interfaces. Expert in Figma and design systems.",
    skills: ["Figma", "UI Design", "UX Research", "Adobe XD"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Member 3",
    role: "Project Manager",
    image: "https://via.placeholder.com/150",
    bio: "Experienced project manager dedicated to ensuring smooth workflows and timely delivery of high-quality products.",
    skills: ["Agile", "Scrum", "Project Planning", "Communication"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Member 4",
    role: "Reacherginer",
    image: "https://via.placeholder.com/150",
    bio: "Experienced project manager dedicated to ensuring smooth workflows and timely delivery of high-quality products.",
    skills: ["Agile", "Scrum", "Project Planning", "Communication"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

interface Member {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <div className="team-section" id="team">
      <div className="team-container">
        <h3 className="team-title" data-cursor="disable">
          Our Team
        </h3>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              className="team-card"
              key={index}
              onClick={() => setSelectedMember(member)}
            >
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <div className="team-info">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember &&
        createPortal(
          <div className="profile-modal" onClick={() => setSelectedMember(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedMember(null)}>
                <MdClose />
              </button>
              <div className="modal-header">
                <div className="modal-image-wrapper">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="modal-image"
                  />
                </div>
                <div className="modal-title-info">
                  <h2>{selectedMember.name}</h2>
                  <p>{selectedMember.role}</p>
                </div>
              </div>
              <div className="modal-body">
                <div className="modal-bio">
                  <h3>About</h3>
                  <p>{selectedMember.bio}</p>
                </div>
                <div className="modal-skills">
                  <h3>Skills</h3>
                  <div className="skills-tags">
                    {selectedMember.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="modal-social">
                  <a
                    href={selectedMember.social.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={selectedMember.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={selectedMember.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Team;
