import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductList.module.scss";


function ProductList({products}) {


  const productItems = (products).map(product => (
    <ProductItem key={product.productId} product={product}/>
  ));


  return ( 
    <>
      <div className={classes.ProductList}>
        {productItems}
        {productItems}
        {productItems}
      </div>
    </>
  );
}

export default ProductList;