import "./about.css";

export function About() {
  const languages = [
    "Typescript", 
    "C++",
    "Javascript",
    "Java",
    "Python",
    "Racket",
    "HTML",
    "CSS"
  ];
  const technologies = [
    "React",
    "Node JS",
    "Angular",
    "Express",
    "MongoDB",
    "Docker",
    "Pygame",
    "Flask"
  ];
  const hosting = [
    "Heroku",
    "Github Pages"
  ];
  const dabbled = [
    "Swift",
    "C#",
    "C",
    "XCode",
    "Unity",
    "AWS"
  ];
  // Sort
  languages.sort();
  technologies.sort();
  hosting.sort();
  dabbled.sort();
  return (
    <div className="about-container" id="_"> {/* id serves as endpoint for the arrow link */}
      <div className="about-formula">
        Mission<span className="text-blue">:</span>
        <div className="about-goal">
          f(<span className="text-blue">experience</span>) = talent
          <span className="about-goal-max">
            {" "}
            ← maximize
          </span>
        </div>
      </div>

      <div className="about-knowledge">Current skills</div>
      <ul className="about-knowledge-list"> 
        <li className="about-knowledge-list-item">
          <span className="text-light">Languages: </span>
          {languages.join(" - ")}
        </li>
        <li>
          <span className="text-light">Technologies: </span>
          {technologies.join(" - ")}
        </li>
        <li>
          <span className="text-light">Hosting platforms: </span>
          {hosting.join(" - ")}
        </li>
        <li>
          <span className="text-light">Dabbled with: </span>
          {dabbled.join(" - ")}
        </li>
      </ul>
    </div>
  );
}
