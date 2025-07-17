import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import userImg from "../../src/assets/images/user.png";
import { useLocation } from 'react-router-dom';
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilContrast,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cilMoon,
  cilSun,
} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  const location = useLocation();
const isFilterPage = location.pathname === '/SiteManagement' || location.pathname === '/SettlementReport';
  const headerRef = useRef()
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])

  return (
    // <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
    //   <CContainer className="border-bottom px-4" fluid>
    //     <CHeaderToggler
    //       onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
    //       style={{ marginInlineStart: '-14px' }}
    //     >
    //       <CIcon icon={cilMenu} size="lg" />
    //     </CHeaderToggler>
    //     <CHeaderNav className="d-none d-md-flex">
    //       <CNavItem>
    //         <CNavLink to="/dashboard" as={NavLink}>
    //           Dashboard
    //         </CNavLink>
    //       </CNavItem>
    //       <CNavItem>
    //         <CNavLink href="#">Users</CNavLink>
    //       </CNavItem>
    //       <CNavItem>
    //         <CNavLink href="#">Settings</CNavLink>
    //       </CNavItem>
    //     </CHeaderNav>
    //     <CHeaderNav className="ms-auto">
    //       <CNavItem>
    //         <CNavLink href="#">
    //           <CIcon icon={cilBell} size="lg" />
    //         </CNavLink>
    //       </CNavItem>
    //       <CNavItem>
    //         <CNavLink href="#">
    //           <CIcon icon={cilList} size="lg" />
    //         </CNavLink>
    //       </CNavItem>
    //       <CNavItem>
    //         <CNavLink href="#">
    //           <CIcon icon={cilEnvelopeOpen} size="lg" />
    //         </CNavLink>
    //       </CNavItem>
    //     </CHeaderNav>
    //     <CHeaderNav>
    //       <li className="nav-item py-1">
    //         <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
    //       </li>
    //       <CDropdown variant="nav-item" placement="bottom-end">
    //         <CDropdownToggle caret={false}>
    //           {colorMode === 'dark' ? (
    //             <CIcon icon={cilMoon} size="lg" />
    //           ) : colorMode === 'auto' ? (
    //             <CIcon icon={cilContrast} size="lg" />
    //           ) : (
    //             <CIcon icon={cilSun} size="lg" />
    //           )}
    //         </CDropdownToggle>
    //         <CDropdownMenu>
    //           <CDropdownItem
    //             active={colorMode === 'light'}
    //             className="d-flex align-items-center"
    //             as="button"
    //             type="button"
    //             onClick={() => setColorMode('light')}
    //           >
    //             <CIcon className="me-2" icon={cilSun} size="lg" /> Light
    //           </CDropdownItem>
    //           <CDropdownItem
    //             active={colorMode === 'dark'}
    //             className="d-flex align-items-center"
    //             as="button"
    //             type="button"
    //             onClick={() => setColorMode('dark')}
    //           >
    //             <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
    //           </CDropdownItem>
    //           <CDropdownItem
    //             active={colorMode === 'auto'}
    //             className="d-flex align-items-center"
    //             as="button"
    //             type="button"
    //             onClick={() => setColorMode('auto')}
    //           >
    //             <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
    //           </CDropdownItem>
    //         </CDropdownMenu>
    //       </CDropdown>
    //       <li className="nav-item py-1">
    //         <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
    //       </li>
    //       <AppHeaderDropdown />
    //     </CHeaderNav>
    //   </CContainer>
    //   {/* <CContainer className="px-4" fluid>
    //     <AppBreadcrumb />
    //   </CContainer> */}
    // </CHeader>
        // <nav className="navbar p-0 fixed-top d-flex flex-row">
        //   <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
        //     <a className="navbar-brand brand-logo-mini" href="index.html">
        //       <img src="assets/images/logo.png" alt="user" />
        //     </a>
        //   </div>
        //   <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
        //     <button
        //       className="navbar-toggler navbar-toggler align-self-center"
        //       type="button"
        //       data-toggle="minimize"
        //         // onClick={() => alert("Diksha")}
        //     >
        //       <span className="mdi mdi-menu" />
        //     </button>
        //     <ul className="navbar-nav navbar-nav-right">
        //       <li className="nav-item dropdown border-left">
        //         <a
        //           className="nav-link count-indicator dropdown-toggle"
        //           id="notificationDropdown"
        //           href="#"
        //           data-bs-toggle="dropdown"
        //         >
        //           <i className="mdi mdi-bell" />
        //           <span className="count bg-danger" />
        //         </a>
        //         <div
        //           className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list"
        //           aria-labelledby="notificationDropdown"
        //         >
        //           <h6 className="p-3 mb-0">Notifications</h6>
        //           <div className="dropdown-divider" />
        //           <a className="dropdown-item preview-item">
        //             <div className="preview-thumbnail">
        //               <div className="preview-icon bg-dark rounded-circle">
        //                 <i className="mdi mdi-calendar text-success" />
        //               </div>
        //             </div>
        //             <div className="preview-item-content">
        //               <p className="preview-subject mb-1">Demo Notification</p>
        //               <p className="text-muted ellipsis mb-0">
        //                 {" "}
        //                 Just a reminder that you have an event today{" "}
        //               </p>
        //             </div>
        //           </a>
        //           <div className="dropdown-divider" />
        //           <a className="dropdown-item preview-item">
        //             <div className="preview-thumbnail">
        //               <div className="preview-icon bg-dark rounded-circle">
        //                 <i className="mdi mdi-cog text-danger" />
        //               </div>
        //             </div>
        //             <div className="preview-item-content">
        //               <p className="preview-subject mb-1">Settings</p>
        //               <p className="text-muted ellipsis mb-0"> Update dashboard </p>
        //             </div>
        //           </a>
        //           <div className="dropdown-divider" />
        //           <a className="dropdown-item preview-item">
        //             <div className="preview-thumbnail">
        //               <div className="preview-icon bg-dark rounded-circle">
        //                 <i className="mdi mdi-link-variant text-warning" />
        //               </div>
        //             </div>
        //             <div className="preview-item-content">
        //               <p className="preview-subject mb-1">Launch Admin</p>
        //               <p className="text-muted ellipsis mb-0"> New admin wow! </p>
        //             </div>
        //           </a>
        //           <div className="dropdown-divider" />
        //           <p className="p-3 mb-0 text-center">Mark all as read</p>
        //         </div>
        //       </li>
        //       <li className="nav-item dropdown">
        //         <a
        //           className="nav-link"
        //           id="profileDropdown"
        //           href="#"
        //           data-bs-toggle="dropdown"
        //         >
        //           <div className="navbar-profile">
        //             <img
        //               className="img-xs rounded-circle"
        //               src={userImg}
        //               alt=""
        //             />
        //             <p className="mb-0 d-none d-sm-block navbar-profile-name">
        //               User Name
        //             </p>
        //             <i className="mdi mdi-menu-down d-none d-sm-block" />
        //           </div>
        //         </a>
        //         <div
        //           className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list"
        //           aria-labelledby="profileDropdown"
        //         >
        //           <div className="dropdown-divider" />
        //           <a className="dropdown-item preview-item">
        //             <div className="preview-thumbnail">
        //               <div className="preview-icon bg-dark rounded-circle">
        //                 <i className="mdi mdi-logout text-danger" />
        //               </div>
        //             </div>
        //             <div className="preview-item-content">
        //               <p className="preview-subject mb-1">Log out</p>
        //             </div>
        //           </a>
        //         </div>
        //       </li>
        //     </ul>
        //     <button
        //       className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
        //       type="button"
        //       data-toggle="offcanvas"
        //     >
        //       <span className="mdi mdi-format-line-spacing" />
        //     </button>
        //   </div>
        // </nav>




 <nav className="navbar p-0 fixed-top d-flex flex-row">
  <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
    <a className="navbar-brand brand-logo-mini" href="index.html">
      <img src="assets/images/logo.png" alt="user" />
    </a>
  </div>

  <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
    <button
      className="navbar-toggler navbar-toggler align-self-center"
      type="button"
      data-toggle="minimize"
    >
      <span className="mdi mdi-menu" />
    </button>

    {/* ✅ Conditional Filter Form */}
    {isFilterPage && (
      <ul className="navbar-nav w-100">
        <li className="nav-item w-100">
          <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search width50">
            <label htmlFor="">From Date</label>
            <input type="date" className="form-control mx-2" />
            <label htmlFor="">To Date</label>
            <input type="date" className="form-control mx-2" />
          </form>
        </li>
      </ul>
    )}

    {/* ✅ Bell + Profile Section — Always Visible */}
    <ul className="navbar-nav navbar-nav-right">
      <li className="nav-item dropdown border-left">
        <a
          className="nav-link count-indicator dropdown-toggle"
          id="notificationDropdown"
          href="#"
          data-bs-toggle="dropdown"
        >
          <i className="mdi mdi-bell" />
          <span className="count bg-danger" />
        </a>
        <div
          className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list"
          aria-labelledby="notificationDropdown"
        >
          <h6 className="p-3 mb-0">Notifications</h6>
          <div className="dropdown-divider" />
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-dark rounded-circle">
                <i className="mdi mdi-calendar text-success" />
              </div>
            </div>
            <div className="preview-item-content">
              <p className="preview-subject mb-1">Demo Notification</p>
              <p className="text-muted ellipsis mb-0">You have an event today</p>
            </div>
          </a>
        </div>
      </li>

      <li className="nav-item dropdown">
        <a
          className="nav-link"
          id="profileDropdown"
          href="#"
          data-bs-toggle="dropdown"
        >
          <div className="navbar-profile">
            <img className="img-xs rounded-circle" src={userImg} alt="" />
            <p className="mb-0 d-none d-sm-block navbar-profile-name">User Name</p>
            <i className="mdi mdi-menu-down d-none d-sm-block" />
          </div>
        </a>
        <div
          className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list"
          aria-labelledby="profileDropdown"
        >
          <div className="dropdown-divider" />
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-dark rounded-circle">
                <i className="mdi mdi-logout text-danger" />
              </div>
            </div>
            <div className="preview-item-content">
              <p className="preview-subject mb-1">Log out</p>
            </div>
          </a>
        </div>
      </li>
    </ul>

    <button
      className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
      type="button"
      data-toggle="offcanvas"
    >
      <span className="mdi mdi-format-line-spacing" />
    </button>
  </div>
</nav>


  )
}

export default AppHeader
