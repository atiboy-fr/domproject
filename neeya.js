// first we create all our variables that is going to be used for this project
const heart = document.querySelectorAll(".fa-regular");
const increase = document.querySelectorAll(".add");
const decrease = document.querySelectorAll(".minus");
const number = document.querySelectorAll(".num-amount");
const addCart = document.querySelectorAll(".toCart");
const cartNum = document.querySelector(".cartcount");
let iconCart = document.querySelector(".cartbox");
let body = document.querySelector("body");
let closeCart = document.querySelector(".close");
let checkoutcart = document.querySelector(".checkOut");
let listProduct = document.querySelector(".second-sec");
let mark = document.querySelectorAll(".cartcontainer")

let secondSec = [];

// this is where i declared the products and their count this means the amout of products to be purchased 
const products = {
    'Rexina Bracelet' : 0,
    'Saphhire Bracelet' : 0,
    'Alloy Bracelet' : 0,
    "Medusa's Bracelet" : 0,
    'Thinkerbell Jewellery set' : 0,
    "Joanne's Jewellery set" : 0,
    'Saphhire Jewellery set' : 0,
    'Hercules Jewellery set' : 0,
    "Kathrina's Jewellery set" : 0,
}

// this button here is to like a product using eventlistener
heart.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle("fa-solid");
    })
})

// i also declared this for the add button on the product it allows you to add the particular amount of the same product you intend on getting
increase.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const parent = e.target.parentNode;
        parent.querySelector(".num-amount").textContent++
    })
})

// i declared this for the subtract button on the product it allows you to subtract the particular amount of the same product you intend on getting
decrease.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const parent = e.target.parentNode;
        // then i gave it an if statement which makes it impossible for you to subtract once the counter gets to zero
        if (parent.querySelector(".num-amount").textContent > 0) {
            parent.querySelector(".num-amount").textContent--
        }
    })
})

addCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const title = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".pricing h3").textContent;
        const count = document.querySelector("#countcart");
        const quantity = e.target.parentElement.parentElement.parentElement.querySelector(".num-amount").textContent;
        if(products.hasOwnProperty(title)) {
            let sum = 0;
            products[title] = parseInt(quantity);
            for(let i in products) {
                sum += products[i]
            }
            count.textContent = sum;
        }
        
    })
})

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

checkoutcart.addEventListener('click', () => {
    alert('You have to pay 10 billion for charging fee');
})

// function addtoCart() {
//     if(document.querySelector(".cartcontainer"))
// }

// mark.forEach((btn) => {
// btn.addEventListener('click', (event) => {
//     let positionClick = event.target.parentNode.parentNode;
//     if(positionClick.classList.contains('cartcontainer')){
//         let itemproduct_id = positionClick.parentElement.dataset.id;
//        alert(itemproduct_name);
//     }
// })
// })


const initApp = () => {
    fetch('itemproduct.json')
    .then(response => response.json())
    .then(data => {
        secondSec = data;
        addtoCart();
    })
}
initApp();



