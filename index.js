function getData() {
    fetch('https://product-manager-api.onrender.com/products')
    .then(response => {
        return response.json()
    })
    .then(responseData => {
        console.log(responseData)
    })
}

getData()
if (localStorage.getItem("cart")) {
    console.log("there before "+ localStorage.getItem("cart"))
} else {
    localStorage.setItem("cart","[]")
}