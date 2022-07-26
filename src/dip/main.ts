import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shopping-cart";
import { NoDiscount } from "./entities/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./entities/customer";

const noDiscount = new NoDiscount()
const shoppingCart = new ShoppingCart(noDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
//const individualCustomer = new IndividualCustomer('Lucas', 'Freitas', '103103111')
const enterpriseCustomer = new EnterpriseCustomer('JL dev', '11111111')
const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer)

shoppingCart.addItem(new Product('Camisa', 49.91))
shoppingCart.addItem(new Product('Caderno', 9.91))
shoppingCart.addItem(new Product('Lapis', 1.59))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)