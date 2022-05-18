import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductList.module.scss";


function ProductList({products}) {

  const product = {};
  return ( 
    <>
      <div className={classes.ProductList}>
        <ProductItem product={product}/>
        <ProductItem product={product}/>
        <ProductItem product={product}/>
      </div>
    </>
  );
}

export default ProductList;