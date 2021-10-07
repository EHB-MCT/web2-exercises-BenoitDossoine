'use strict';
let previousOrders;
if (localStorage.getItem("previousOrders") === null) {
    previousOrders = [];
} else {
    previousOrders = JSON.parse(localStorage.getItem("previousOrders"));
}

let dishes = [];
dishes.push({
    id: '1',
    name: 'Burger and french fries',
    price: '18'
});

dishes.push({
    id: '2',
    name: 'Steak and french fries',
    price: '20'
});

dishes.push({
    id: '3',
    name: 'Fish',
    price: '14'
});

dishes.push({
    id: '4',
    name: 'Pasta',
    price: '12'
});

dishes.push({
    id: '5',
    name: 'Dessert',
    price: '7'
});

window.onload = function () {
    console.log("Window is loaded");
    insertfood(dishes);
    let submitBtn = document.getElementById("form");
    submitBtn.addEventListener("submit", function (e) {
        e.preventDefault();
        submitForm();
    });

    let priceBtn = document.getElementById("priceBtn");
    priceBtn.addEventListener("click", () => calculatePrice());
};


function submitForm(event) {
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let order = document.querySelectorAll('input[name="chosenDish"]:checked');
    let orderList = [...order];
    let orderString = "";
    orderList.forEach((orderElement, index) => {
        if (index == 0) {
            orderString += `${orderElement.value}`;
        } else {
            orderString += `/${orderElement.value}`;
        }
    });

    let orderDetails = {
        name,
        email,
        orderString
    };

    printOrder(orderDetails);
    saveOrder(orderDetails);

}

function printOrder(order) {
    let text = `The order for the customer ${order.name} is the following: ${order.orderString}. The customer may be notified by email:  ${order.email}`;
    document.getElementById("recap").innerHTML = text;
}

function insertfood(dishes) {
    if (dishes.length > 0) {
        document.getElementById("orderContainer").innerHTML = "";
        dishes.forEach((dish) => {
            let option = `<input type="checkbox" id="dish${dish.id}" name="chosenDish" value="${dish.name}" price="${dish.price}">
            <label for="dish${dish.id}">${dish.name}</label><br>`;
            document.getElementById("orderContainer").innerHTML += option;
        });
    }
}

function calculatePrice() {
    let totalPrice = 0;
    let order = document.querySelectorAll('input[name="chosenDish"]:checked');
    order.forEach(dish => {
        let price = dish.getAttribute("price");
        totalPrice += parseInt(price);
    });
    let priceContainer = document.getElementById("priceCont");
    priceContainer.innerHTML = `The total price is currently €${totalPrice}.`;
}

function saveOrder(order) {
    previousOrders.push(order);
    console.log(order);
    localStorage.setItem("previousOrders", JSON.stringify(previousOrders));
}
