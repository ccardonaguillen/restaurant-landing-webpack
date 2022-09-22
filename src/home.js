export default function home() {
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
