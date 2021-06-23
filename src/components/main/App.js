import './App.css';
import { Splash } from '../splash/splash';
import { About } from "../about/about";
import { Projects } from "../projects/projects";
import { Contact } from "../contact/contact";

function App() {
	// document.body.style.color = "rgb(29, 29, 29)"
	// document.body.style.backgroundColor = "rgb(252, 252, 252)"
	return (
		<div> 
			<div>
				<Splash></Splash>
			</div>
			<About></About>
			<Projects></Projects>
			<Contact></Contact>
		</div>
	);
}

export default App;
