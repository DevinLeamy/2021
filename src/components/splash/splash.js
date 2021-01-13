import './splash.css';

export function Splash() {
	return (
		<div className="splash-container">
            <div className="splash-center-piece">
                <div className="splash-image"></div>
                <div className="intro-text">
                    Hi, I'm Devin
                    <span className="text-blue" style={{fontSize: "50px"}}>.</span>
                    <br/>
                </div>
                <div className="intro-about">
                    A little bit about me...
                    <ul className="intro-about-list">
                        <li id='about-item-1'>
                            🎓 I'm a 
                            <span className="text-pink"> Computer Science </span>
                            student at the University of Waterloo (class of 2025 represent).
                        </li>
                        <li id='about-item-2'>
                            💻 I'm passionate about solving problems with code.
                            
                            {/* <span className="text-pink"> solving problems </span> */}
                            
                        </li>
                        <li id='about-item-3'>
                            🌱 And, I'm
                            <span className="text-pink"> always </span>
                            looking for ways to improve my skill set and tackle new problems.
                        </li>
                        <li id='about-item-4'>
                            👍 One more thing: I'm currently looking for a summer 2021 
                            <span className="text-pink"> SWE </span> internship (
                            <a href="https://github.com/DevinLeamy/2021/tree/main/src/assets/resume/Resume10.pdf" className="text-blue">resume</a>).                            
                        </li>
                    </ul>
                </div>
            </div>
            <a className='arrow-down' href="#_">˅</a>
		</div>
	);
}

