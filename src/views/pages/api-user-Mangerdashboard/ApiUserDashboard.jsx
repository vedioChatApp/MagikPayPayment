
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
import userImg from "../../../assets/images/user.png";

import { useNavigate } from "react-router-dom";

const ApiUserDashboard = () => {
    const navigate = useNavigate();
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
        <div className="row">
          <ul className="navbar-nav width40">
            <li className="nav-item dropdown d-none d-lg-block add-user-button">
              <button className="nav-link btn btn-inverse-primary btn-fw border-r50 create-new-button"
                  onClick={() => setShowForm(!showForm)}
              >
                + Add New User
              </button>
              **Will display the form after click on this icon only || also will
              disappear after click again on the icon Search Filter
            </li>
          </ul>
          {/* Form Design Just like filter*/}
                {showForm && (
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add New User</h4>
                <p className="card-description">Company Basic Information </p>
                <form className="forms-sample ">
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Company Name<span className="text-danger">*</span>
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
                      <label>Upload Pan Card</label>
                      <input
                        type="file"
                        name="img[]"
                        className="file-upload-default"
                      />
                      <div className="input-group col-xs-12 d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control file-upload-info"
                          disabled=""
                          placeholder="Upload Pan Card"
                        />
                        <span className="input-group-append ms-2">
                          <button
                            className="file-upload-browse btn btn-primary"
                            type="button"
                          >
                            Upload
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="form-group col-6">
                      <label>Upload Aadhaar Card</label>
                      <input
                        type="file"
                        name="img[]"
                        className="file-upload-default"
                      />
                      <div className="input-group col-xs-12 d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control file-upload-info"
                          disabled=""
                          placeholder="Upload Aadhaar Card"
                        />
                        <span className="input-group-append ms-2">
                          <button
                            className="file-upload-browse btn btn-primary"
                            type="button"
                          >
                            Upload
                          </button>
                        </span>
                      </div>
                    </div>
                    <p className="card-description">tax Information</p>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        GST Number<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="GST Number"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">PAN Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="PAN Number"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">PAN Holder Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="PAN Holder Number"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label>Upload GST Document</label>
                      <input
                        type="file"
                        name="img[]"
                        className="file-upload-default"
                      />
                      <div className="input-group col-xs-12 d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control file-upload-info"
                          disabled=""
                          placeholder="Upload GST Document"
                        />
                        <span className="input-group-append ms-2">
                          <button
                            className="file-upload-browse btn btn-primary"
                            type="button"
                          >
                            Upload
                          </button>
                        </span>
                      </div>
                    </div>
                    <p className="card-description">Contact Information</p>
                    <div className="form-group col-6">
                      <label htmlFor="">Contact Person Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Contact Person Name"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">Contact Person Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Contact Person Mobile Number"
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
            )
}
          {/* Modal form end */}
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="display-head-search">
                  <h4 className="card-title">API User Dashboard</h4>
                  <ul className="navbar-nav width40">
                    <li className="nav-item w-100">
                      <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                        <input
                          type="text"
                          className="form-control border-r50"
                          placeholder="Search user"
                        />
                      </form>
                    </li>
                  </ul>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Agent </th>
                        <th>Mobile No</th>
                        <th>Email</th>
                        <th>Total Available Balance</th>
                        <th>Status</th>
                        <th>Joined On</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td>
                          <div className="template-demo">
                              {" "}
                              <button
                                type="button"
                                className="btn btn-inverse-primary btn-fw border-r50"
                                     onClick={() => navigate('/dashboard/ApiUserView')}
                              >
                                View
                              </button>
                            <a href="">
                              {" "}
                              <button
                                type="button"
                                className="btn btn-inverse-success btn-fw border-r50"
                              >
                                Edit
                              </button>
                            </a>
                          </div>
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

export default ApiUserDashboard;