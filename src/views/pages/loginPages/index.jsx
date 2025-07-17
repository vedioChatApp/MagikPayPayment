import React from 'react'
import userImg from '../../../assets/images/user.png';

const LoginPage = () => {
  return (
    <div>
      <>
  <div className="container-scroller">

    <nav className="sidebar sidebar-offcanvas" id="sidebar">
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
        <li className="nav-item menu-items">
          <a className="nav-link" href="api-user-dashboard.html">
            <span className="menu-icon">
              <i className="mdi mdi-file-document" />
            </span>
            <span className="menu-title">API User Management</span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="docs/documentation.html">
            <span className="menu-icon">
              <i className="mdi mdi-file-document" />
            </span>
            <span className="menu-title">Site Management</span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="site-management.html">
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
    </nav>
    {/* partial */}
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
                    <p className="text-muted ellipsis mb-0">
                      {" "}
                      Update dashboard{" "}
                    </p>
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
      </nav>
      {/* partial */}
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="display-head-search">
                    <h4 className="card-title">Recent Login Activies</h4>{" "}
                    <a href="api-activity-log.html">
                      <button
                        type="button"
                        className="btn btn-dark  border-r50"
                        style={{ fontSize: 12 }}
                      >
                        View All
                      </button>
                    </a>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Activity</th>
                          <th> Time </th>
                          <th> IP </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="highlight-text">Login</span> from
                            windows 10, <br /> Chrome ABC
                          </td>
                          <td>10th July 2025, 10:30 AM</td>
                          <td>5674435435353</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-lg-flex search width50">
            <ul className="navbar-nav w-100">
              <li className="nav-item w-100">
                <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search width50">
                  <label htmlFor="">From Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="From Date"
                  />
                  <label htmlFor="">To Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="To Date"
                  />
                </form>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-9">
                      <div className="d-flex align-items-center align-self-start">
                        <h3 className="mb-0">322</h3>
                        <p className="text-success ms-2 mb-0 font-weight-medium">
                          +3.5%
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="icon icon-box-success ">
                        <span className="mdi mdi-arrow-top-right icon-item" />
                      </div>
                    </div>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    Total API Users
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-9">
                      <div className="d-flex align-items-center align-self-start">
                        <h3 className="mb-0">222</h3>
                        <p className="text-success ms-2 mb-0 font-weight-medium">
                          +11%
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="icon icon-box-success">
                        <span className="mdi mdi-arrow-top-right icon-item" />
                      </div>
                    </div>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    Active API Users
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-9">
                      <div className="d-flex align-items-center align-self-start">
                        <h3 className="mb-0">12</h3>
                        <p className="text-danger ms-2 mb-0 font-weight-medium">
                          -2.4%
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="icon icon-box-success">
                        <span className="mdi mdi-arrow-top-right icon-item" />
                      </div>
                    </div>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    Inactive API Users
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-9">
                      <div className="d-flex align-items-center align-self-start">
                        <h3 className="mb-0">23</h3>
                        <p className="text-success ms-2 mb-0 font-weight-medium">
                          +3.5%
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="icon icon-box-success ">
                        <span className="mdi mdi-arrow-top-right icon-item" />
                      </div>
                    </div>
                  </div>
                  <h6 className="text-muted font-weight-normal">Total Staff</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-9">
                      <div className="d-flex align-items-center align-self-start">
                        <h3 className="mb-0">? 42.4k</h3>
                        <p className="text-success ms-2 mb-0 font-weight-medium">
                          +3.5%
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="icon icon-box-success ">
                        <span className="mdi mdi-arrow-top-right icon-item" />
                      </div>
                    </div>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    Today’s Total Debit Amount <br />
                    (Top-up)
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-9">
                      <div className="d-flex align-items-center align-self-start">
                        <h3 className="mb-0">? 42.4k</h3>
                        <p className="text-success ms-2 mb-0 font-weight-medium">
                          +11%
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="icon icon-box-success">
                        <span className="mdi mdi-arrow-top-right icon-item" />
                      </div>
                    </div>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    Today’s Total Debit Amount <br />
                    (Deduct)
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-9">
                      <div className="d-flex align-items-center align-self-start">
                        <h3 className="mb-0">? 42.4k</h3>
                        <p className="text-danger ms-2 mb-0 font-weight-medium">
                          -2.4%
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="icon icon-box-success">
                        <span className="mdi mdi-arrow-top-right icon-item" />
                      </div>
                    </div>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    Total Payout Amount
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-9">
                      <div className="d-flex align-items-center align-self-start">
                        <h3 className="mb-0">? 42.4k</h3>
                        <p className="text-success ms-2 mb-0 font-weight-medium">
                          +3.5%
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="icon icon-box-success ">
                        <span className="mdi mdi-arrow-top-right icon-item" />
                      </div>
                    </div>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    Total Gateway Refund Balance
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="display-head-search">
                    <h4 className="card-title">Live Transactions</h4>
                    {/* <a href="api-user-dashboard.html"> */}
                      <button
                        type="button"
                        className="btn btn-dark  border-r50"
                        style={{ fontSize: 12 }}
                      >
                        View All
                      </button>
                    {/* </a> */}
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th> API User ID</th>
                          <th> Name </th>
                          <th> Transaction ID </th>
                          <th> Account No </th>
                          <th> Amount </th>
                          <th>Status</th>
                          <th>API Name</th>
                          <th>Date &amp; Time</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>4567864</td>
                          <td>Suraiya Parvin</td>
                          <td>38764983</td>
                          <td>8658478954</td>
                          <td>?43684.76</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-inverse-info  border-r50"
                            >
                              Pending
                            </button>
                          </td>
                          <td>MAGOC_GHHJH</td>
                          <td>10th July 2025, 10:30 AM</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-inverse-primary border-r50"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>4567864</td>
                          <td>Suraiya Parvin</td>
                          <td>38764983</td>
                          <td>8658478954</td>
                          <td>?43684.76</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-inverse-success border-r50"
                            >
                              Success
                            </button>
                          </td>
                          <td>MAGOC_GHHJH</td>
                          <td>10th July 2025, 10:30 AM</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-inverse-primary border-r50"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>4567864</td>
                          <td>Suraiya Parvin</td>
                          <td>38764983</td>
                          <td>8658478954</td>
                          <td>?43684.76</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-inverse-danger border-r50"
                            >
                              Failed
                            </button>
                          </td>
                          <td>MAGOC_GHHJH</td>
                          <td>10th July 2025, 10:30 AM</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-inverse-primary border-r50"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="display-head-search">
                    <h4 className="card-title">Transaction History</h4>
                    <button
                      type="button"
                      className="btn btn-dark  border-r50"
                      style={{ fontSize: 12 }}
                    >
                      View All
                    </button>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th> Name </th>
                          <th> Amount </th>
                          <th> Date </th>
                          <th> Status</th>
                          <th> Action </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Suraiya Parvin</td>
                          <td>?43684.76</td>
                          <td>10th July 2025, 10:30 AM</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-inverse-info  border-r50"
                            >
                              Pending
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-inverse-primary border-r50"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="display-head-search">
                    <h4 className="card-title">Wallet History</h4>
                    <button
                      type="button"
                      className="btn btn-dark  border-r50"
                      style={{ fontSize: 12 }}
                    >
                      View All
                    </button>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th> Date </th>
                          <th> Amount</th>
                          <th> Type </th>
                          <th> Action </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>10th July 2025, 10:30 AM</td>
                          <td>?43684.76</td>
                          <td>Debit</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-inverse-primary border-r50"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright © 2025{" "}
              <a href="#" target="_blank">
                Magic Pay
              </a>
              . All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  </div>

</>

    </div>
  )
}

export default LoginPage
