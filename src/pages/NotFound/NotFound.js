import classes from "./NotFound.module.scss";
import notFoundImage from "../../assets/notfound.jpg";


function NotFound() {
  return ( 
    <>  
      <div className={classes.NotFound}>
        <div className={classes.background}>
          <div className="container">
            <div className={classes.content}>
              <h2>
                Oops! This page was moved or deleted!
              </h2>
              <img src={notFoundImage} alt="#"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;