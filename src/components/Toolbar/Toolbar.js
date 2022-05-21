import Nav from "../Nav/Nav";
import NavToggle from "../Nav/NavToggle/NavToggle";
import Logo from "../ui/Logo/Logo";
import classes from "./Toolbar.module.scss";


function Toolbar({menu, states}) {

  return ( 
    <>
      <div className={classes.Toolbar}>
        <div className={classes.background}>
          <div className="container">
            <div className={classes.flex__content}>
              <Logo/>
              <Nav/>
              <NavToggle dropdown={menu} states={states}/>
            </div>
        
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Toolbar;