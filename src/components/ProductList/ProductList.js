import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductList.module.scss";


function ProductList({products}) {


  

  // const product = {products};

  const productItems = Object.keys(products).map(id => (
    <ProductItem key={id} product={products[id]}/>
  ));


  return ( 
    <>
      <div className={classes.ProductList}>
        {productItems}
      </div>
    </>
  );
}

export default ProductList;