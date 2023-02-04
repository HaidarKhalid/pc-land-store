let productsInCart = JSON.parse(localStorage.getItem("cart"))
let realProductsInCart = [];
let nameProductsInCart = [];
for (let i in productsInCart) {
    realProductsInCart.push(productsInCart[i][0])
}
for (let i in productsInCart) {
    nameProductsInCart.push(productsInCart[i][1])
}
console.log(realProductsInCart)
console.log(nameProductsInCart)

let productsDiv = document.querySelector(".products-div")

for (let i in realProductsInCart) {
    let htmlObject = document.createElement('a')
    htmlObject.innerHTML = realProductsInCart[i]["mainImg"]
    let imgWanted;
    setTimeout(()=> {imgWanted = (htmlObject.getElementsByTagName('a')[0].getElementsByTagName("img")[0].src)},1000)
    
    let iqdOrUsdOut;
    if (realProductsInCart[i]["priceType"] == 1) {
        iqdOrUsdOut = realProductsInCart[i]["price"] + " الف دينار "
    } else {
        iqdOrUsdOut =  realProductsInCart[i]["price"] + " دولار "
    }
    setTimeout(() => {
    document.getElementById('loading').style.display = "none"
    productsDiv.innerHTML += `
    <div class="product">
        <img src='${imgWanted}' alt="test">
        <div class="product-info">
            <h2>${realProductsInCart[i]["name"]}</h2>
            <h2>السعر : ${iqdOrUsdOut}</h2>
        </div>
        <div class="buttons">
            <button onclick="addOther(realProductsInCart[${i}])" class="productButton">
                <iconify-icon icon="material-symbols:add-box" style="color: #3db32a;" width="40"></iconify-icon>
            </button>
            <button onclick="removeOne(realProductsInCart[${i}])" class="productButton">
                <iconify-icon icon="mdi:remove-box" style="color: red;" width="40"></iconify-icon>
            </button>
        </div>
    </div>
    `},1500)
}


/* 
function addToCart(num) {
} */



let aPInfo;
function addOther(allProductInfo) {
    console.log("add")
    console.log(allProductInfo)
    aPInfo = allProductInfo
    
    let htmlObject = document.createElement('a')
    htmlObject.innerHTML = allProductInfo["mainImg"]
    let imgWanted;
    setTimeout(()=> {imgWanted = (htmlObject.getElementsByTagName('a')[0].getElementsByTagName("img")[0].src)},200)
    
    let iqdOrUsdOut;
    if (allProductInfo["priceType"] == 1) {
        iqdOrUsdOut = allProductInfo["price"] + " الف دينار "
    } else {
        iqdOrUsdOut =  allProductInfo["price"] + " دولار "
    }


    setTimeout(()=>{productsDiv.innerHTML += `
        <div class="product">
        <img src='${imgWanted}' alt="test">
        <div class="product-info">
            <h2>${allProductInfo["name"]}</h2>
            <h2>السعر : ${iqdOrUsdOut}</h2>
        </div>
        <div class="buttons">
            <button onclick="addOther(aPInfo)" class="productButton">
                <iconify-icon icon="material-symbols:add-box" style="color: #3db32a;" width="40"></iconify-icon>
            </button>
            <button onclick="removeOne(aPInfo)" class="productButton">
                <iconify-icon icon="mdi:remove-box" style="color: red;" width="40"></iconify-icon>
            </button>
        </div>
    </div>
    `},500)

    let numOfP;
    for (let n in productsInCart) {
        if (allProductInfo["_id"] == productsInCart[n][0]["_id"]) {
            numOfP = (productsInCart[n][1])
        }
    }

    productsInCart.push([allProductInfo, numOfP])
    localStorage.setItem("cart", JSON.stringify(productsInCart))
    realProductsInCart = [];
    nameProductsInCart = [];
    for (let i in productsInCart) {
        realProductsInCart.push(productsInCart[i][0])
    }
    for (let i in productsInCart) {
        nameProductsInCart.push(productsInCart[i][1])
    }
} 

let numOfP;
function removeOne(allProductInfo) {
    console.log(localStorage.getItem("cart"))
    for (let n in productsInCart) {
        if (allProductInfo["name"] == productsInCart[n][0]["name"]) {
            console.log(allProductInfo["name"] + ' hi ' + productsInCart[n][0]["name"])
            numOfP = (productsInCart.indexOf(productsInCart[n]))
            break;
        }
    }
    productsInCart.splice(numOfP, 1)
    console.log(numOfP)
    console.log(productsInCart)
    localStorage.setItem("cart", JSON.stringify(productsInCart))
    productsDiv.innerHTML = ""

    
    realProductsInCart = [];
    nameProductsInCart = [];
    for (let i in productsInCart) {
        realProductsInCart.push(productsInCart[i][0])
    }
    for (let i in productsInCart) {
        nameProductsInCart.push(productsInCart[i][1])
    }

    for (let i in realProductsInCart) {
    
    let htmlObject = document.createElement('a')
    htmlObject.innerHTML = realProductsInCart[i]["mainImg"]
    let imgWanted;
    setTimeout(()=> {imgWanted = (htmlObject.getElementsByTagName('a')[0].getElementsByTagName("img")[0].src)},300)
    
    let iqdOrUsdOut;
    if (realProductsInCart[i]["priceType"] == 1) {
        iqdOrUsdOut = realProductsInCart[i]["price"] + " الف دينار "
    } else {
        iqdOrUsdOut =  realProductsInCart[i]["price"] + " دولار "
    }
    setTimeout(()=> {
    productsDiv.innerHTML += `
    <div class="product">
        <img class="product-image" src='${imgWanted}' alt="test">
        <div class="product-info">
            <h2>${realProductsInCart[i]["name"]}</h2>
            <h2>السعر : ${iqdOrUsdOut}</h2>
        </div>
        <div class="buttons">
            <button onclick="addOther(realProductsInCart[${i}])" class="productButton">
                <iconify-icon icon="material-symbols:add-box" style="color: #3db32a;" width="40"></iconify-icon>
            </button>
            <button onclick="removeOne(realProductsInCart[${i}])" class="productButton">
                <iconify-icon icon="mdi:remove-box" style="color: red;" width="40"></iconify-icon>
            </button>
        </div>
    </div>
    `}, 500)
}
}