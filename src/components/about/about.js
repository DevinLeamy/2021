import "./about.css";

export function About() {
    return (
        <div className="about-container"  id="_">
            <div className="about-formula">
                Mission<span className='text-blue'>:</span>
                <div className="about-goal">
                    f(<span className="text-blue">experience</span>) = talent<span style={{fontSize: '25px', color: 'rgb(100, 100, 100)', lineHeight: '55px'}}> ← maximize</span>
                </div>
            </div>
            
            <div className="about-knowledge">
                Here's what I know (now)
            </div>
            <ul className="about-knowledge-list">
                <li><span className='text-light'>Languages: </span>Python, Java, Javascript, HTML, CSS, Typescript, C++</li>
                <li><span className='text-light'>Technologies: </span>Node JS, Express JS, <span className='text-red'>Angular JS</span>, MongoDB, Docker</li>
                <li><span className='text-light'>Hosting platforms: </span>Heroku, Github Pages</li>
                <li><span className='text-light'>Dabbled with: </span>Swift, C#, C, XCode, Pygame, Unity, React<span className='text-blue'> (this site)</span>, and AWS</li>
            </ul>
        </div>
    )
}