import Header from "../../components/Header/Header";
import classes from "./Products.module.scss";
import productsImage from "../../assets/products.jpg";
import ProductList from "../../components/ProductList/ProductList";

function Products() {
  const products = {};
  return ( 
    <>
      <div className={classes.Products} id="Pages__Products">
        <div className="container">
              <Header image={productsImage} title="Products">
              We'll keep this tutorial quick and to the point. By the end you'll know the APIs you deal with day-to-day with React Router. After that, you can dig into some of the other docs to get a deeper understanding.

              While building a little bookkeeping app we'll cover:
          </Header>

        <ProductList products={products}/>
        </div>
        
      </div>
    </>
  );
}

export default Products;