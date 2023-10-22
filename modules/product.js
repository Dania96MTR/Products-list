class Product {
    constructor(title, price, id = Date.now()) {
        this.title = title
        this.price = price
        this.id = id
    }
    
}

export default Product