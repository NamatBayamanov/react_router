import classes from "./Header.module.scss";


function Header({ children, image, title }) {
  return (
    <>
      <div className={classes.Header}>

        <div className={classes.background} >
          <div className="container">
            <div className={classes.titles} >
              <span>
                {title}
              </span>
              
            </div>
            <div className={classes.flex__container}>

              <div className={classes.img__container}>
                <img src={image} />
              </div>
              <p>
                {children}
              </p>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default Header;