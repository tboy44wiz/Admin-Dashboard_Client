import React from 'react';


import AppLayoutHOC from "../../layouts/AppLayout_HOC/AppLayout_HOC";

//  Import _Dashboard_Comp.scss.
import "./_Dashboard_Comp.scss";

const DashboardComp = () => {
    return (
        <AppLayoutHOC>
            <main className="DashboardComp">
                <h1>Dashboard Page</h1>
            </main>
        </AppLayoutHOC>
    );
}

export default DashboardComp;