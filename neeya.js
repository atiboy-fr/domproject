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
let mark = document.querySelectorAll(".cartcontainer");
let listCart = document.querySelector('.listCart');
const totalAmount = document.querySelector(".totalAmount");
const listArr = [];

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


listCart.addEventListener('click', (e) => {
    if(e.target.classList.contains("decrease")) {
        const mainPrice = parseInt(e.target.parentElement.parentElement.querySelector(".totalPrice span").textContent) / parseInt(e.target.parentElement.querySelector("span:nth-of-type(2)").textContent)
        e.target.parentElement.querySelector("span:nth-of-type(2)").textContent--;
        cartNum.querySelector("p").textContent--;
        e.target.parentElement.parentElement.querySelector(".totalPrice span").textContent = parseInt(e.target.parentElement.parentElement.querySelector(".totalPrice span").textContent) - mainPrice;
        totalAmount.textContent = parseInt(totalAmount.textContent) - parseInt(mainPrice);

        if(cartNum.querySelector("p").textContent <= 0){
            cartNum.querySelector("p").textContent = 0
        }
        
        if(e.target.parentElement.querySelector("span:nth-of-type(2)").textContent == "0") {
            listCart.removeChild(e.target.parentElement.parentElement);
        }
    }
    if(e.target.classList.contains("increase")) {
        const mainPrice = parseInt(e.target.parentElement.parentElement.querySelector(".totalPrice span").textContent) / parseInt(e.target.parentElement.querySelector("span:nth-of-type(2)").textContent)
        e.target.parentElement.querySelector("span:nth-of-type(2)").textContent++;
        e.target.parentElement.parentElement.querySelector(".totalPrice span").textContent = parseInt(e.target.parentElement.parentElement.querySelector(".totalPrice span").textContent) + mainPrice;
        totalAmount.textContent = parseInt(totalAmount.textContent) + parseInt(mainPrice); 
    }
})

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
        const quantity1 = e.target.parentElement.parentElement.parentElement.querySelector(".num-amount").textContent;
        e.target.parentElement.parentElement.parentElement.querySelector(".num-amount").textContent = "0"
        if(products.hasOwnProperty(title)) {
            let sum = 0;
            products[title] = parseInt(quantity1);
            for(let i in products) {
                sum += products[i]
            }
            count.textContent = sum;
        }
        let itemId = e.target.parentElement.parentElement.parentElement.parentElement.id;
        
        secondSec.map(pro => {
            if(pro.id == parseInt(itemId) && quantity1 !== "0") {
                if(listArr.includes(pro.name)) {
                    console.log("Yes")
                    let theOne = "";
                    listCart.querySelectorAll(".cartitem").forEach(list => {
                        if(list.querySelector(".name h2").textContent == pro.name) {
                            theOne = list.querySelector(".name h2");
                        }
                    });
                    console.log(theOne)
                    theOne.parentElement.parentElement.querySelector(".quantity span:nth-of-type(2)").textContent = parseInt(theOne.parentElement.parentElement.querySelector(".quantity span:nth-of-type(2)").textContent) + parseInt(quantity1);

                    totalAmount.textContent = parseInt(totalAmount.textContent) + parseInt(pro.price * parseInt(quantity1));

                    theOne.parentElement.parentElement.querySelector(".totalPrice span").textContent = parseInt(theOne.parentElement.parentElement.querySelector(".totalPrice span").textContent) + (pro.price * parseInt(quantity1));

                    cartNum.querySelector("p").textContent = parseInt(cartNum.querySelector("p").textContent) + parseInt(quantity1);
                } else {
                    listArr.push(pro.name);
                console.log(listArr)
                const cartItem = document.createElement("div");
                cartItem.classList.add("cartitem");
                const image = document.createElement("div");
                image.classList.add("image");
                const name = document.createElement("div");
                name.classList.add("name");
                const totalPrice = document.createElement("div");
                totalPrice.classList.add("totalPrice");
                const quantity = document.createElement("div");
                quantity.classList.add("quantity");
                const img = document.createElement("img");
                img.src = pro.img;
                img.alt = pro.name;
                image.append(img);
                const h2 = document.createElement("h2");
                h2.textContent = pro.name;
                const p = document.createElement("p");
                const priceSpan = document.createElement("span");
                p.textContent = "NGN ";
                priceSpan.textContent = pro.price * parseInt(quantity1);
                totalAmount.textContent = parseInt(totalAmount.textContent) + parseInt(priceSpan.textContent)
                p.append(priceSpan);
                const decSpan = document.createElement("span");
                const incSpan = document.createElement("span");
                const quanSpan = document.createElement("span");
                decSpan.textContent = "-";
                incSpan.textContent = "+";
                decSpan.classList.add("decrease");
                incSpan.classList.add("increase");
                quanSpan.textContent = quantity1;
                quantity.append(decSpan)
                quantity.append(quanSpan)
                quantity.append(incSpan)
                
                name.append(h2);
                totalPrice.append(p);
                cartItem.append(image);
                cartItem.append(name);
                cartItem.append(totalPrice);
                cartItem.append(quantity);
                listCart.append(cartItem);
                }
                
            }
        })
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
    })
}
initApp();



