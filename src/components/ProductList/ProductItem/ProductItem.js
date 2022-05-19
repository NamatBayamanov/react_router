import { Link } from "react-router-dom";
import classes from "./ProductItem.module.scss";



function ProductItem({ product }) {


  return (
    <>
      <div className={classes.ProductItem}>
        <div className={classes.flex__content}>



          <main className={classes.page__content}>

            <div className={classes.card}>

              <div className={classes.content}>
                <h2 className={classes.title}>
                  Mountain View
                </h2>
                <p className={classes.copy}>
                  Seriously, straight up, just blast off into outer space today
                </p>
                <button className={classes.btn}>
                  Book Now
                </button>
              </div>
            </div>
          </main>




          <div className={classes.img__container}>
            <img src={product.image} alt="#"/> 
          </div>
          <section>
            <Link to="/">
              {product.title}
            </Link>          
            <div className={classes.price}>
              ${product.price}
            </div>
          </section> 






        </div>
      </div>

    </>
  );
}

export default ProductItem;