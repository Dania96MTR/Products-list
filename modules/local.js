class LocalStorageHandler {
    constructor(key) {
        this.key = key
    }

    getProductsFromLocalStorage() {
        const storedProducts = localStorage.getItem(this.key)
        if (storedProducts) {
            return JSON.parse(storedProducts)
        }

        return []
    }

    addProductToLocalStorage(product) {
        const currentProducts = this.getProductsFromLocalStorage()
        const uniqueId = Date.now()
        currentProducts.push({ ...product, id: uniqueId })
        this.setProductsToLocalStorage(currentProducts)
    }

    updateProductToLocalStorage(id, updatedDetails) {
        const currentProducts = this.getProductsFromLocalStorage()
        for (let i = 0; i < currentProducts.length; i++) {
            if (currentProducts[i].id === id) {
                currentProducts[i] = { ...currentProducts[i], ...updatedDetails }
                break
            }
        }
        this.setProductsToLocalStorage(currentProducts)
    }

    deleteProductFromLocalStorage(id) {
        const currentProducts = this.getProductsFromLocalStorage()
        const productsAfterDeletion = currentProducts.filter(product => product.id !== id)
        this.setProductsToLocalStorage(productsAfterDeletion)
    }

    setProductsToLocalStorage (products) {
        localStorage.setItem(this.key, JSON.stringify(products))
    }
}

export default LocalStorageHandler
