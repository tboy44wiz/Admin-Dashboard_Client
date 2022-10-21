import React, {useContext} from 'react';

//  Import Iconsax-react
import { HambergerMenu, User, Notification } from "iconsax-react";

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from "../../../contexts/AppContextProvider";

//  _AppHeader_Comp.scss
import "./_AppHeader_Comp.scss";

const AppHeaderComp = () => {

    const  { toggleShowMenu } = useContext(AppStoreContext);

    return (
        <section className="AppHeaderComp">
            <div className="brand__wrapper">
                <HambergerMenu onClick={ toggleShowMenu } className="menu__icon d-none d-md-block"/>
                <h2 className="brand__text">Dashboard</h2>
            </div>

            <div className="notification-and-profile__wrapper">
                <HambergerMenu onClick={ toggleShowMenu } className="menu__icon d-sm-block d-md-none"/>
                <div className="notification-badge__wrapper d-none d-md-block">
                    <Notification />
                    <div className="notification__badge">2</div>
                </div>
                <div className="profile-avatar-and-name__wrapper d-none d-md-block">
                    <User />
                    John Jeo
                </div>
            </div>
        </section>
    );
};

export default AppHeaderComp;