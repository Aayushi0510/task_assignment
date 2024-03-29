import React from 'react'
import { useNavigate } from 'react-router-dom'


const VerticalNavBar = ({
    toggleCollapse,
    isCollapsed,
    navigation,
    isPathEqualtoNavItem = (navItem) => false,
}) => {
    const navigate = useNavigate()
    return (
        <div className="h-full py-3 overflow-auto ">
            {/* Logo & Menu Icon */}
            <div
                className={`flex px-3 items-center ${
                    isCollapsed ? 'justify-between' : 'justify-between'
                }`}
            >
                {/* Logo */}
                {!isCollapsed && (
                    <div className="font-semibold text-xl">
                        <h1 className='text-primary-main'></h1>
                    </div>
                )}

                {/* Menu Icon */}
                <div
                    onClick={toggleCollapse}
                    className="flex flex-col gap-1 cursor-pointer "
                >
                    <div
                        className={`h-[1.5px] w-5 bg-slate-500 transition-all duration-500 ${
                            !isCollapsed &&
                            'origin-top-left translate-x-[1.5px]  rotate-45'
                        }`}
                    >
                        {' '}
                    </div>
                    {isCollapsed && (
                        <div className={`h-[1.5px] w-5 bg-slate-500`}> </div>
                    )}
                    <div
                        className={`h-[1.5px] w-5 bg-slate-500 transition-all duration-500 ${
                            !isCollapsed &&
                            'origin-top-left translate-y-2  -rotate-45'
                        }`}
                    >
                        {' '}
                    </div>
                </div>

                {/* <div onClick={toggleCollapse} className="text-xl text-slate-500">
            <FiMenu />
          </div> */}
            </div>

            {/* Navigations */}
            <div className="px-3 py-5 flex flex-col gap-1">
                {navigation?.map((navItem, navIndex) => {
                    return (
                        <div
                            key={navIndex}
                            onClick={() => navigate(navItem.path)}
                            className={`
                flex
                gap-3
                items-center 
                rounded 
                p-2 
                cursor-pointer  
                hover:bg-sky-50 
                transition-all
                duration-500
                text-normal
                ${isCollapsed && 'justify-center'} 
                ${
                    isPathEqualtoNavItem(navItem)
                        ? 'bg-sky-50 text-sky-500 font-semibold'
                        : 'text-slate-600'
                } 
                `}
                        >
                            <div className="py-1">
                                {' '}
                                <navItem.icon />{' '}
                            </div>
                            {!isCollapsed && (
                                <div className="text-slate-700 text-sm font-semibold"> {navItem.label} </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default VerticalNavBar
