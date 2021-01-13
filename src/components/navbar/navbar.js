import "./navbar.css";

export function Navbar() {
    return (
        <div className="navbar-container">
            {/* <div className="brand-item">Leamy</div> */}
            <div className='nav-item transform-background-color'>About</div>
            <div className='nav-item transform-background-color'>Projects</div>
            <div className='nav-item transform-background-color'>Contact</div>
        </div>
    )
}