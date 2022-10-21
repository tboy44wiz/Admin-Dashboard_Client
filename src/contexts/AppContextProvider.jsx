import React, {createContext, useState} from 'react';

const AppStoreContext = createContext();

const AppContextProvider = (props) => {
    const [state, setState] = useState({
        isShowMenu: true,
        isLightTheme: true,
    });

    //  Toggle SHow Menu.
    const toggleShowMenu = () => {
        const { isShowMenu } = state;
        setState({
            ...state,
            isShowMenu: !isShowMenu,
        });
    };

    //  Toggle Theme.
    const toggleTheme = () => {
        const { isLightTheme } = state;
        setState({
            ...state,
            isLightTheme: !isLightTheme,
        });
    };

    return (
        <AppStoreContext.Provider value={{
            ...state,

            toggleShowMenu: toggleShowMenu,
            toggleTheme: toggleTheme,
        }}>
            { props.children }
        </AppStoreContext.Provider>
    );
}

export { AppStoreContext };
export default AppContextProvider;