const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
}

export function toggleTheme() {
    let theme = localStorage.getItem('data-theme');
    if ( theme === "light" ) {
        changeThemeToDark();
    } else {
        changeThemeToLight();
    }
}