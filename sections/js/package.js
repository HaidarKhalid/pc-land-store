// get products

const productsDiv = document.querySelector(".products-div")
let headphones = []
getProducts()
async function getProducts() {
    let response = await fetch("https://product-manager-api.onrender.com/products")
    let data = await response.json()
    for (let i in data) {
        if (data[i]["type"] == "package") headphones.push(data[i])
    }
    console.log(headphones)
    document.getElementById("loading").style.display = "none"
    for (let x in headphones) {
        let iqdOrUsdOut;
        if (headphones[x]["priceType"] == 1) {
            iqdOrUsdOut = headphones[x]["price"] + " الف دينار "
        } else {
            iqdOrUsdOut =  headphones[x]["price"] + " دولار "
        }
        let htmlObject = document.createElement('a')
        htmlObject.innerHTML = headphones[x]["mainImg"]
        let imgWanted = (htmlObject.getElementsByTagName('a')[0].getElementsByTagName("img")[0])
        productsDiv.innerHTML += `
        <div onclick="showProduct(${x})" class="product">
        <div class="product-image product-img-${x}"></div>
        <div class="product-info">
            <h3 class="name">${headphones[x]["name"]}</h3>
            <h4>السعر : <span class="product-price">${iqdOrUsdOut}</span></h4>
            <h4>رقم المنتج : <span class="product-number">${headphones.indexOf(headphones[x]) + 1}</span></p>
        </div>
        </div>
        `
        document.querySelector(`.product-img-${x}`).style = `background-image: url(${imgWanted.src})`
    }
}

// click on product
let mainClickDiv = document.querySelector(".product-click")
let blurDiv = document.querySelector(".background-blur")
function showProduct(num) {
    let iqdOrUsd;
    if (headphones[num]["priceType"] == 1) {
        iqdOrUsd = headphones[num]["price"] + " الف دينار عراقي "
    } else {
        iqdOrUsd =  headphones[num]["price"] + " دولار امريكي "
    }
    let linkY;
    if (headphones[num]["youtubeReview"] != "") {
        linkY = `
        <br>
    <a class="product-link" target="_blank" href="${headphones[num]["youtubeReview"]}">
    <iconify-icon icon="mdi:youtube" style="color: #3db32a;" width="40"></iconify-icon>
    <br> 
    مشاهدة مراجعة للمنتج على اليوتيوب
    </a> 
    <br>
    <br>
        `
    } else {linkY = "<br>"}

    let linkW;
    if (headphones[num]["productWebsite"] != "") {
        linkW = `
        <br>
    <a class="product-link" target="_blank" href="${headphones[num]["productWebsite"]}">
    <iconify-icon icon="mdi:web" style="color: #3db32a;" width="40"></iconify-icon>
    <br> 
    الذهاب الى موقع المنتج
    </a> 
    <br>
    <br>
        `
    } else {linkW = "<br>"}
    mainClickDiv.innerHTML = `
    <iconify-icon class="esc" onclick="escProduct()" icon="quill:escape" style="color: white;" width="40"></iconify-icon>
    <div class="product-image-click">
        ${headphones[num]["mainImg"]}
    </div>
    <h1>${headphones[num]["name"]}</h1>
    <h2>السعر : ${iqdOrUsd}</h2>
    <h2>الضمان : ${headphones[num]["warranty"]}</h2>
    <h3>الحالة : ${headphones[num]["productStatus"]}</h3>
    <br>
    <br>
    <h4 class="product-description">وصف المنتج: ${headphones[num]["description"]}</h4>
    ${linkY}
    ${linkW}
    <br>
    <button class="addToCart" onclick="addToCart(${num})">
    <iconify-icon icon="ic:baseline-add-shopping-cart" style="color: #3db32a;" width="80"></iconify-icon>
    <h4>اضافة الى عربة التسوق</h4>
    </button>  
    `
    mainClickDiv.style.display = "block"
    blurDiv.style.display = "block"
}

function escProduct() {
    mainClickDiv.innerHTML = ""
    mainClickDiv.style.display = "none"
    blurDiv.style.display = "none" 
}


if (localStorage.getItem("cart")) {
} else {
    localStorage.setItem("cart","[]")
}

let cart;
function addToCart(num) {
    cart = JSON.parse(localStorage.getItem('cart'))
    cart.push([headphones[num], `المنتج رقم ${num + 1} في قسم البكجات`])
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(localStorage.getItem('cart'))
    alert("تم اضافة المنتج الى السلة")
}
