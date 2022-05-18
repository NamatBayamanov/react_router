import Logo from "../ui/Logo/Logo";
import classes from "./Nav.module.scss";
import Navitem from "./Navitem/Navitem";


function Nav() {
  return (
    <>
      <div className={classes.Nav}>
        <div className={classes.background}>
          <div className="container">
            <div className={classes.nav__flex}>
            

            <Logo/>

              <ul>
                <Navitem url="/" active >
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


            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default Nav;