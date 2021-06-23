import "./splash.css";

export const Splash = () => {
  return (
    <div className="splash-container">
      <div className="splash-center-piece">
        <div className="splash-image"></div>
        <div className="intro-text">
          Hi, I'm Devin
          <span className="text-blue">
            .
          </span>
          <br />
        </div>
        <div className="intro-about">
          About me
          <ul className="intro-about-list">
            <li id="about-item-1">
              I'm a Computer Science 
              student at the University of Waterloo (class of 2025 represent)
            </li>
            <li id="about-item-2">
              I've been <span className="text-blue">Vim</span><i>ing</i> for a year
            </li>
            <li id="about-item-3">
              Programming is my buyenlarge my favorite thing TODO
            </li>
            <li id="about-item-4">
              And I'm from Calgary, Alberta 
            </li>
          </ul>
        </div>
      </div>
      <a className="arrow-down" href="#_">
        ˅
      </a>
    </div>
  );
};
