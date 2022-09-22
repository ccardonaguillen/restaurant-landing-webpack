export default function menu() {
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
