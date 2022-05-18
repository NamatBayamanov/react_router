import classes from "./Logo.module.scss";


function Logo() {
  return ( 
    <>
      <div className={classes.Logo}>
        <h2 className={classes.logo__h2}>
          About React-Router
        </h2>
      </div>
    </>
  );
}

export default Logo;