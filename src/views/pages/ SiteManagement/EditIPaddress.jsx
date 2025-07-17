import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/style.css";
import "../../../assets/vendors/mdi/css/materialdesignicons.min.css";
import "../../../assets/vendors/ti-icons/css/themify-icons.css";
import "../../../assets/vendors/css/vendor.bundle.base.css";
import "../../../assets/vendors/font-awesome/css/font-awesome.min.css";
import "../../../assets/vendors/jvectormap/jquery-jvectormap.css";
import "../../../assets/vendors/flag-icon-css/css/flag-icons.min.css";
import "../../../assets/vendors/owl-carousel-2/owl.carousel.min.css";
import "../../../assets/vendors/owl-carousel-2/owl.theme.default.min.css";
import { useNavigate } from "react-router-dom";
import userImg from "../../../assets/images/user.png";

const  EditIPaddress = () => {
       const navigate = useNavigate();
  return (
<div>
  {/* partial:partials/_sidebar.html */}
  {/* <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <h4>DASHBOARD</h4>
    <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
      <a className="sidebar-brand brand-logo" href="index.html">
        <img src="assets/images/logo.png" alt="logo" />
      </a>
    </div>
    <ul className="nav">
      <li className="nav-item nav-category">
        <span className="nav-link">&nbsp;</span>
      </li>
      <li className="nav-item menu-items">
        <a className="nav-link" href="index.html">
          <span className="menu-icon">
            <i className="mdi mdi-speedometer" />
          </span>
          <span className="menu-title">Dashboard</span>
        </a>
      </li>
      <li className="nav-item menu-items active">
        <a className="nav-link" href="api-user-dashboard.html">
          <span className="menu-icon">
            <i className="mdi mdi-file-document" />
          </span>
          <span className="menu-title">API User Management</span>
        </a>
      </li>
      <li className="nav-item menu-items">
        <a className="nav-link" href="site-management-dashboard.html">
          <span className="menu-icon">
            <i className="mdi mdi-file-document" />
          </span>
          <span className="menu-title">Site Management</span>
        </a>
      </li>
      <li className="nav-item menu-items">
        <a className="nav-link" href="settlement-report-dashboard.html">
          <span className="menu-icon">
            <i className="mdi mdi-file-document" />
          </span>
          <span className="menu-title">Settlement Report</span>
        </a>
      </li>
      <li className="nav-item menu-items">
        <a className="nav-link" href="staff-management-dashboard.html">
          <span className="menu-icon">
            <i className="mdi mdi-file-document" />
          </span>
          <span className="menu-title">Staff Management</span>
        </a>
      </li>
    </ul>
  </nav> */}
  {/* partial */}
  <div className="container-fluid page-body-wrapper">
    {/* partial:partials/_navbar.html */}
    {/* <nav className="navbar p-0 fixed-top d-flex flex-row">
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
                  <p className="text-muted ellipsis mb-0">
                    {" "}
                    Just a reminder that you have an event today{" "}
                  </p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-cog text-danger" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Settings</p>
                  <p className="text-muted ellipsis mb-0"> Update dashboard </p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-link-variant text-warning" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Launch Admin</p>
                  <p className="text-muted ellipsis mb-0"> New admin wow! </p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <p className="p-3 mb-0 text-center">Mark all as read</p>
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
                <img
                  className="img-xs rounded-circle"
                  src="assets/images/user.png"
                  alt=""
                />
                <p className="mb-0 d-none d-sm-block navbar-profile-name">
                  User Name
                </p>
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
    </nav> */}
    {/* partial */}
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          {/* Form Modal Starts*/}
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Edit IP Address</h4>
                <form className="forms-sample py-3">
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Edit IP Address<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Edit IP Address"
                        defaultValue="HSGfguyenmxzbmnbcmnbnb"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Add IP Address1<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Edit IP Address1"
                        defaultValue="HSGfguyenmxzbmnbcmnbnb"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Edit IP Address2<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Edit IP Address2"
                        defaultValue="HSGfguyenmxzbmnbcmnbnb"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Edit IP Address3<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Edit IP Address3"
                        defaultValue="HSGfguyenmxzbmnbcmnbnb"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Edit IP Address4<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Edit IP Address4"
                        defaultValue="HSGfguyenmxzbmnbcmnbnb"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Edit IP Address5<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Edit IP Address5"
                        defaultValue="HSGfguyenmxzbmnbcmnbnb"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary me-2">
                    Submit
                  </button>
                  <button className="btn btn-dark">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          {/* Modal form end */}
        </div>
      </div>
      {/* content-wrapper ends */}
      {/* partial:partials/_footer.html */}
      {/* partial */}
    </div>
    {/* main-panel ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>

  );
};

export default  EditIPaddress;
