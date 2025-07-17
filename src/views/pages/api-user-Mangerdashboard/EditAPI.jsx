
import "../../../assets/css/style.css";
import React, { useState } from 'react'
import userImg from '../../../assets/images/user.png';

const EditAPI = () => {
   const [showForm, setShowForm] = useState(false)
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
        <div className="row">
          {/* Form Modal Starts*/}
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Edit API</h4>
                <form className="forms-sample py-3">
                  <div className="row">
                    <p className="card-description">Settings</p>
                    <div className="form-group col-6">
                      <label htmlFor="">QR API Name (Auto-fetcch)</label>
                      <select className="form-select" id="">
                        <option>ABCS</option>
                        <option>JHiuuiusyui</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Bank Transfer API Name (Auto-fetcch)
                      </label>
                      <select className="form-select" id="">
                        <option>HFJSGHGHS</option>
                        <option>HJSFHJHHSHJ</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Bank Transfer UPI API Name (Auto-fetcch)
                      </label>
                      <select className="form-select" id="">
                        <option>HFJSGHGHS</option>
                        <option>HJSFHJHHSHJ</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">Bank Transfer API Transfer Type</label>
                      <select className="form-select" id="">
                        <option>Direct</option>
                        <option>Hold</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">Timestamp Type</label>
                      <select className="form-select" id="">
                        <option>Current</option>
                        <option>UTC</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">PG Verify Type</label>
                      <select className="form-select" id="">
                        <option>Direct</option>
                        <option>CRON</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">PG Page Type</label>
                      <select className="form-select" id="">
                        <option>Pay1</option>
                        <option>Pay2</option>
                        <option>Pay3</option>
                        <option>Pay4</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">Bank Transfer Minimum Amount</label>
                      <input
                        type="text"
                        className="form-control"
                        disabled=""
                        id=""
                        placeholder="Bank Transfer Minimum Amount"
                        defaultValue="₹676.00 (Auto-fetcch)"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">Bank Transfer Maximum Amount</label>
                      <input
                        type="text"
                        className="form-control"
                        disabled=""
                        id=""
                        placeholder="Bank Transfer Maximum Amount"
                        defaultValue="₹676.00 (Auto-fetcch)"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">MPIN (Optional)</label>
                      <input
                        type="number"
                        className="form-control"
                        id=""
                        placeholder="MPIN"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary me-2">
                    Update
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

export default EditAPI;