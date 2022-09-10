import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
// import Footer from "shared/Footer/Footer";
import PageHome from "../pages/PageHome/PageHome";
import NftDetailPage from "../pages/NftDetailPage/NftDetailPage";
import SiteHeader from "../components/Header/SiteHeader";
import CommunityStats from "../pages/CommunityStats/CommunityStats";


export const pages = [
    { path: "/", exact: true, component: PageHome },
    { path: "/nft-detail", exact: true, component: NftDetailPage },
    { path: "/stats", exact: true, component: CommunityStats },
];

const Routes = () => {
    return (
        <BrowserRouter >
            <ScrollToTop />
            <SiteHeader />
            <Switch>
                {pages.map(({ component, path, exact }) => {
                    return (
                        <Route
                            key={path}
                            component={component}
                            exact={!!exact}
                            path={path}
                        />
                    );
                })}
                {/* <Route component={Page404} /> */}
            </Switch>
            {/* <Footer /> */}
        </BrowserRouter>
    );
};

export default Routes;
