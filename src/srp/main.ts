import { Messaging } from './messaging';
import { Order } from './order';
import { Persistency } from './persistency';
import { ShoppingCart } from './shopping-cart';

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'Caderno', price: 9.9 });
shoppingCart.addItem({ name: 'Lápis', price: 1.59 });

const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

console.log(shoppingCart.getItems());
console.log(shoppingCart.total());
console.log(order.getOrderStatus());
order.checkout();
console.log(order.getOrderStatus());
