/*import LocalStorageHandler from "./local-storage.js"
 const productsStorageHandler = new LocalStorageHandler("products")
 */

class Product{
    constructor(productTitle , productPrice , id = Date.now()){
       this.productTitle = productTitle 
       this.productPrice = productPrice
       this.id = id
    }
}

export default Product