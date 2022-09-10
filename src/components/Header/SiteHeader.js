import React from "react";
import { useLocation } from "react-router-dom";
// import HeaderLogged from "components/Header/HeaderLogged";
import Header from "./Header";
import Banner from "./Banner"

const SiteHeader = () => {
    //   let location = useLocation();

    return <div><Banner /><Header /></div>
};

export default SiteHeader;
