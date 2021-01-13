import './App.css';
import { Splash } from '../splash/splash';
// import { Navbar } from "../navbar/navbar";
import { About } from "../about/about";
import { Projects } from "../projects/projects";
import { Contact } from "../contact/contact";

function App() {
	return (
		<div>
			{/* <Navbar></Navbar> */}
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
