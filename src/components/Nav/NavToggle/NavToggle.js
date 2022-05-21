import classes from "./NavToggle.module.scss";
import { BsList } from "react-icons/bs";






function NavToggle({dropdown}) {

  return ( 
    <>
      <div className={classes.NavToggle} >

        <div className={classes.background}>
          <div className={classes.bs__content} onClick={dropdown}>
            <BsList/>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavToggle;