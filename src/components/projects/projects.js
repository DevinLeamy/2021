import './projects.css';

export function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-intro-text">
                And, some projects I've made
            </div>
            <div className='project project-1 transform-box-shadow transform-border'>
                <div className="project-name">
                    DDM RUMBLE
                    <span className='project-name-subtext'> - A Thread-Based Group Messaging Platform</span>
                    <span className="project-date">06/2020 - 09/2020</span>
                </div>
                <div className='project-tools'>
                    <span className="project-tool" style={{borderBottom: '2px solid purple'}}>Typescript</span> 
                    <span className="project-tool">Javascript</span>
                    <span className="project-tool">HTML</span>
                    <span className="project-tool">CSS</span>
                    <span className="project-tool">Node JS</span>
                    <span className="project-tool">Angular JS</span>
                    <span className="project-tool">MongoDB</span>
                    <span className="project-tool">Heroku</span>
                    <span className='project-link'>
                        <i className="fas fa-cloud text-blue"></i> <a href="https://github.com/DevinLeamy/DDM">Link to Code</a>
                    </span>
                </div>
            </div>
            <div className='project project-2 transform-box-shadow transform-border'>
                <div className="project-name">
                    Chess.me 
                    <span className='project-name-subtext'> - A Mobile Chess App supporting bluetooth play</span>
                    <span className="project-date">03/2020 - 04/2020</span>
                </div>
                <div className='project-tools'>
                    <span className="project-tool" style={{borderBottom: '2px solid purple'}}>Swift</span>
                    <span className="project-tool">XCode</span>
                    <span className='project-link'>
                        <i className="fas fa-cloud text-blue"></i> <a href="https://github.com/DevinLeamy/Chess.me">Link to Code</a>
                    </span>
                </div>
            </div>
            <div className='project project-3 transform-box-shadow transform-border'>
                <div className="project-name">
                    Pacman
                    <span className='project-name-subtext'> - A Complete Implementation of Pacman</span>
                    <span className="project-date">04/2020 - 04/2020</span>
                </div>
                <div className='project-tools'>
                    <span className="project-tool" style={{borderBottom: '2px solid purple'}}>Python</span>
                    <span className="project-tool">Pygame</span>
                    <span className='project-link'>
                        <i className="fas fa-cloud text-blue"></i> <a href="https://github.com/DevinLeamy/Pacman">Link to Code</a>
                    </span>
                </div>
            </div>
            <div className='project project-4 transform-box-shadow transform-border'>
                <div className="project-name">
                    Classic Control
                    <span className='project-name-subtext'> - Training Agents w/ Deep Q Learning</span>
                    <span className="project-date">01/2021 - 01/2021</span>
                </div>
                <div className='project-tools'>
                    <span className="project-tool" style={{borderBottom: '2px solid purple'}}>Python</span>
                    <span className="project-tool">Open AI Gym</span>
                    <span className='project-link'>
                        <i className="fas fa-cloud text-blue"></i> <a href="https://github.com/DevinLeamy/Classic-Control">Link to Code</a>
                    </span>
                </div>
            </div>
            <div className='project project-5 transform-box-shadow transform-border'>
                <div className="project-name">
                    Route
                    <span className='project-name-subtext'> - A Pathfinding Algorithm Visualizer</span>
                    <span className="project-date">11/2019 - 11/2019</span>
                </div>
                <div className='project-tools'>
                    <span className="project-tool" style={{borderBottom: '2px solid purple'}}>Javascript</span>
                    <span className="project-tool">HTML</span>
                    <span className="project-tool">CSS</span>
                    <span className='project-link'>
                        <i className="fas fa-cloud text-blue"></i> <a href="https://github.com/DevinLeamy/Route">Link to Code</a>
                    </span>
                </div>
            </div>
        </div>
    )
}