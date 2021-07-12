import { NavBar, NavBarItem } from "./Navbar.js";
import "./css/Homepage.css";

export function HomePage() {
	return (
		<div>
			<NavBar>
				<NavBarItem href="/home" text="Home"/>
				<NavBarItem href="/about" text="About"/>
				<NavBarItem href="/links" text="Links"/>
				<NavBarItem href="/api/v1/doc" text="Developer"/>
			</NavBar>
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
