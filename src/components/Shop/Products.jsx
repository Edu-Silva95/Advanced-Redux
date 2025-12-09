import ProductItem from './ProductItem.jsx';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Item 1',
    price: 6,
    description: 'This is a first product - amazing!'
  },
  {
    id: 'p2',
    title: 'Item 2',
    price: 6,
    description: 'This is a second product - also amazing!'
  },
  {
    id: 'p3',
    title: 'Item 3',
    price: 6,
    description: 'This is a third product - incredible!'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
      ))}
      </ul>
    </section>
  );
};

export default Products;
