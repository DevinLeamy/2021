import "./projects.css";
import { projects } from "./project-data";
import CloudIcon from "@material-ui/icons/Cloud";
import { useMediaPredicate } from "react-media-hook";

export const Projects = () => {
  // On a small device
  const small = useMediaPredicate("(max-width: 700px)");

  // Markup project tools
  const renderTools = (tools) => {
    if (small) {
      // Only display two tools on small devices
      tools = tools.slice(0, 2);
    }
    return <>
        <span className="project-tool featured-project-tool">{tools[0]}</span>
        {tools.slice(1).map(tool => {
          return <span className="project-tool">{tool}</span>;
        })}
    </>;
  }  
  // Markup project link
  const renderLink = (link) => {
    return (
      <span className="project-link">
        <CloudIcon className="text-blue cloud-icon" />{" "}
        <a href={link} className="text-light">Link to Code</a>
      </span>
    );
  }
  // Markup project
  const renderProject = (project) => {
    return (
      <div className="project transform-box-shadow transform-border">
        <div className="project-name">
          {project.name}
          <span className="project-name-subtext">
            {` - ${project.subtext}`} 
          </span>
          {/* Only display on large devices */}
          {!small && <span className="project-date">
            {project.endDate}
          </span>}
        </div>
       <div className="project-tools">
          {renderTools(project.tools)}
          {renderLink(project.link)}
        </div>
      </div>
    )
  }

  // Markup list of projects
  const renderProjects = () => {
    return (
      <div className="projects-container">
        <span className="projects-container-header">Projects</span>
        {projects.map(project => renderProject(project))}
      </div>
    );
  }
  return renderProjects();
}
