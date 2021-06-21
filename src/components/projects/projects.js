import "./projects.css";
import { projects } from "./project-data";

export const Projects = () => {
  // Markup project tools
  const renderTools = (tools) => {
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
        <i className="fas fa-cloud text-blue"></i>{" "}
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
          <span className="project-date">
            {project.endDate}
          </span>
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
