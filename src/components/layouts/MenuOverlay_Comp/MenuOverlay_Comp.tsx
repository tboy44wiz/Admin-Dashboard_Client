import React, {useContext} from 'react';

//  Import Iconsax-react
import {Activity, Category, ArrowLeft, ArrowRight, Clipboard, Notification, Logout } from "iconsax-react";

import { AppStoreContext } from "../../../contexts/AppContextProvider";

//  _MenuOverlay_Comp.scss.
import "./_MenuOverlay_Comp.scss";
import {NavLink} from "react-router-dom";

const MenuOverlayComp = (props) => {

    const { isShowMenu, toggleShowMenu } = useContext(AppStoreContext);

    return (
        <main className={ !isShowMenu ? "MenuOverlayComp" : "MenuOverlayComp Hide" }>
            <div className="sidebar-top__wrapper px-3">
                <h2 className="brand__text">Dashboard</h2>
                {(!isShowMenu) ? (
                    <ArrowLeft onClick={ toggleShowMenu } className="close__icon m-3" />
                ) : (
                    <ArrowRight onClick={ toggleShowMenu } className="close__icon m-3" />
                )}
            </div>


            <ul className="menu__items py-5">
                <div>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "selected" : "" }>
                        <li className="menu__item py-3">
                            <Category className="menu__icon me-3"/>
                            <div className="menu__name">Dashboard</div>
                        </li>
                    </NavLink>

                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "selected" : "" }>
                        <li className="menu__item py-4">
                            <Activity className="menu__icon me-3"/>
                            <div className="menu__name">Activity</div>
                        </li>
                    </NavLink>

                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "selected" : "" }>
                        <li className="menu__item py-4">
                            <Clipboard className="menu__icon me-3"/>
                            <div className="menu__name">Clipboard</div>
                        </li>
                    </NavLink>

                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "selected" : "" }>
                        <li className="menu__item py-4">
                            <Notification className="menu__icon me-3"/>
                            <div className="menu__name">Notification</div>
                        </li>
                    </NavLink>
                </div>

                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "selected" : "" }>
                    <li className="menu__item">
                        <Logout className="menu__icon me-3"/>
                        <div className="menu__name">Logout</div>
                    </li>
                </NavLink>
            </ul>
        </main>
    );
}

export default MenuOverlayComp;
