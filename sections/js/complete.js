let products = JSON.parse(localStorage.getItem("cart"))
let productsNames = []
for (let i in products) {
    productsNames.push(products[i][1])
}
let productsNamesFinall = ""
for (let i in productsNames) {
    productsNamesFinall +=
    `${productsNames[i]}
`
}
console.log(productsNamesFinall)
document.getElementById("user-products").value = productsNamesFinall
function sendMail() {
    var params = {
        name: document.getElementById("user-name").value,
        location: document.getElementById("user-location").value,
        number: document.getElementById("user-number").value,
        products: document.getElementById("user-products").value,
        message: document.getElementById("user-message").value
    }
    const serviceID = "service_6259wav"
    const templateID = "template_jtoea4q"
    
    emailjs.send(serviceID,templateID,params)
    .then (
        response => {
            document.getElementById('user-name').value = ''
            document.getElementById('user-location').value = ''
            document.getElementById('user-number').value = ''
            document.getElementById('user-products').value = ''
            document.getElementById('user-message').value = ''
            console.log(response)
            alert('تم ارسال الطلب')
        }
    )
    .catch (err=>alert(err))
    document.querySelector(".sendBtn").disabled = true
}