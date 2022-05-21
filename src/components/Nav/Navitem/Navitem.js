import { NavLink } from "react-router-dom";
import classes from "./Navitem.module.scss";

function Navitem(props) {

  const classNames = [classes.Navitem];

  if(props.active) {
    classNames.push("active");
  }
  
  

  return ( 
    <>
      <li className={classNames.join(" ")}>
        <NavLink to={props.url} active={props.active}>
          {props.children}
        </NavLink>
      </li>
    </>
  );
}

export default Navitem;