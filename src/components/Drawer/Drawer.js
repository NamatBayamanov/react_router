import Nav from "../Nav/Nav";
import NavToggle from "../Nav/NavToggle/NavToggle";
import classes from "./Drawer.module.scss";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function Drawer({btn, menu}) {

  const booleans = btn;
  return ( 
    <>
      <div className={classes.Drawer}>
        <div className={`${classes.background} ${booleans ? `${classes.open}` : "" }`} onClick={menu}>
          <div className={classes.flex__content}>
            <h2>
              Navigation
            </h2>
            <Nav/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;