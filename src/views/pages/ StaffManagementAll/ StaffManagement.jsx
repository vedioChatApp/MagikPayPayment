import React, { useState } from 'react';
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
      const [showStaffForm, setShowStaffForm] = useState(false)
  return (
  <div className="container-fluid page-body-wrapper">
    {/* partial:partials/_navbar.html */}
    {/* partial */}
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <ul className="navbar-nav width40">
            <li className="nav-item dropdown d-none d-lg-block add-user-button">
              <button
                  onClick={() => setShowStaffForm(!showStaffForm)}
                className="nav-link btn btn-inverse-primary btn-fw border-r50 create-new-button"
                aria-expanded="false"
                href="#"
              >
                + Add New Staff
              </button>
              **Will display the form after click on this icon only || also will
              disappear after click again on the icon Search Filter
            </li>
          </ul>
          {/* Form Design Just like filter*/}
             {showStaffForm && (
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
             )
            }
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
      {/* partial */}
    </div>
    {/* main-panel ends */}
  </div>
  );
};

export default   StaffManagement;
