import { FullNavBar } from "./Navbar.js";
import "./css/Homepage.css";

export function HomePage() {
	return (
		<div>
			<FullNavBar/>
			<center>
				<h1>We build software.</h1>
				<h2>Software?</h2>
				<ul className="SoftwareUL">
					<li><a href="https://github.com/wantyapps/SiteV2">This site!</a></li>
				</ul>
			</center>
		</div>
	);
}
