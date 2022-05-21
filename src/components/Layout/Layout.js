import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Toolbar from "../Toolbar/Toolbar";
import classes from "./Layout.module.scss";


function Layout({ children }) {

  const [toggle, setToggle] = useState(true);

  function onToggle() {
    setToggle(!toggle);
  };
  return ( 
    <>
      <main className={classes.Layout} id="Layout">
        {/* <Nav/> */}
        {/* <Header/> */}
        <Toolbar menu={onToggle} states={toggle}/>
        <Drawer btn={toggle} menu={onToggle}/>
        <div className="">
        
          <div className={classes.content} id="Layout__With__children" >
            {children}
          </div>
        </div>

        <Footer/>
      </main>
    </> 
  );
}

export default Layout;