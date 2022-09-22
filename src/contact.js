export default function contact() {
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
