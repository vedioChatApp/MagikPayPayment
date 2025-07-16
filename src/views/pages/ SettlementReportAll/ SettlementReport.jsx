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

const   SettlementReport = () => {
  return (
    <div className="container-scroller">
  {/* partial:partials/_sidebar.html */}
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
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Settlement Report</h4>
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
                          <div className="form-group">
                            <label htmlFor="">Transaction ID</label>
                            <input
                              type="text"
                              className="form-control"
                              id=""
                              placeholder="Transaction ID"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">API User Code</label>
                            <input
                              type="text"
                              className="form-control"
                              id=""
                              placeholder="API User Code"
                            />
                          </div>
                          <hr />
                          <div className="form-group">
                            <label htmlFor="">Amount</label>
                            <input
                              type="number"
                              className="form-control"
                              id=""
                              placeholder="Amount"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Amount From</label>
                            <input
                              type="number"
                              className="form-control"
                              id=""
                              placeholder="Amount"
                            />
                          </div>
                          <hr />
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
                          <div className="form-group">
                            <label htmlFor="">Account Number</label>
                            <input
                              type="number"
                              className="form-control"
                              id=""
                              placeholder="Account Number"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Status</label>
                            <select className="form-select" id="">
                              <option>Select Status</option>
                              <option>Status1</option>
                              <option>Status1</option>
                            </select>
                          </div>
                          <hr />
                          <div
                            className="form-group"
                            style={{ visibility: "hidden" }}
                          >
                            <label htmlFor="">Amount To</label>
                            <input
                              type="text"
                              className="form-control"
                              id=""
                              placeholder="Amount To"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Amount To</label>
                            <input
                              type="text"
                              className="form-control"
                              id=""
                              placeholder="Amount To"
                            />
                          </div>
                          <hr />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-12  stretch-card">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="">Partnet API Name</label>
                        <textarea
                          className="form-control"
                          id=""
                          rows={4}
                          placeholder="Partnet API Name"
                          defaultValue={""}
                        />
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
          <div className="col-xl-4 col-sm-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">₹322</h3>
                      <p className="text-success ms-2 mb-0 font-weight-medium">
                        +3.5%
                      </p>
                    </div>
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">Total Count</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">₹222</h3>
                      <p className="text-success ms-2 mb-0 font-weight-medium">
                        +11%
                      </p>
                    </div>
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">
                  Total Transaction
                </h6>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">₹1200</h3>
                      <p className="text-danger ms-2 mb-0 font-weight-medium">
                        -2.4%
                      </p>
                    </div>
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">
                  Total Charge Amount
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
                          placeholder="Search Report"
                        />
                      </form>
                    </li>
                  </ul>
                </div>
                <div className="table-responsive">
                  <div id="myModal" className="modal">
                    <div className="modal-content">
                      <span className="close-btn">×</span>
                      <h5 className="mobile-title">Update UTR Number</h5>
                      <hr />
                      <form action="" />
                      <div className="form-group">
                        <label htmlFor="">UTR</label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="UTR"
                        />
                      </div>
                      <button className="btn btn-inverse-success">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div id="myModal" className="modal">
                    <div className="modal-content">
                      <span className="close-btn">×</span>
                      <h5 className="mobile-title">Update UTR Number</h5>
                      <hr />
                      <form action="" />
                      <div className="form-group">
                        <label htmlFor="">UTR</label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="UTR"
                          defaultValue={55412122}
                        />
                      </div>
                      <button className="btn btn-inverse-success">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div id="myModal" className="modal">
                    <div className="modal-content">
                      <span className="close-btn">×</span>
                      <h5 className="mobile-title">Update UTR Number</h5>
                      <hr />
                      <form action="" />
                      <div className="form-group">
                        <label htmlFor="">UTR</label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="UTR"
                          defaultValue={55412122}
                        />
                      </div>
                      <button className="btn btn-inverse-success">
                        Submit
                      </button>
                    </div>
                  </div>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> #</th>
                        <th> API User Details </th>
                        <th> Transaction Date </th>
                        <th> Transaction ID </th>
                        <th> Order ID </th>
                        <th> Mode </th>
                        <th>Bank Details</th>
                        <th>UTRNo</th>
                        <th>TXN Details</th>
                        <th>Status</th>
                        <th>API Name</th>
                        <th>Response</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <button className="btn btn-dark">IMP36877736</button>
                        </td>
                        <td>10th July 2025, 10:30 AM</td>
                        <td>IMPS4383847834798589</td>
                        <td style={{ lineHeight: 22 }}>
                          Order ID: 456465 <br />
                          Unique ID: GD6438655 <br />
                          Batch No: HG8747887 <br />
                          UTR No: HG76w677
                        </td>
                        <td>IMPS</td>
                        <td style={{ lineHeight: 22 }}>
                          Account No: 456465 <br />
                          IFSC: GD6438655 <br />
                          Account No: 6823568625683
                        </td>
                        <td>
                          <span
                            className="filter-icon"
                            style={{ border: "none" }}
                          >
                            {" "}
                            <i className="fa fa-edit" id="openModalBtn" />
                          </span>
                        </td>
                        {/* Modal */}
                        {/* Modal */}
                        <td style={{ lineHeight: 22 }}>
                          Amount: 2022.00 <br />
                          Charge: 2022.00 <br />
                          GST: HG8766547887 <br />
                          TDS: 0
                        </td>
                        <td>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-inverse-danger  border-r50"
                            >
                              Failure
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-success  border-r50"
                            >
                              <a href="settlement-report-api-Status.html">
                                {" "}
                                <i
                                  className="fa fa-edit text-success"
                                  id="openModalBtn"
                                />
                              </a>
                            </button>
                            {/* Modal*/}
                            {/* modal is in linked page */}
                            {/* Modal */}
                          </div>
                        </td>
                        <td>FIAZE_MAGICPAY-APP</td>
                        <td>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-inverse-danger  border-r50"
                            >
                              <a
                                href="settlement-report-api-req.html"
                                className="text-danger"
                              >
                                Request
                              </a>
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-success  border-r50"
                            >
                              <a
                                href="settlement-report-api-res.html"
                                className="text-success"
                              >
                                {" "}
                                Response
                              </a>
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-primary  border-r50"
                            >
                              <a
                                href="settlement-report-api-callback.html"
                                className="text-primary"
                              >
                                {" "}
                                Callback
                              </a>
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-inverse-danger  border-r50"
                            >
                              <a
                                href="update-invoice-data.html"
                                className="text-danger"
                              >
                                Update Invoice Data
                              </a>
                            </button>
                            <br />
                            <button
                              type="button"
                              className="btn btn-inverse-success  border-r50"
                            >
                              <a
                                href="settlement-report-genarate-invoice.html"
                                className="text-success"
                              >
                                <i className="fa fa-file" /> Genarate Invoice
                              </a>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <button className="btn btn-dark">IMP36877736</button>
                        </td>
                        <td>10th July 2025, 10:30 AM</td>
                        <td>IMPS4383847834798589</td>
                        <td style={{ lineHeight: 22 }}>
                          Order ID: 456465 <br />
                          Unique ID: GD6438655 <br />
                          Batch No: HG8747887 <br />
                          UTR No: HG76w677
                        </td>
                        <td>IMPS</td>
                        <td style={{ lineHeight: 22 }}>
                          Account No: 456465 <br />
                          IFSC: GD6438655 <br />
                          Account No: 6823568625683
                        </td>
                        <td>
                          <span>
                            4646364{" "}
                            <span
                              className="filter-icon"
                              style={{ border: "none" }}
                            >
                              {" "}
                              <i
                                className="fa fa-edit"
                                id="openModalBtnSucess"
                              />
                            </span>
                          </span>
                        </td>
                        {/* Modal */}
                        {/* Modal */}
                        <td style={{ lineHeight: 22 }}>
                          Amount: 2022.00 <br />
                          Charge: 2022.00 <br />
                          GST: HG8766547887 <br />
                          TDS: 0
                        </td>
                        <td>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-inverse-success  border-r50"
                            >
                              Success
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-success  border-r50"
                            >
                              <i className="fa fa-edit" />
                            </button>
                          </div>
                        </td>
                        <td>FIAZE_MAGICPAY-APP</td>
                        <td>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-inverse-danger  border-r50"
                            >
                              Request
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-success  border-r50"
                            >
                              {" "}
                              Response
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-primary  border-r50"
                            >
                              {" "}
                              Callback
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-inverse-danger  border-r50"
                            >
                              <a
                                href="update-invoice-data.html"
                                className="text-danger"
                              >
                                Update Invoice Data
                              </a>
                            </button>
                            <br />
                            <button
                              type="button"
                              className="btn btn-inverse-success  border-r50"
                            >
                              <a
                                href="settlement-report-genarate-invoice.html"
                                className="text-success"
                              >
                                <i className="fa fa-file" /> Genarate Invoice
                              </a>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <button className="btn btn-dark">IMP36877736</button>
                        </td>
                        <td>10th July 2025, 10:30 AM</td>
                        <td>IMPS4383847834798589</td>
                        <td style={{ lineHeight: 22 }}>
                          Order ID: 456465 <br />
                          Unique ID: GD6438655 <br />
                          Batch No: HG8747887 <br />
                          UTR No: HG76w677
                        </td>
                        <td>IMPS</td>
                        <td style={{ lineHeight: 22 }}>
                          Account No: 456465 <br />
                          IFSC: GD6438655 <br />
                          Account No: 6823568625683
                        </td>
                        <td>
                          <span>
                            4646364{" "}
                            <span
                              className="filter-icon"
                              style={{ border: "none" }}
                            >
                              {" "}
                              <i
                                className="fa fa-edit"
                                id="openModalBtnSucess"
                              />
                            </span>
                          </span>
                        </td>
                        {/* Modal */}
                        {/* Modal */}
                        <td style={{ lineHeight: 22 }}>
                          Amount: 2022.00 <br />
                          Charge: 2022.00 <br />
                          GST: HG8766547887 <br />
                          TDS: 0
                        </td>
                        <td>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-inverse-info  border-r50"
                            >
                              Pending
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-success  border-r50"
                            >
                              <i className="fa fa-edit" />
                            </button>
                          </div>
                        </td>
                        <td>FIAZE_MAGICPAY-APP</td>
                        <td>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-inverse-danger  border-r50"
                            >
                              Request
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-success  border-r50"
                            >
                              {" "}
                              Response
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-primary  border-r50"
                            >
                              {" "}
                              Callback
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-inverse-danger  border-r50"
                            >
                              <a
                                href="update-invoice-data.html"
                                className="text-danger"
                              >
                                Update Invoice Data
                              </a>
                            </button>
                            <br />
                            <button
                              type="button"
                              className="btn btn-inverse-success  border-r50"
                            >
                              <a
                                href="settlement-report-genarate-invoice.html"
                                className="text-success"
                              >
                                <i className="fa fa-file" /> Genarate Invoice
                              </a>
                            </button>
                          </div>
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

export default   SettlementReport;
