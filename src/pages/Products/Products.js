import Header from "../../components/Header/Header";
import classes from "./Products.module.scss";
import productsImage from "../../assets/products.jpg";
import ProductList from "../../components/ProductList/ProductList";
import vueImage from "../../assets/vue.jpg";

function Products() {

  const products = [
    {
      title: "It is ProductItem",
      price: "10",
      image: vueImage,
    },
    {
      title: "It is ProductItem2",
      price: "16",
      image: vueImage,
    },
  ];
  
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