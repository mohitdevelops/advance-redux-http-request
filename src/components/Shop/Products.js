import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY = [
  {
    id: "p1",
    title: "Mohit",
    price: 6,
    description: "First product",
  },
  {
    id: "p2",
    title: "Goku",
    price: 3,
    description: "Most Powerful Saiyan",
  },
  {
    id: "p3",
    title: "Eren Yeager",
    price: 9,
    description: "The Founding Titan",
  },
  {
    id: "p4",
    title: "Madara Uchiha",
    price: 100,
    description: "The Beast",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {DUMMY.map((el) => (
        <ul key={el.id}>
          <ProductItem
            key={el.id}
            id={el.id}
            title={el.title}
            price={el.price}
            description={el.description}
          />
        </ul>
      ))}
    </section>
  );
};

export default Products;
