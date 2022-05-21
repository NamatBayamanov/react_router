import classes from "./NavToggle.module.scss";
import { BsList } from "react-icons/bs";






function NavToggle() {
  return ( 
    <>
      <div className={classes.NavToggle}>
        <div className={classes.background}>
          <div className={classes.bs__content}>
            <BsList/>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavToggle;