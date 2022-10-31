import { EnterpriseCustomer, IndividualCustomer } from './entities/customer';
import { TenPercentDiscount } from './entities/discount';
import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Rodrigo',
  'Gomes',
  '181.181.181-18',
);
const enterpriseCustomer = new EnterpriseCustomer('Rodrigo SA', '999999999999');
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer,
);

console.log(shoppingCart.getItems());
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.getOrderStatus());
order.checkout();
console.log(order.getOrderStatus());
