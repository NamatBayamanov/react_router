import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Contacts from "./pages/Contacts/Constacts";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import NotProduct from "./pages/Products/NotProduct/NotProduct";
import Products from "./pages/Products/Products";
import Product from "./pages/subpage/Product/Product";

function App() {
  return (
    <>
      <div className="App">
        
        <Layout>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path={"/products/" + "*"} element={<NotProduct/>}/>

              <Route path="/products/:productId" element={<Product/>}/>
              
              <Route path="*" element={<NotFound/>}/>

              {/* <Route path="/faq" element={<FAQ/>}/> */}
            </Routes>
        </Layout>
        
      
      </div>
    </>
    
  );
}

export default App;
