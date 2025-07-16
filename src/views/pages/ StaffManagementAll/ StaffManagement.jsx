import React from "react";
import { Link } from "react-router-dom";

import "../../../assets/css/style.css";
import "../../../assets/vendors/font-awesome/css/font-awesome.min.css";
import "../../../assets/vendors/mdi/css/materialdesignicons.min.css";
import "../../../assets/vendors/ti-icons/css/themify-icons.css";
import "../../../assets/vendors/css/vendor.bundle.base.css";
import "../../../assets/vendors/jvectormap/jquery-jvectormap.css";
import "../../../assets/vendors/flag-icon-css/css/flag-icons.min.css";
import "../../../assets/vendors/owl-carousel-2/owl.carousel.min.css";

import logo from "../../../assets/images/logo.png";
import userImg from "../../../assets/images/user.png";

const   StaffManagement = () => {
  return (
  <div className="container-scroller">
  <div className="container-fluid page-body-wrapper">
    {/* partial:partials/_navbar.html */}
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
    </nav>
    {/* partial */}
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <ul className="navbar-nav width40">
            <li className="nav-item dropdown d-none d-lg-block add-user-button">
              <a
                className="nav-link btn btn-inverse-primary btn-fw border-r50 create-new-button"
                aria-expanded="false"
                href="#"
              >
                + Add New Staff
              </a>
              **Will display the form after click on this icon only || also will
              disappear after click again on the icon Search Filter
            </li>
          </ul>
          {/* Form Design Just like filter*/}
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add New User</h4>
                <form className="forms-sample ">
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="">
                        First Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Last Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Email address<span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Mobile Number<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Password<span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id=""
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Confirm Password<span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id=""
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary me-2">
                    Create
                  </button>
                  <button className="btn btn-dark">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          {/* Modal form end */}
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="display-head-search">
                  <h4 className="card-title">Staff Dashboard</h4>
                  <ul className="navbar-nav width40">
                    <li className="nav-item w-100">
                      <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                        <input
                          type="text"
                          className="form-control border-r50"
                          placeholder="Search staff"
                        />
                      </form>
                    </li>
                  </ul>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Main Module</th>
                        <th>Permission</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Suraiya Parvin</td>
                        <td>suraiyaparvin@gmail.com</td>
                        <td>Transaction</td>
                        <td>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-inverse-primary btn-fw border-r50"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-success btn-fw border-r50"
                            >
                              Edit
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content-wrapper ends */}
      {/* partial:partials/_footer.html */}
      {/* <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Copyright © 2025{" "}
            <a href="#" target="_blank">
              Magic Pay
            </a>
            . All rights reserved.
          </span>
        </div>
      </footer> */}
      {/* partial */}
    </div>
    {/* main-panel ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>

  );
};

export default   StaffManagement;
