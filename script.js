// 1 завдання
function createProduct(obj, callback) {
    // генеруємо унікальний ідентифікатор для продукту
    const uniqueId = Math.random().toString(36);
    // створюємо новий об'єкт продукту, з унікальним ідентифікатором
    const product = { ...obj, id: uniqueId };
    // викликаємо колбек функцію
    callback(product);
}
// виводимо інформацію про продукти (колбек)
function logProduct(product) {
    console.log('Product:', product);
}
// обчислюємо загальну вартість (колбек)
function logTotalPrice(product) {
    if (product.price && product.quantity) {
        const totalPrice = product.price * product.quantity;
        console.log('Total Price:', totalPrice);
    } else {
        console.log('Price or quantity is missing in the product object.');
    }
}
// отримання значень з полів вводу
function getProductDetails() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const quantity = parseInt(document.getElementById('productQuantity').value);

    return { name, price, quantity };
}
// створюємо і викликаємо функції
function createAndLogProduct() {
    const productDetails = getProductDetails();
    createProduct(productDetails, logProduct);
}

function logTotalPrice() {
    const productDetails = getProductDetails();
    createProduct(productDetails, logTotalPrice);
}

// 3 завдання
const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

const filterMedicines = () => {
    // отримуємо поточну дату
    const currentDate = new Date();

    // отримуємо масив з назвами препаратів та їх датами
    const medicinesArray = Object.entries(medicines);
    console.log("Initial Medicines:", medicinesArray);

    // відфільтровуємо і сортуємо препарати, строк зберігання яких не пройшов
    const validMedicines = medicinesArray.filter(([name, expiryDate]) => expiryDate > currentDate);
    const sortedMedicines = validMedicines.sort(([, dateA], [, dateB]) => dateA - dateB);

    const medicineNames = sortedMedicines.map(([name]) => name);
    console.log("Filtered and Sorted Medicines:", medicineNames);
};

// 5 завдання
// застосування знижки та додавання айді
function applyDiscountAndAddId(fruits) {
    const modifiedFruits = [];
    fruits.forEach((fruit, index) => {
        // нова ціна
        const discountedPrice = fruit.price * 0.8;
        // унікальний айді
        const id = "fruit" + (index + 1);
        // додаємо до масиву
        modifiedFruits.push({
            id: id,
            name: fruit.name,
            price: discountedPrice
        });
    });
    return modifiedFruits;
}
// виведення результату
function displayFruits() {
    const fruits = [
        { name: "apple", price: 200 },
        { name: "orange", price: 300 },
        { name: "grapes", price: 750 },
    ];
    console.log("Fruits: ",fruits)

    const modifiedFruits = applyDiscountAndAddId(fruits);
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "";

    modifiedFruits.forEach(fruit => {
        const item = document.createElement("p");
        item.textContent = `ID: ${fruit.id}, Name: ${fruit.name}, Price: ${fruit.price.toFixed(2)}`;
        resultContainer.appendChild(item);
    });
}

// 7 завдання
class Client {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    set login(newLogin) {
        this.#login = newLogin;
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }
}

// створюємо новий екземпляр класу Client
const client = new Client("example_login", "example@example.com");
// оновлення інформації про клієнта
function updateClient() {
    const newLogin = document.getElementById("loginInput").value;
    const newEmail = document.getElementById("emailInput").value;
    // встановлюємо нові значення для логіна та електронної пошти клієнта
    client.login = newLogin;
    client.email = newEmail;
    // оновлюємо відображення поточної інформації про клієнта
    document.getElementById("currentLogin").textContent = client.login;
    document.getElementById("currentEmail").textContent = client.email;
}

// відображаємо початкові дані про клієнта
document.getElementById("currentLogin").textContent = client.login;
document.getElementById("currentEmail").textContent = client.email;

// 9 завдання 
const tags_array = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

function displayTagCounts() {
    console.log("Tags:", tags_array);
    const tagCount = {};

    // обчислюємо кількість тегів
    tags_array.forEach(tweet => {
        tweet.tags.forEach(tag => {
            tagCount[tag] = (tagCount[tag] || 0) + 1;
        });
    });
    console.log(tagCount);
};

// 10 завдання
function checkBrackets(str) {
    // для відкритих дужок
    const stack = [];
    const brackets = { '(': ')', '{': '}', '[': ']' };

    for (let char of str) {
        // якщо символ відкриваюча дужка, то додаємо в масив
        if (brackets[char]) {
            stack.push(char);
            // якщо закривюча, то перевіряємо відповідність з останньою доданою до масиву дужкою
        } else if (Object.values(brackets).includes(char)) {
            if (brackets[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// функція для перевірки правильності закриття дужок у введеному коді
function checkCode() {
    const codeInput = document.getElementById('codeInput').value;
    const isValid = checkBrackets(codeInput);
    
    console.log(isValid);
}