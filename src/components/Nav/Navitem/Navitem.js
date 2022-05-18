import { NavLink } from "react-router-dom";
import classes from "./Navitem.module.scss";

function Navitem(props) {

  // const classNames = [];

  // if(actives) {
  //   classNames.push("active");
  // }
  
  // className={classNames.join(" ")}

  return ( 
    <>
      <li className={classes.Navitem}>
        <NavLink to={props.url} active={props.active}>
          {props.children}
        </NavLink>
      </li>
    </>
  );
}

export default Navitem;