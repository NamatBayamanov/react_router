import { useParams } from "react-router-dom";
import { getProduct } from "../../../data/Products";
import classes from "./Product.module.scss";

import reactImage from "../../../assets/jsx.jpg";

function Product(props) {

  const params = useParams();
  
  const product = getProduct(params.productId);


  
  return ( 

    <>
      <div className={classes.Product}>
        <div className={classes.background}>
          <div className="container">
              <h2>
              {product.title}
            </h2>
            <div>
              {product.description}
            </div>
          </div>
        </div>
        
      </div>
    </>

  );
}

export default Product;