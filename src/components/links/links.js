import { LinkData } from "./linkdata.js"; 
import "./links.css";

const Links = () => {
  const renderLink = (link) => {
    return (
      <div key={link.url} className="link-container">
        <div className="link-header">{link.name}</div>
        <a alt={link.name} href={link.url} className="link-url"><u>{link.url}</u></a>
      </div>
    );
  };

  const renderLinks = (links) => {
     return links.map(link => renderLink(link));
  };

  return (
    <div className="links-container">
      <div className="links-container-header">Useful <span className="text-blue">or</span> interesting...</div>
      {renderLinks(LinkData)}
    </div>
  );
};

export { Links };
