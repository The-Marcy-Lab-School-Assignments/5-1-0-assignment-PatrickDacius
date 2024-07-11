import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
    static #allCarts = []
    #cartItems = []

    constructor() {
        this.id = getId()

        ShoppingCart.#allCarts.push(this);
    }
    createItem(name, price) {
        const newItems = new CartItem(name, price)
        this.#cartItems.push(newItems)
        return newItems
    }
    getItems() {
        return [...this.#cartItems]
    }
    removeItem(id) {

    }
    getTotal() {
        return this.#cartItems.reduce((total, item) => total + item.price, 0)
    }
    removeItem(id) {
        this.#cartItems = this.#cartItems.filter(item => item.id !== id);
    }
    static listAll() {
        return [...this.#allCarts]

    }
    static findBy(id) {
        return this.#allCarts.find(cart => cart.id === id)
    }
}

export default ShoppingCart;