// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import SectionTable from "./SectionTable"
import { Helmet } from "react-helmet";


function PageHome() {
    return (
        <div className="nc-PageHome relative overflow-hidden">
            <Helmet>
                <title>Marketplace</title>
            </Helmet>


            <div className="container relative space-y-20 mt-12 mb-20 sm:space-y-24 sm:my-24 lg:space-y-32 lg:my-32">
                {/* SECTION HERO */}

                <div className="relative ">
                    {/* <BackgroundSection /> */}
                    <SectionTable />
                </div>


            </div>


            {/* SECTION */}
            {/* <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
  
  
          <SectionGridFeatureNFT data={collection} />
  
        </div> */}

            {/* SECTION LAERGE SLIDER */}
            {/* <div className="bg-neutral-100/70 dark:bg-black/20 py-20 lg:py-32">
          <div className="container relative">
            <h2 style={{ left: "0", position: "absolute", background: "#111827", padding: "10px", zIndex: "999", top: "-108px", color: "lightcoral", fontWeight: "900", borderRadius: "100px" }}>#SPONSORED</h2>
  
            <SectionLargeSlider />
          </div>
        </div> */}

            {/* <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
         
  
          <div className="relative py-24">
            <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
            <SectionGridAuthorBox artists={allArtists} boxCard="box3" />
          </div>
  
          <div className="relative ">
         
            <SectionSliderCollections2 newListings={true} artists={allArtists} cardStyle="style1" />
          </div>
  
  
        
        </div> */}
        </div>
    );
}

export default PageHome;