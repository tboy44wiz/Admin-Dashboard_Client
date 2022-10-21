import React from 'react';

// Import _AppLayout_HOC.scss
import "./_AppLayout_HOC.scss";

//  Import Components
import AppHeaderComp from "../AppHeader_Comp/AppHeader_Comp";
import MenuOverlayComp from "../MenuOverlay_Comp/MenuOverlay_Comp";

const AppLayoutHOC = (props) => {
    return (
        <main className="AppLayoutHOC">

            {/*==== Header ====*/}
            <header>
                <AppHeaderComp />
            </header>

            {/*==== Body ====*/}
            <div className="AppBody">
                { props.children }
            </div>

            {/*==== Footer ====*/}
            <footer>

            </footer>

            {/*==== Menu Overlay ====*/}
            <MenuOverlayComp />

        </main>
    );
}

export default AppLayoutHOC;
