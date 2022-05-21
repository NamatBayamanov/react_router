import classes from "./Nav.module.scss";
import Navitem from "./Navitem/Navitem";


function Nav() {
  return (  
        <>
              <ul className={classes.Nav}>
                <Navitem url="/" active>
                  Home
                </Navitem>
                <Navitem url="/contacts" >
                  Contacts
                </Navitem>
                <Navitem url="/products">
                  Products
                </Navitem>
                <Navitem url="/faq">
                  FAQ
                </Navitem>
              </ul>
    </>
  );
}

export default Nav;