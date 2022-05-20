import { Link } from "react-router-dom";
import classes from "./ProductItem.module.scss";



function ProductItem({ product }) {

  // console.log(product);


  return (
    <>
      <div className={classes.ProductItem}>
        <div className={classes.flex__content}>



          <main className={classes.page__content}>

            <div className={classes.card}>

              <div className={classes.content}>
                <h2 className={classes.title}>
                  {product.title}
                </h2>
                <p className={classes.copy}>
                  {product.short_description}
                </p>
                <button className={classes.btn}>
                  <Link to={"/products/" + product.productId}>
                    {product.title}
                  </Link>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

    </>
  );
}

export default ProductItem;