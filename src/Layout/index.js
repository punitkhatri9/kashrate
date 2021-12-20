import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const  layouts = ({children}) => {
    return(
        <div>
           <Header></Header>
           <div>
               {children}
           </div>
           <Footer></Footer>
        </div>
    )
}
export default layouts;