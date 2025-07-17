
import "../../../assets/css/style.css";
import "../../../assets/vendors/mdi/css/materialdesignicons.min.css";
import "../../../assets/vendors/ti-icons/css/themify-icons.css";
import "../../../assets/vendors/css/vendor.bundle.base.css";
import "../../../assets/vendors/font-awesome/css/font-awesome.min.css";
import "../../../assets/vendors/jvectormap/jquery-jvectormap.css";
import "../../../assets/vendors/flag-icon-css/css/flag-icons.min.css";
import "../../../assets/vendors/owl-carousel-2/owl.carousel.min.css";
import "../../../assets/vendors/owl-carousel-2/owl.theme.default.min.css";
import "../../../assets/css/style.css";
import React, { useState } from 'react';
import userImg from '../../../assets/images/user.png';
import { useNavigate } from "react-router-dom";

const ApiUserView = () => {
        const navigate = useNavigate();
//    const [showForm, setShowForm] = useState(false)
  return (
  <div className="container-scroller">
  {/* partial:partials/_sidebar.html */}
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
                  src={userImg}
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
        <div
          className="row row-cols-1 row-cols-md-6 g-4"
          style={{ marginBottom: 20 }}
        >
          <div className="col">
            <div className="card h-100 text-center shadow">
              <div className="card-body p-0 py-2 pt-2">
                <div className="display-4 text-primary mb-2">
                  <i className="fa fa-address-card-o" />
                </div>
                <h5 className="card-title mb-3">User Status</h5>
                <p className="text-success ms-2 mb-0 font-weight-medium">
                  Active
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center shadow">
              <div className="card-body p-0 py-2 pt-2">
                <div className="display-4 text-primary mb-2">
                  <i className="fa fa-address-card-o" />
                </div>
                <h5 className="card-title mb-3">PG Service Status</h5>
                <p className="text-success ms-2 mb-0 font-weight-medium">
                  Enabled
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center shadow">
              <div className="card-body p-0 py-2 pt-2">
                <div className="display-4 text-primary mb-2">
                  <i className="fa fa-address-card-o" />
                </div>
                <h5 className="card-title mb-3">PG API Mode</h5>
                <p className="text-success ms-2 mb-0 font-weight-medium">
                  Live
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center shadow">
              <div className="card-body p-0 py-2 pt-2">
                <div className="display-4 text-primary mb-2">
                  <i className="fa fa-address-card-o" />
                </div>
                <h5 className="card-title mb-3">Settlement API</h5>
                <p className="text-success ms-2 mb-0 font-weight-medium">
                  Enabled
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center shadow">
              <div className="card-body p-0 py-2 pt-2">
                <div className="display-4 text-primary mb-2">
                  <i className="fa fa-address-card-o" />
                </div>
                <h5 className="card-title mb-3">Settlement (WEB)</h5>
                <p className="text-success ms-2 mb-0 font-weight-medium">
                  Enabled
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center shadow">
              <div className="card-body p-0 py-2 pt-2">
                <div className="display-4 text-primary mb-2">
                  <i className="fa fa-address-card-o" />
                </div>
                <h5 className="card-title mb-3">Bank Transfer Mode</h5>
                <p className="text-danger ms-2 mb-0 font-weight-medium">
                  Deactive
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 grid-margin py-3">
            <div className="card py-xl-5">
              <div className="card-body">
                <div className="justify-content-center d-flex">
                <img src={userImg} className="api-user" alt="user" />
                </div>
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row px-4 px-md-3 px-xl-4 rounded mt-3 justify-content-center">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">Suraiya Parvin</h6>
                    <p className="text-muted mb-0">07 July 2025, 09:12AM</p>
                  </div>
                </div>
                <hr />
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-left text-xl-left">
                    <h6 className="mb-1">ID Code</h6>
                    <p className="text-muted mb-0">FHGwe878</p>
                  </div>
                  <div className="align-self-center flex-grow text-end text-md-left text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">Wallet Balance</h6>
                    <p className="text-muted mb-0"> ₹35352.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-8 grid-margin stretch-card py-3"
            style={{ paddingBottom: 0 }}
          >
            <div className="row">
              <div className="col-sm-6 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h5>Today's Total Transaction</h5>
                    <div className="row">
                      <div className="col-8 col-sm-12 col-xl-8 my-auto">
                        <div className="d-flex d-sm-block d-md-flex align-items-center">
                          <h3 className="mb-0">₹35352.00</h3>
                        </div>
                        <h6 className="text-muted font-weight-normal">
                          <span className="text-success ms-2 mb-0 font-weight-medium">
                            +3.5%
                          </span>{" "}
                          Since last month
                        </h6>
                      </div>
                      <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                        <i className="icon-lg mdi mdi-monitor text-success ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h5>Total Top-up Balance</h5>
                    <div className="row">
                      <div className="col-8 col-sm-12 col-xl-8 my-auto">
                        <div className="d-flex d-sm-block d-md-flex align-items-center">
                          <h3 className="mb-0">₹35352.00</h3>
                        </div>
                        <h6 className="text-muted font-weight-normal">
                          <span className="text-success ms-2 mb-0 font-weight-medium">
                            +3.5%
                          </span>{" "}
                          Since last month
                        </h6>
                      </div>
                      <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                        <i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h5>Total Used Balance</h5>
                    <div className="row">
                      <div className="col-8 col-sm-12 col-xl-8 my-auto">
                        <div className="d-flex d-sm-block d-md-flex align-items-center">
                          <h3 className="mb-0">₹35352.00</h3>
                        </div>
                        <h6 className="text-muted font-weight-normal">
                          <span className="text-success ms-2 mb-0 font-weight-medium">
                            +3.5%
                          </span>{" "}
                          Since last month
                        </h6>
                      </div>
                      <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                        <i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h5>Total Available Balance</h5>
                    <div className="row">
                      <div className="col-8 col-sm-12 col-xl-8 my-auto">
                        <div className="d-flex d-sm-block d-md-flex align-items-center">
                          <h3 className="mb-0">₹35352.00</h3>
                        </div>
                        <h6 className="text-muted font-weight-normal">
                          <span className="text-success ms-2 mb-0 font-weight-medium">
                            +3.5%
                          </span>{" "}
                          Since last month
                        </h6>
                      </div>
                      <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                        <i className="icon-lg mdi mdi-chart-pie text-success ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5>User Action</h5>
                <div className="row">
                  <div className="template-demo">
                    <button
                      type="button"
                      onClick={() => navigate('/management/Apifundload')}
                      className="btn btn-inverse-primary btn-fw col-12 border-r50"
                    >
                      <div href="api-fundload.html" className="text-primary">
                        Fund Load (Top-up/Deduct)
                      </div>
                    </button>
                    <button
                     onClick={() => navigate('/dashboard/BalanceLog')}
                      type="button"
                      className="btn btn-inverse-warning btn-fw col-12 border-r50"
                    >
                      {/* <a href="api-balance-log.html" className="text-warning"> */}
                        Balance Log
                      {/* </a> */}
                    </button>
                    <button
                      type="button"
                    onClick={() => navigate('/dashboard/ChargeManagement')}
                      className="btn btn-inverse-light btn-fw col-12 border-r50"
                    >
                      {/* <a
                        href="api-charge-management.html"
                        className="text-light"
                      > */}
                        Charge Management
                      {/* </a> */}
                    </button>
                    <button
                     onClick={() => navigate('/dashboard/EditAPI')}
                      type="button"
                      className="btn btn-inverse-info btn-fw col-12 border-r50"
                    >
                      {/* <a href="api-edit-api.html" className="text-info"> */}
                        Edit API (Switch Between APIs)
                      {/* </a> */}
                    </button>
                    <button
                      type="button"
                    onClick={() => navigate('/dashboard/RecentLoginActivies')}
                      className="btn btn-inverse-success btn-fw col-12 border-r50"
                    >
                      {/* <a href="api-activity-log.html" className="text-success"> */}
                        Activity Log
                      {/* </a> */}
                    </button>
                    <button
                      type="button"
                             onClick={() => navigate('/dashboard/ChangePassword')}
                      className="btn btn-inverse-danger btn-fw col-12 border-r50"
                    >
                      <div
                        className="text-danger"
                      >
                        Change Password
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <h5>Personal Details</h5>
                <div className="row">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Email Address</td>
                          <td>suraiya@gmail.com</td>
                        </tr>
                        <tr>
                          <td>PAN Card image</td>
                          <td>
                            PAN Card <i className="fa fa-eye text-primary" />
                          </td>
                        </tr>
                        <tr>
                          <td>Aadhaar Card image</td>
                          <td>
                            Aadhaar Card{" "}
                            <i className="fa fa-eye text-primary" />
                          </td>
                        </tr>
                        <tr>
                          <td>GST Number</td>
                          <td>3567362876</td>
                        </tr>
                        <tr>
                          <td>PAN Number</td>
                          <td>36276377776</td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="py-0">
                            {" "}
                            <p
                              className="card-description py-0"
                              style={{ paddingTop: "10px !important" }}
                            >
                              {" "}
                              Address
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>City</td>
                          <td>Kolkata</td>
                        </tr>
                        <tr>
                          <td>State</td>
                          <td>West Bengal</td>
                        </tr>
                        <tr>
                          <td>Country</td>
                          <td>India</td>
                        </tr>
                        <tr>
                          <td>Pincode</td>
                          <td>3573266</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default ApiUserView;