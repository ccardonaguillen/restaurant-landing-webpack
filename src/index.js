import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";


(function () {
    const mainContainer = document.getElementById("content");
    const navTabs = document.querySelectorAll("nav > div");

    navTabs.forEach(tab => {
        tab.addEventListener("click", changeContent)
    });

    changeContent("home");

    function changeContent(e) {
        let target = typeof(e) === "string" ?
                     e :
                     e.target.className;

        mainContainer.removeChild(mainContainer.firstChild);

        switch (target) {
            case "home":
                mainContainer.appendChild(home());
                break;
            case "menu":
                mainContainer.appendChild(menu());
                break;
            case "contact":
                mainContainer.appendChild(contact());
                break;
        }
    };
})()