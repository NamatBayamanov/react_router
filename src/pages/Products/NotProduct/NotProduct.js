import classes from "./NotProduct.module.scss";
import notProductImage from "../../../assets/notfound.jpg";


function NotProduct() {
  return ( 
    <>
      <div className={classes.NotProduct}>
        <div className={classes.background}>
          <div className="container">
            <div className={classes.content}>
              <h2>
                Oops! This page was moved or deleted!
              </h2>
              <img src={notProductImage} alt="#"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotProduct;