import Header from "../../components/Header/Header";
import homeImage from "../../assets/home.jpg";
import classes from "./Home.module.scss";
function Home() {
  return ( 
    <>
      <div className={classes.Home}>
        <Header image={homeImage} title="Home">
          React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.
        </Header>
      </div>
    </>
  );
}

export default Home;