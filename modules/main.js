import LocalStorageHandler from "./local.js"
import Product from "./product.js"

const productsStorageHandler = new LocalStorageHandler("products")

const addProduct = document.querySelector(".add-product")
const enterProduct = document.querySelector(".enter-product")
const enterPrice = document.querySelector(".enter-price")
const btn = document.querySelector(".add")
const total = document.querySelector(".total")
const noItem = document.querySelector(".no-item")



const products = productsStorageHandler.getProductsFromLocalStorage()
/* if(productsStorageHandler.getProductsFromLocalStorage()){
    products.map(product => {
        Addproduct(product)
        console.log(product)
        
    })
} */

const createNewProduct = (title, price, id) => {
    const newProduct = new Product(title, price, id)
    console.log(newProduct)

    products.push(newProduct)
    products.map(product => {
        Addproduct(product)
        
        
    })
    console.log(products)
    productsStorageHandler.addProductToLocalStorage(newProduct)
    /* Addproduct(newProduct)
    addition(price) */
}
btn.addEventListener("click", () => {
    createNewProduct(enterProduct.value, enterPrice.value, Date.now())
    enterPrice.value = ""
    enterProduct.value = ""
})
function Addproduct(product) {
    let div = document.createElement("div")
    div.setAttribute("class", "the-product")
    div.setAttribute("id", product.id)
    let p1 = document.createElement("p")
    p1.innerHTML = `${product.title}`
    let p2 = document.createElement("p")
    p2.innerHTML = `${product.price}`
    let p3 = document.createElement("p")
    p3.setAttribute("class", "x")
    p3.innerHTML = "x"
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    addProduct.appendChild(div)




}
addProduct.addEventListener("click", (e) => {
    const hasclass = e.target.classList.contains("x")
    if (hasclass) {
        productsStorageHandler.deleteProductFromLocalStorage(e.target.parentElement.getAttribute("id")) 
        e.target.parentElement.remove();
/*         noItem.style.display = "block"
 */       
       

    }


    

})

function addition(price) {
    price=0
    const count = [price]
    count.forEach(price => {
        price += price
        total.innerHTML = `Total Price:${price}`

    })


}