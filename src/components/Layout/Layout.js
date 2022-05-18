import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import classes from "./Layout.module.scss";


function Layout({ children }) {
  return ( 
    <>
      <main className={classes.Layout} id="Layout">
        <Nav/>
        <Header/>
        <div className="container">
        
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