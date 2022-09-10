
import React, { useState } from "react";
import Heading from "../../components/Heading/Heading";
import CustomTable from "../../components/Table/CustomTable";
import GridView from "./GridView";
import TopBar from "./TopBar";






const SectionTable = ({
    className = "",

}) => {

    const [view, setView] = useState("table")
    return (
        <div className={`nc-SectionSliderCollections2 ${className}`}>
            <Heading />
            <TopBar view={view} setView={setView} />

            {view === "table" ? <CustomTable /> : <GridView />}

        </div>
    );
};

export default SectionTable;
