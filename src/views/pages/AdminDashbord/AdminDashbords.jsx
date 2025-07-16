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

const AdminDashboard = () => {
  return (
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
                        <h3 className="mb-0">₹ 42.4k</h3>
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
                        <h3 className="mb-0">₹ 42.4k</h3>
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
                        <h3 className="mb-0">₹ 42.4k</h3>
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
                        <h3 className="mb-0">₹ 42.4k</h3>
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
                    <a href="api-user-dashboard.html">
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
                          <td>₹43684.76</td>
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
                          <td>₹43684.76</td>
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
                          <td>₹43684.76</td>
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
                          <td>₹43684.76</td>
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
                              <a
                                href="settlement-report-genarate-invoice.html"
                                className="text-primary"
                              >
                                View
                              </a>
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
                          <td>₹43684.76</td>
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
        </div>
  );
};

export default AdminDashboard;
