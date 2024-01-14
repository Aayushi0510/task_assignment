import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from './Header/Header';
import VerticalNavBar from './Verticalnavbar/VerticalNavBar';
import { setIsCollapsed } from '../../redux/slices/Sidenavlayoutslice';
import { navigation } from '../../navigation';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const sideNavLayoutState = useSelector((state) => state.sideNavLayout);
  const { isCollapsed } = sideNavLayoutState;

  const toggleCollapse = () => {
    dispatch(setIsCollapsed(!isCollapsed));
  };

  const location = useLocation();
  const shouldRenderLayout = location.pathname !== '/';

  if (!shouldRenderLayout) {
    return (
      <div className="flex overflow-hidden">
        <div className="h-full w-full bg-slate-50 px-4">
          {/* Only render the main content on the login screen */}
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className=" flex min-h-screen overflow-hidden ">
      {/* Side Navigation Bar */}
      <div
        className={` border-slate-300 h-full transition-all duration-500 ease-in-out   ${
          isCollapsed ? 'min-w-[50px] w-[50px]' : 'min-w-[250px] w-[250px]'
        }`}
      >
        {shouldRenderLayout && (
          <VerticalNavBar
            toggleCollapse={toggleCollapse}
            isCollapsed={isCollapsed}
            navigation={navigation}
            isPathEqualtoNavItem={(navItem) => false}
          />
        )}
      </div>
      <div
        className={`h-full border-l ${
          isCollapsed ? 'min-w-[calc(100vw-50px)]' : 'min-w-[calc(100vw-250px)]'
        }`}
      >
        <div className="  border-b border-slate-300  ">
          <Header />
        </div>

        <div className="grow w-full h-full overflow-auto  px-4  ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
