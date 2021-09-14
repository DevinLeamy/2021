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
              I'm a 2A CS student at the University of Waterloo 
            </li>
            <li id="about-item-2">
              👋 I'm looking for <span className='text-blue'>Winter 2022</span> internships 👋
            </li>
            <li id="about-item-3">
              Programming is buy and large my favorite thing TODO
            </li>
            <li id="about-item-4">
              And, I'm an avid fan of <span className='text-blue'>deep learning</span>, machine learning, full-stack web development, and a couple of others... 
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
