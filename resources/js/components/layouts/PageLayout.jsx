import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PageLayout = ({ children }) => {
    return (
        <div className="w-full bg-[#F7EDE4]">
            <Navbar />
            {children}
            <Footer bg="bg-[#588DA9]" />
        </div>
    );
};

export default PageLayout;
