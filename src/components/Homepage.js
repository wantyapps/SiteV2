import { Navbar, NavbarItem } from "./Navbar.js";
import "./css/Homepage.css";

export function HomePage() {
	return (
		<div>
			<Navbar>
				<NavbarItem href="/home" text="Home"/>
				<NavbarItem href="/about" text="About"/>
				<NavbarItem href="/links" text="Links"/>
				<NavbarItem href="/api/v1/doc" text="Developer"/>
			</Navbar>
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
