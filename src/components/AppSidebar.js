import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logo } from 'src/assets/brand/logo'
import { sygnet } from 'src/assets/brand/sygnet'
import userImg from '../../src/assets/images/logo.png';
// ../../../assets/images/user.png

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    // <CSidebar
    //   className="border-end"
    //   colorScheme="dark"
    //   position="fixed"
    //   unfoldable={unfoldable}
    //   visible={sidebarShow}
    //   onVisibleChange={(visible) => {
    //     dispatch({ type: 'set', sidebarShow: visible })
    //   }}
    // >
    //   <CSidebarHeader className="border-bottom">
    //     <CSidebarBrand to="/">
    //       <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
    //       <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
    //     </CSidebarBrand>
    //     <CCloseButton
    //       className="d-lg-none"
    //       dark
    //       onClick={() => dispatch({ type: 'set', sidebarShow: false })}
    //     />
    //   </CSidebarHeader>
    //   <AppSidebarNav items={navigation} />
    //   <CSidebarFooter className="border-top d-none d-lg-flex">
    //     <CSidebarToggler
    //       onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
    //     />
    //   </CSidebarFooter>
    // </CSidebar>

  //   <div>
  //      <nav className="sidebar sidebar-offcanvas" id="sidebar">
  //   <h4>DASHBOARD</h4>
  //   <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
  //     <a className="sidebar-brand brand-logo" href="index.html">
  //       <img src={userImg} alt="logo" />
  //     </a>
  //   </div>
  //   <ul className="nav">
  //     <li className="nav-item nav-category">
  //       <span className="nav-link">&nbsp;</span>
  //     </li>
  //     <li className="nav-item menu-items">
  //       <button className="nav-link">
  //       {/* <a className="nav-link" href="index.html"> */}
  //         <span className="menu-icon">
  //           <i className="mdi mdi-speedometer" />
  //         </span>
  //         <span className="menu-title">Dashboard</span>
  //       {/* </a> */}
  //       </button>
  //     </li>
  //     <li className="nav-item menu-items active">
  //       <a className="nav-link" href="api-user-dashboard.html">
  //         <span className="menu-icon">
  //           <i className="mdi mdi-file-document" />
  //         </span>
  //         <span className="menu-title">API User Management</span>
  //       </a>
  //     </li>
  //     <li className="nav-item menu-items">
  //       <a className="nav-link" href="site-management-dashboard.html">
  //         <span className="menu-icon">
  //           <i className="mdi mdi-file-document" />
  //         </span>
  //         <span className="menu-title">Site Management</span>
  //       </a>
  //     </li>
  //     <li className="nav-item menu-items">
  //       <a className="nav-link" href="settlement-report-dashboard.html">
  //         <span className="menu-icon">
  //           <i className="mdi mdi-file-document" />
  //         </span>
  //         <span className="menu-title">Settlement Report</span>
  //       </a>
  //     </li>
  //     <li className="nav-item menu-items">
  //       <a className="nav-link" href="staff-management-dashboard.html">
  //         <span className="menu-icon">
  //           <i className="mdi mdi-file-document" />
  //         </span>
  //         <span className="menu-title">Staff Management</span>
  //       </a>
  //     </li>
  //   </ul>
  // </nav>
  //   </div>
  <div style={{backgroundColor:"red"}} >
  <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <h4 >DASHBOARD</h4>
    <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
      <NavLink className="sidebar-brand brand-logo" to="/dashboard">
        <img src={userImg} alt="logo" />
      </NavLink>
    </div>
    <ul className="nav">
      <li className="nav-item nav-category">
        <span className="nav-link">&nbsp;</span>
      </li>

      <li className="nav-item menu-items">
        <NavLink className="nav-link" to="/dashboard">
          <span className="menu-icon">
            <i className="mdi mdi-speedometer" />
          </span>
          <span className="menu-title">Dashboard</span>
        </NavLink>
      </li>

      <li className="nav-item menu-items">
        <NavLink className="nav-link" to="/management">
          <span className="menu-icon">
            <i className="mdi mdi-file-document" />
          </span>
          <span className="menu-title">API User Management</span>
        </NavLink>
      </li>

      <li className="nav-item menu-items">
        <NavLink className="nav-link" to="/SiteManagement">
          <span className="menu-icon">
            <i className="mdi mdi-file-document" />
          </span>
          <span className="menu-title">Site Management</span>
        </NavLink>
      </li>

      <li className="nav-item menu-items">
        <NavLink className="nav-link" to="/SettlementReport">
          <span className="menu-icon">
            <i className="mdi mdi-file-document" />
          </span>
          <span className="menu-title">Settlement Report</span>
        </NavLink>
      </li>

      <li className="nav-item menu-items">
        <NavLink className="nav-link" to="/StaffManagement">
          <span className="menu-icon">
            <i className="mdi mdi-file-document" />
          </span>
          <span className="menu-title">Staff Management</span>
        </NavLink>
      </li>
    </ul>
  </nav>
</div>

  )
}

export default React.memo(AppSidebar)
