/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
    const main = document.createElement("div");
    main.setAttribute("id", "contact");

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("contact-container");

    _appendLocation();
    _appendPhone();
    _appendContactInfo();
    _appendContactForm();

    function _appendLocation() {
        const container = document.createElement("div");
        
        const text = document.createElement("p");
        text.classList.add("contact-text");
        text.textContent = "You can find us at"
        container.appendChild(text);

        const locationInfo = document.createElement("p");
        locationInfo.classList.add("info-content");
        locationInfo.innerHTML =
            "123 Fake Street<br>Little Italy, Springfield<br>62701-IL, Illinois<br>USA";

        container.append(locationInfo);

        const hoursInfo = document.createElement("ul");
        hoursInfo.classList.add("info-content");
        let listElements = [
            "Monday &ndash; Thursday: 1pm &ndash; 9pm",
            "Friday &amp; Saturday: 1pm &ndash; 11pm",
            "Sunday: closed",
        ];
        listElements.forEach((elem) => {
            const bullet = document.createElement("li");
            bullet.innerHTML = elem;
            hoursInfo.appendChild(bullet);
        });
        container.appendChild(hoursInfo);

        infoContainer.appendChild(container);
    }

    function _appendPhone() {
        const container = document.createElement("div");

        const text = document.createElement("p");
        text.classList.add("contact-text");
        text.textContent = "Give us a call"
        container.appendChild(text);

        const phoneNum = document.createElement("p");
        phoneNum.classList.add("info-content");
        phoneNum.textContent = "(555)-555-5555";
        container.appendChild(phoneNum);

        infoContainer.appendChild(container);
    }

    function _appendContactInfo() {
        const luigiPhoto = document.createElement("img");
        luigiPhoto.setAttribute("src", "./media/Luigi.webp");
        luigiPhoto.classList.add("luigi-photo")

        infoContainer.appendChild(luigiPhoto);
        main.appendChild(infoContainer);
    }

    function _appendContactForm() {
        const container = document.createElement("div");
        container.classList.add("form-container");

        const text = document.createElement("p");
        text.classList.add("contact-text");
        text.textContent = "Or send us a message"
        container.appendChild(text);

        const contactForm = document.createElement("form");
        contactForm.setAttribute("name", "contact");
        contactForm.setAttribute("autocomplete", "off");

        const name = document.createElement("input");
        name.setAttribute("type", "text");
        name.setAttribute("id", "fullName");
        name.setAttribute("name", "Name");
        name.setAttribute("placeholder", "Name");
        contactForm.appendChild(name);
        

        const email = document.createElement("input");
        email.setAttribute("type", "email");
        email.setAttribute("id", "email");
        email.setAttribute("name", "email");
        email.setAttribute("placeholder", "Email Address");
        contactForm.appendChild(email);

        const phone = document.createElement("input");
        phone.setAttribute("type", "number");
        phone.setAttribute("id", "phone");
        phone.setAttribute("name", "phone");
        phone.setAttribute("placeholder", "Phone Number (optional)");
        contactForm.appendChild(phone);

        const message = document.createElement("textarea");
        message.setAttribute("id", "message");
        message.setAttribute("name", "message");
        message.setAttribute("rows", 5);
        message.setAttribute("placeholder", "Write here your message");
        contactForm.appendChild(message);

        const sendButton = document.createElement("button");
        sendButton.textContent = "Send";
        contactForm.appendChild(sendButton);

        container.appendChild(contactForm);        

        main.appendChild(container);
    }


    return main;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
    const main = document.createElement("div");
    main.setAttribute("id", "home");

    _appendTitle();
    _appendPhoto();
    _appendInfo();


    function _appendTitle() {
        const container = document.createElement("div");
        container.classList.add("title-container");

        const title = document.createElement("h1");
        title.classList.add("title");
        title.innerHTML =
            "<span class='green'>Lu</span><span class='white'>ig</span><span class='red'>i's</span>";
        container.appendChild(title);

        const subtitle = document.createElement("h3");
        subtitle.classList.add("subtitle");
        subtitle.innerHTML =
            "Home of the authentic<br>italian cuisine in Springfield";
        container.appendChild(subtitle);

        main.appendChild(container);
    };

    function _appendPhoto() {
        const image = document.createElement("img");
        image.setAttribute("src", "./media/building.webp");
        image.setAttribute("alt", "Luigi's photo");
        image.classList.add("picture");

        main.appendChild(image);
    };

    function _appendInfo() {
        const container = document.createElement("div");
        container.classList.add("info-container");

        const location = document.createElement("div");
        location.classList.add("location");

        const locationHeader = document.createElement("h3");
        locationHeader.classList.add("info-header");
        locationHeader.textContent = "Location";
        location.appendChild(locationHeader);

        const locationInfo = document.createElement("p");
        locationInfo.classList.add("info-content");
        locationInfo.innerHTML =
            "123 Fake Street<br>Little Italy, Springfield<br>62701-IL, Illinois<br>USA";
        location.appendChild(locationInfo);

        container.append(location);

        const hours = document.createElement("div");
        hours.classList.add("hours");

        const hoursHeader = document.createElement("h3");
        hoursHeader.classList.add("info-header");
        hoursHeader.textContent = "Opening hours";
        hours.appendChild(hoursHeader);

        const hoursInfo = document.createElement("ul");
        hoursInfo.classList.add("info-content");
        let listElements = [
            "Monday &ndash; Thursday: 1pm &ndash; 9pm",
            "Friday &amp; Saturday: 1pm &ndash; 11pm",
            "Sunday: closed",
        ];
        listElements.forEach((elem) => {
            const bullet = document.createElement("li");
            bullet.innerHTML = elem;
            hoursInfo.appendChild(bullet);
        });
        hours.appendChild(hoursInfo);

        container.append(hours);

        main.appendChild(container);
    };

    return main;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu() {
    const main = document.createElement("div");
    main.setAttribute("id", "menu");

    var items = {
        antipasti: [
            {
                photo: "./media/charcuterie.jpg",
                name: "Charcuterie",
                description: "Platter with assorted cheese, jerky, salami and sausage",
            },
            {
                photo: "./media/caprese.jpg",
                name: "Caprese salad",
                description: "Green salad with tomate, mozzarella, zuchini and black olives",
            }
        ],
        pizzas: [
            {
                photo: "./media/salami-pizza.jpg",
                name: "Salami and zucchini",
                description: "Tomato sauce, cheese, chicken, salami, zucchini and tomatoes",
            },
            {
                photo: "./media/salami2-pizza.jpg",
                name: "Salami and black olives",
                description: "Tomato sauce, cheese, salami, black olives and tomatoes",
            },
            {
                photo: "./media/veggies-pizza.jpg",
                name: "Veggies and ham",
                description: "Tomate sauce, cheese assorted veggies and ham",
            },
        ],
        pasta: [
            {
                photo: "./media/pesto.jpg",
                name: "Zuccini pesto",
                description: "Penne pasta with pesto sauce, zucchini, green peas and basil",
            },
            {
                photo: "./media/sausages.jpg",
                name: "Tomato and sausages",
                description: "Pasta with tomato sauce with sausage, tomatoes and green basil",
            },
            {
                photo: "./media/shrimps.jpg",
                name: "Shrimps",
                description: "Spaghetti with shrimps, tomato and chopped parsley",
            },
            {
                photo: "./media/vegetarian.jpg",
                name: "Vegetarian",
                description: "Vegetarian pasta rigatoni with mushrooms and chilli peppers",
            },
        ],
        desserts: [
            {
                photo: "",
                name: "Margarita",
                description: "lo quesea",
            },
            {
                photo: "",
                name: "Margarita",
                description: "lo quesea",
            }
        ]
    };

    _appendSection("antipasti");
    _appendSection("pizzas");
    _appendSection("pasta");

    function _appendSection(name) {
        const sectionHeader = document.createElement("h2");
        sectionHeader.textContent = name;
        sectionHeader.classList.add("menu-section")
        main.appendChild(sectionHeader);

        const sectionContent = document.createElement("div");
        sectionContent.classList.add("section-content");

        const sectionItems = items[name];
        sectionItems.forEach(item => _appendItem(item));

        function _appendItem(item) {
            const container = document.createElement("div");
            container.classList.add("menu-item")

            const image = document.createElement("img");
            image.setAttribute("src", item.photo);
            image.setAttribute("alt", item.name);
            image.classList.add("item-photo");
            container.appendChild(image);

            const itemName = document.createElement("p");
            itemName.classList.add("item-name");
            itemName.textContent = item.name;
            container.appendChild(itemName);

            const itemDesc = document.createElement("p");
            itemDesc.classList.add("item-description");
            itemDesc.textContent = item.description;
            container.appendChild(itemDesc);

            sectionContent.appendChild(container);
        }

        main.appendChild(sectionContent);
};

    return main;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





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
                mainContainer.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
                break;
            case "menu":
                mainContainer.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
                break;
            case "contact":
                mainContainer.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
                break;
        }
    };
})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDQTtBQUNNOzs7QUFHbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsb0RBQUk7QUFDOUM7QUFDQTtBQUNBLDBDQUEwQyxvREFBSTtBQUM5QztBQUNBO0FBQ0EsMENBQTBDLHVEQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLENBQUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy13ZWJwYWNrLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXdlYnBhY2svLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctd2VicGFjay8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcblxuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGFpbmVyXCIpO1xuXG4gICAgX2FwcGVuZExvY2F0aW9uKCk7XG4gICAgX2FwcGVuZFBob25lKCk7XG4gICAgX2FwcGVuZENvbnRhY3RJbmZvKCk7XG4gICAgX2FwcGVuZENvbnRhY3RGb3JtKCk7XG5cbiAgICBmdW5jdGlvbiBfYXBwZW5kTG9jYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdGV4dFwiKTtcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IFwiWW91IGNhbiBmaW5kIHVzIGF0XCJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBsb2NhdGlvbkluZm8uY2xhc3NMaXN0LmFkZChcImluZm8tY29udGVudFwiKTtcbiAgICAgICAgbG9jYXRpb25JbmZvLmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIjEyMyBGYWtlIFN0cmVldDxicj5MaXR0bGUgSXRhbHksIFNwcmluZ2ZpZWxkPGJyPjYyNzAxLUlMLCBJbGxpbm9pczxicj5VU0FcIjtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGxvY2F0aW9uSW5mbyk7XG5cbiAgICAgICAgY29uc3QgaG91cnNJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBob3Vyc0luZm8uY2xhc3NMaXN0LmFkZChcImluZm8tY29udGVudFwiKTtcbiAgICAgICAgbGV0IGxpc3RFbGVtZW50cyA9IFtcbiAgICAgICAgICAgIFwiTW9uZGF5ICZuZGFzaDsgVGh1cnNkYXk6IDFwbSAmbmRhc2g7IDlwbVwiLFxuICAgICAgICAgICAgXCJGcmlkYXkgJmFtcDsgU2F0dXJkYXk6IDFwbSAmbmRhc2g7IDExcG1cIixcbiAgICAgICAgICAgIFwiU3VuZGF5OiBjbG9zZWRcIixcbiAgICAgICAgXTtcbiAgICAgICAgbGlzdEVsZW1lbnRzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1bGxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGJ1bGxldC5pbm5lckhUTUwgPSBlbGVtO1xuICAgICAgICAgICAgaG91cnNJbmZvLmFwcGVuZENoaWxkKGJ1bGxldCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNJbmZvKTtcblxuICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FwcGVuZFBob25lKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC10ZXh0XCIpO1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJHaXZlIHVzIGEgY2FsbFwiXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICBjb25zdCBwaG9uZU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwaG9uZU51bS5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250ZW50XCIpO1xuICAgICAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IFwiKDU1NSktNTU1LTU1NTVcIjtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTnVtKTtcblxuICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FwcGVuZENvbnRhY3RJbmZvKCkge1xuICAgICAgICBjb25zdCBsdWlnaVBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbHVpZ2lQaG90by5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL21lZGlhL0x1aWdpLndlYnBcIik7XG4gICAgICAgIGx1aWdpUGhvdG8uY2xhc3NMaXN0LmFkZChcImx1aWdpLXBob3RvXCIpXG5cbiAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsdWlnaVBob3RvKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYXBwZW5kQ29udGFjdEZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXRleHRcIik7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBcIk9yIHNlbmQgdXMgYSBtZXNzYWdlXCJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGNvbnRhY3RGb3JtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb250YWN0XCIpO1xuICAgICAgICBjb250YWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIik7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZ1bGxOYW1lXCIpO1xuICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJOYW1lXCIpO1xuICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmFtZVwiKTtcbiAgICAgICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZW1haWxcIik7XG4gICAgICAgIGVtYWlsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW1haWxcIik7XG4gICAgICAgIGVtYWlsLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlbWFpbFwiKTtcbiAgICAgICAgZW1haWwuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbWFpbCBBZGRyZXNzXCIpO1xuICAgICAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChlbWFpbCk7XG5cbiAgICAgICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHBob25lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XG4gICAgICAgIHBob25lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGhvbmVcIik7XG4gICAgICAgIHBob25lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwaG9uZVwiKTtcbiAgICAgICAgcGhvbmUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQaG9uZSBOdW1iZXIgKG9wdGlvbmFsKVwiKTtcbiAgICAgICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQocGhvbmUpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZXNzYWdlXCIpO1xuICAgICAgICBtZXNzYWdlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJtZXNzYWdlXCIpO1xuICAgICAgICBtZXNzYWdlLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgNSk7XG4gICAgICAgIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJXcml0ZSBoZXJlIHlvdXIgbWVzc2FnZVwiKTtcbiAgICAgICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cbiAgICAgICAgY29uc3Qgc2VuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHNlbmRCdXR0b24udGV4dENvbnRlbnQgPSBcIlNlbmRcIjtcbiAgICAgICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoc2VuZEJ1dHRvbik7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTsgICAgICAgIFxuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG5cblxuICAgIHJldHVybiBtYWluO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcblxuICAgIF9hcHBlbmRUaXRsZSgpO1xuICAgIF9hcHBlbmRQaG90bygpO1xuICAgIF9hcHBlbmRJbmZvKCk7XG5cblxuICAgIGZ1bmN0aW9uIF9hcHBlbmRUaXRsZSgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2dyZWVuJz5MdTwvc3Bhbj48c3BhbiBjbGFzcz0nd2hpdGUnPmlnPC9zcGFuPjxzcGFuIGNsYXNzPSdyZWQnPmknczwvc3Bhbj5cIjtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZChcInN1YnRpdGxlXCIpO1xuICAgICAgICBzdWJ0aXRsZS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCJIb21lIG9mIHRoZSBhdXRoZW50aWM8YnI+aXRhbGlhbiBjdWlzaW5lIGluIFNwcmluZ2ZpZWxkXCI7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfYXBwZW5kUGhvdG8oKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9tZWRpYS9idWlsZGluZy53ZWJwXCIpO1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJMdWlnaSdzIHBob3RvXCIpO1xuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiKTtcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2FwcGVuZEluZm8oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25cIik7XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGxvY2F0aW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWhlYWRlclwiKTtcbiAgICAgICAgbG9jYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG4gICAgICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGVyKTtcblxuICAgICAgICBjb25zdCBsb2NhdGlvbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbG9jYXRpb25JbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRlbnRcIik7XG4gICAgICAgIGxvY2F0aW9uSW5mby5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCIxMjMgRmFrZSBTdHJlZXQ8YnI+TGl0dGxlIEl0YWx5LCBTcHJpbmdmaWVsZDxicj42MjcwMS1JTCwgSWxsaW5vaXM8YnI+VVNBXCI7XG4gICAgICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uSW5mbyk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChsb2NhdGlvbik7XG5cbiAgICAgICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIik7XG5cbiAgICAgICAgY29uc3QgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGhvdXJzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWhlYWRlclwiKTtcbiAgICAgICAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIk9wZW5pbmcgaG91cnNcIjtcbiAgICAgICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNIZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGhvdXJzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgaG91cnNJbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRlbnRcIik7XG4gICAgICAgIGxldCBsaXN0RWxlbWVudHMgPSBbXG4gICAgICAgICAgICBcIk1vbmRheSAmbmRhc2g7IFRodXJzZGF5OiAxcG0gJm5kYXNoOyA5cG1cIixcbiAgICAgICAgICAgIFwiRnJpZGF5ICZhbXA7IFNhdHVyZGF5OiAxcG0gJm5kYXNoOyAxMXBtXCIsXG4gICAgICAgICAgICBcIlN1bmRheTogY2xvc2VkXCIsXG4gICAgICAgIF07XG4gICAgICAgIGxpc3RFbGVtZW50cy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBidWxsZXQuaW5uZXJIVE1MID0gZWxlbTtcbiAgICAgICAgICAgIGhvdXJzSW5mby5hcHBlbmRDaGlsZChidWxsZXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNJbmZvKTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGhvdXJzKTtcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIHJldHVybiBtYWluO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcblxuICAgIHZhciBpdGVtcyA9IHtcbiAgICAgICAgYW50aXBhc3RpOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGhvdG86IFwiLi9tZWRpYS9jaGFyY3V0ZXJpZS5qcGdcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNoYXJjdXRlcmllXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUGxhdHRlciB3aXRoIGFzc29ydGVkIGNoZWVzZSwgamVya3ksIHNhbGFtaSBhbmQgc2F1c2FnZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwaG90bzogXCIuL21lZGlhL2NhcHJlc2UuanBnXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDYXByZXNlIHNhbGFkXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR3JlZW4gc2FsYWQgd2l0aCB0b21hdGUsIG1venphcmVsbGEsIHp1Y2hpbmkgYW5kIGJsYWNrIG9saXZlc1wiLFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBwaXp6YXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwaG90bzogXCIuL21lZGlhL3NhbGFtaS1waXp6YS5qcGdcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNhbGFtaSBhbmQgenVjY2hpbmlcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUb21hdG8gc2F1Y2UsIGNoZWVzZSwgY2hpY2tlbiwgc2FsYW1pLCB6dWNjaGluaSBhbmQgdG9tYXRvZXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGhvdG86IFwiLi9tZWRpYS9zYWxhbWkyLXBpenphLmpwZ1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU2FsYW1pIGFuZCBibGFjayBvbGl2ZXNcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUb21hdG8gc2F1Y2UsIGNoZWVzZSwgc2FsYW1pLCBibGFjayBvbGl2ZXMgYW5kIHRvbWF0b2VzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBob3RvOiBcIi4vbWVkaWEvdmVnZ2llcy1waXp6YS5qcGdcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZlZ2dpZXMgYW5kIGhhbVwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRvbWF0ZSBzYXVjZSwgY2hlZXNlIGFzc29ydGVkIHZlZ2dpZXMgYW5kIGhhbVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFzdGE6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwaG90bzogXCIuL21lZGlhL3Blc3RvLmpwZ1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiWnVjY2luaSBwZXN0b1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlBlbm5lIHBhc3RhIHdpdGggcGVzdG8gc2F1Y2UsIHp1Y2NoaW5pLCBncmVlbiBwZWFzIGFuZCBiYXNpbFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwaG90bzogXCIuL21lZGlhL3NhdXNhZ2VzLmpwZ1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVG9tYXRvIGFuZCBzYXVzYWdlc1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlBhc3RhIHdpdGggdG9tYXRvIHNhdWNlIHdpdGggc2F1c2FnZSwgdG9tYXRvZXMgYW5kIGdyZWVuIGJhc2lsXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBob3RvOiBcIi4vbWVkaWEvc2hyaW1wcy5qcGdcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNocmltcHNcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTcGFnaGV0dGkgd2l0aCBzaHJpbXBzLCB0b21hdG8gYW5kIGNob3BwZWQgcGFyc2xleVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwaG90bzogXCIuL21lZGlhL3ZlZ2V0YXJpYW4uanBnXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJWZWdldGFyaWFuXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmVnZXRhcmlhbiBwYXN0YSByaWdhdG9uaSB3aXRoIG11c2hyb29tcyBhbmQgY2hpbGxpIHBlcHBlcnNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGRlc3NlcnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGhvdG86IFwiXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJNYXJnYXJpdGFcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJsbyBxdWVzZWFcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGhvdG86IFwiXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJNYXJnYXJpdGFcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJsbyBxdWVzZWFcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH07XG5cbiAgICBfYXBwZW5kU2VjdGlvbihcImFudGlwYXN0aVwiKTtcbiAgICBfYXBwZW5kU2VjdGlvbihcInBpenphc1wiKTtcbiAgICBfYXBwZW5kU2VjdGlvbihcInBhc3RhXCIpO1xuXG4gICAgZnVuY3Rpb24gX2FwcGVuZFNlY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBzZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgc2VjdGlvbkhlYWRlci5jbGFzc0xpc3QuYWRkKFwibWVudS1zZWN0aW9uXCIpXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcik7XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZWN0aW9uQ29udGVudC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1jb250ZW50XCIpO1xuXG4gICAgICAgIGNvbnN0IHNlY3Rpb25JdGVtcyA9IGl0ZW1zW25hbWVdO1xuICAgICAgICBzZWN0aW9uSXRlbXMuZm9yRWFjaChpdGVtID0+IF9hcHBlbmRJdGVtKGl0ZW0pKTtcblxuICAgICAgICBmdW5jdGlvbiBfYXBwZW5kSXRlbShpdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIilcblxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGl0ZW0ucGhvdG8pO1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIGl0ZW0ubmFtZSk7XG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1waG90b1wiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1uYW1lXCIpO1xuICAgICAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgaXRlbURlc2MuY2xhc3NMaXN0LmFkZChcIml0ZW0tZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICBpdGVtRGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xuXG4gICAgICAgICAgICBzZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uQ29udGVudCk7XG59O1xuXG4gICAgcmV0dXJuIG1haW47XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBob21lIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuXG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgbmF2VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgPiBkaXZcIik7XG5cbiAgICBuYXZUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDb250ZW50KVxuICAgIH0pO1xuXG4gICAgY2hhbmdlQ29udGVudChcImhvbWVcIik7XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VDb250ZW50KGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IHR5cGVvZihlKSA9PT0gXCJzdHJpbmdcIiA/XG4gICAgICAgICAgICAgICAgICAgICBlIDpcbiAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZTtcblxuICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgc3dpdGNoICh0YXJnZXQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lbnVcIjpcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdCgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9