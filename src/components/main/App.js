import './App.css';
import { useState, useEffect } from "react";
import { Splash } from '../splash/splash';
import { About } from "../about/about";
import { Links } from "../links/links";
import { Projects } from "../projects/projects";
import { Contact } from "../contact/contact";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

// Themes
const DARK = "rgb(29, 29, 29)";
const LIGHT = "rgb(252, 252, 252)";

function App() {
	const [darkMode, setDarkMode] = useState(true);
	useEffect(() => {
		// Set theme
		document.body.style.color = (darkMode)? LIGHT : DARK;
		document.body.style.backgroundColor = (darkMode)? DARK : LIGHT;
	}, [darkMode])
	return (
		<div className="main-container"> 
			{!darkMode && 
				<div className="icon-wrapper" onClick={() => setDarkMode(true)}>
					<WbSunnyIcon style={{fontSize: "40px", color: DARK}} />
				</div>
			}
			{darkMode && 
				<div className="icon-wrapper" onClick={() => setDarkMode(false)}>
					<Brightness2Icon style={{fontSize: "40px", color: LIGHT}} />
				</div>
			}
			<Splash></Splash>
			<About></About>
			<Projects></Projects>
			<Contact></Contact>
      <Links></Links>
		</div>
	);
}

export default App;
