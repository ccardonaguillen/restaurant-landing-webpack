/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

    main.appendChild(_title());
    main.appendChild(_photo());
    main.appendChild(_info());


    var _title = () => {
        const container = document.createElement("div");
        container.classList.add("title-container");

        const title = document.createElement("h1");
        title.classList.add("title");
        title.textContent = "Luigi's"
        container.appendChild(title);

        const subtitle = document.createElement("h3");
        subtitle.classList.add("subtitle");
        subtitle.textContent = "Home of the authentic<br>italian cuisine in Springfield"
        container.appendChild(subtitle)

        return container
    }

    var _photo = () => {
        const image = document.createElement("img");
        image.setAttribute("src", "./media/building.webp");
        image.setAttribute("alt", "Luigi's photo");
        image.classList.add("picture");
        
        return image
    }

    var _info = () => {
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
        locationInfo.textContent = "123 Fake Street<br>Little Italy, Springfield<br>62701-IL, Illinois<br>USA";
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
        let listElements = ["Monday &ndash; Thursday: 1pm &ndash; 9pm",
                            "Friday &amp; Saturday: 1pm &ndash; 11pm",
                            "Sunday: closed"];
        listElements.forEach(elem => {
            const bullet = document.createElement("li")
            bullet.textContent = elem;
            hoursInfo.appendChild(bullet);
        });
        hours.appendChild(hoursInfo);

        container.append(hours);
        
        return container;
    }
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


const mainContainer = document.getElementById("container");
const navTabs = document.querySelectorAll("nav > div");

navTabs.forEach(tab => {
    tab.addEventListener("click", changeContent)
});

function changeContent(e) {
    console.log(e.target)
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLHNCQUFzQjtBQUNsRSwwQ0FBMEMsc0JBQXNCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDN0VBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkI7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXdlYnBhY2svLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKF90aXRsZSgpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKF9waG90bygpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKF9pbmZvKCkpO1xuXG5cbiAgICB2YXIgX3RpdGxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpdGxlLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTHVpZ2knc1wiXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzdWJ0aXRsZVwiKTtcbiAgICAgICAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBcIkhvbWUgb2YgdGhlIGF1dGhlbnRpYzxicj5pdGFsaWFuIGN1aXNpbmUgaW4gU3ByaW5nZmllbGRcIlxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUpXG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH1cblxuICAgIHZhciBfcGhvdG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9tZWRpYS9idWlsZGluZy53ZWJwXCIpO1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJMdWlnaSdzIHBob3RvXCIpO1xuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpbWFnZVxuICAgIH1cblxuICAgIHZhciBfaW5mbyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBsb2NhdGlvbkhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaW5mby1oZWFkZXJcIik7XG4gICAgICAgIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xuICAgICAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRlcik7XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGxvY2F0aW9uSW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250ZW50XCIpO1xuICAgICAgICBsb2NhdGlvbkluZm8udGV4dENvbnRlbnQgPSBcIjEyMyBGYWtlIFN0cmVldDxicj5MaXR0bGUgSXRhbHksIFNwcmluZ2ZpZWxkPGJyPjYyNzAxLUlMLCBJbGxpbm9pczxicj5VU0FcIjtcbiAgICAgICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25JbmZvKTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGxvY2F0aW9uKTtcblxuICAgICAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBob3Vyc0hlYWRlci5jbGFzc0xpc3QuYWRkKFwiaW5mby1oZWFkZXJcIik7XG4gICAgICAgIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gXCJPcGVuaW5nIGhvdXJzXCI7XG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzSGVhZGVyKTtcblxuICAgICAgICBjb25zdCBob3Vyc0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGhvdXJzSW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250ZW50XCIpO1xuICAgICAgICBsZXQgbGlzdEVsZW1lbnRzID0gW1wiTW9uZGF5ICZuZGFzaDsgVGh1cnNkYXk6IDFwbSAmbmRhc2g7IDlwbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRnJpZGF5ICZhbXA7IFNhdHVyZGF5OiAxcG0gJm5kYXNoOyAxMXBtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdW5kYXk6IGNsb3NlZFwiXTtcbiAgICAgICAgbGlzdEVsZW1lbnRzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgICAgIGJ1bGxldC50ZXh0Q29udGVudCA9IGVsZW07XG4gICAgICAgICAgICBob3Vyc0luZm8uYXBwZW5kQ2hpbGQoYnVsbGV0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzSW5mbyk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChob3Vycyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBob21lIGZyb20gXCIuL2hvbWUuanNcIjtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuY29uc3QgbmF2VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgPiBkaXZcIik7XG5cbm5hdlRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQ29udGVudClcbn0pO1xuXG5mdW5jdGlvbiBjaGFuZ2VDb250ZW50KGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=