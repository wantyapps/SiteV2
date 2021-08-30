import { FullNavBar } from "./Navbar.js";

export function PageNotFound() {
    return (
        <div>
            <FullNavBar/>
            <center>
                <h1>Ouch... Page not found.</h1>
            </center>
        </div>
    );
}