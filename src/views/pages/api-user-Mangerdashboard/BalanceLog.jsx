
import "../../../assets/css/style.css";
import "../../../assets/vendors/mdi/css/materialdesignicons.min.css";
import "../../../assets/vendors/ti-icons/css/themify-icons.css";
import "../../../assets/vendors/css/vendor.bundle.base.css";
import "../../../assets/vendors/font-awesome/css/font-awesome.min.css";
import "../../../assets/vendors/jvectormap/jquery-jvectormap.css";
import "../../../assets/vendors/flag-icon-css/css/flag-icons.min.css";
import "../../../assets/vendors/owl-carousel-2/owl.carousel.min.css";
import "../../../assets/vendors/owl-carousel-2/owl.theme.default.min.css";
import "../../../assets/images/favicon.png";
import "../../../assets/vendors/js/vendor.bundle.base.js";
import "../../../assets/vendors/owl-carousel-2/owl.carousel.min.js";
import "../../../assets/js/jquery.cookie.js";
import "../../../assets/js/off-canvas.js";
import "../../../assets/js/misc.js";
import "../../../assets/js/settings.js";
import "../../../assets/js/todolist.js";
import "../../../assets/js/proBanner.js";
import "../../../assets/js/dashboard.js"
import React, { useState } from 'react'
import userImg from "../../../assets/images/user.png";


const BalanceLog = () => {
   const [showForm, setShowForm] = useState(false)
  return (
<div className="container-scroller">
  {/* <div class="row p-0 m-0 proBanner" id="proBanner">
  <div class="col-md-12 p-0 m-0">
    <div class="card-body card-body-padding px-3 d-flex align-items-center justify-content-between">
      <div class="ps-lg-3">
        <div class="d-flex align-items-center justify-content-between">
          <p class="mb-0 font-weight-medium me-3 buy-now-text">This is bar notification!</p>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <button id="bannerClose" class="btn border-0 p-0">
          <i class="mdi mdi-close text-white"></i>
        </button>
      </div>
    </div>
  </div>
</div> */}
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
      <li className="nav-item menu-items">
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
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Balance Log</h4>
                <h5 className="filter-icon">
                  <i className="fa fa-filter" />
                </h5>{" "}
                <p>
                  **Will display the form after click on this icon only || also
                  will disappear after click again on the icon
                </p>
                <div className="row">
                  <div className="col-6 grid-margin stretch-card">
                    <div className="card" style={{ border: "none" }}>
                      <div className="card-body">
                        <p className="card-description"> Search Filter </p>
                        <form className="forms-sample">
                          <div className="form-group">
                            <label htmlFor="">From Date</label>
                            <input
                              type="Date"
                              className="form-control"
                              id=""
                              placeholder="From Date"
                            />
                          </div>
                          <div className="form-group mb-0">
                            <label htmlFor="">Transaction ID</label>
                            <input
                              type="text"
                              className="form-control"
                              id=""
                              placeholder="Transaction ID"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 stretch-card">
                    <div className="card" style={{ border: "none" }}>
                      <div className="card-body">
                        <p className="card-description"> &nbsp;</p>
                        <form className="forms-sample">
                          <div className="form-group">
                            <label htmlFor="exampleInputName1">To Date</label>
                            <input
                              type="date"
                              className="form-control"
                              id="exampleInputName1"
                              placeholder="toDate"
                            />
                          </div>
                          <div className="form-group mb-0">
                            <label htmlFor="">Transaction Type</label>
                            <select className="form-select" id="">
                              <option>Select Type</option>
                              <option>Debit</option>
                              <option>Credit</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary me-2">
                  Search{" "}
                </button>
                <button className="btn btn-dark">Download</button>
                <button className="btn btn-danger">Clear</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="display-head-search">
                  <div className="form-group">
                    <select className="form-select" id="">
                      <option>10</option>
                      <option>20</option>
                      <option>50</option>
                      <option value="">100</option>
                    </select>
                  </div>
                  <ul className="navbar-nav width40">
                    <li className="nav-item w-100">
                      <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                        <input
                          type="text"
                          className="form-control border-r50"
                          placeholder="Search Log"
                        />
                      </form>
                    </li>
                  </ul>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> #</th>
                        <th> Date &amp; Time </th>
                        <th> Company Name </th>
                        <th> Company ID </th>
                        <th> Transaction ID (TXN ID) </th>
                        <th> Opening Balance </th>
                        <th>Type</th>
                        <th>Closing Balance</th>
                        <th>Amount (+ or -)</th>
                        <th>Remarks</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>10th July 2025, 10:30 AM</td>
                        <td>Pocket Pay</td>
                        <td>ID : 737268782</td>
                        <td>
                          <button className="btn btn-dark border-r50">
                            TXN ID : HGHD65456
                          </button>
                        </td>
                        <td>₹35352.00</td>
                        <td>
                          <span className="text-danger ms-2 mb-0 font-weight-medium">
                            Debit
                          </span>
                        </td>
                        <td>₹35352.00</td>
                        <td>
                          <span className="text-danger ms-2 mb-0 font-weight-medium">
                            -₹35352.00
                          </span>
                        </td>
                        <td>Any Remarks</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-inverse-info  border-r50"
                          >
                            Pending
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>10th July 2025, 10:30 AM</td>
                        <td>Pocket Pay</td>
                        <td>ID : 737268782</td>
                        <td>
                          <button className="btn btn-dark border-r50">
                            TXN ID : HGHD65456
                          </button>
                        </td>
                        <td>₹35352.00</td>
                        <td>
                          <span className="text-success ms-2 mb-0 font-weight-medium">
                            Credit
                          </span>
                        </td>
                        <td>₹35352.00</td>
                        <td>
                          <span className="text-success ms-2 mb-0 font-weight-medium">
                            ₹35352.00
                          </span>
                        </td>
                        <td>Any Remarks</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-inverse-info  border-r50"
                          >
                            Pending
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <nav className="Pager2" aria-label="pagination example">
                  <ul className="pagination justify-content-center">
                    {/*Arrow left*/}
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1 <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
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

export default BalanceLog;