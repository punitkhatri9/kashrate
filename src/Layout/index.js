import React from "react";

import Footer from "./Footer";
import Header from "./Header";

const layouts = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <div>
                {children}
            </div>
            <Footer ></Footer>
        </div>
    )
}
export default layouts;