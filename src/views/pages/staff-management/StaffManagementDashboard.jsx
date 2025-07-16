import React from 'react';
import "../../../assets/css/style.css";
import logo from '../../../assets/images/logo.png';
import userImg from '../../../assets/images/user.png';

const StaffManagementDashboard = () => {
  return (
    <div className="container-scroller">
      {/* <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <h4>DASHBOARD</h4>
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-category">
            <span className="nav-link">&nbsp;</span>
          </li>
          {['Dashboard', 'API User Management', 'Site Management', 'Settlement Report', 'Staff Management'].map((item, i) => (
            <li className="nav-item menu-items" key={i}>
              <a className="nav-link" href="#">
                <span className="menu-icon">
                  <i className="mdi mdi-file-document"></i>
                </span>
                <span className="menu-title">{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav> */}

      <div className="container-fluid page-body-wrapper">
        <nav className="navbar p-0 fixed-top d-flex flex-row">
          <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
            <a className="navbar-brand brand-logo-mini" href="index.html">
              <img src={logo} alt="user" />
            </a>
          </div>
          <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
            <button className="navbar-toggler navbar-toggler align-self-center" type="button">
              <span className="mdi mdi-menu"></span>
            </button>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item dropdown border-left">
                <a className="nav-link dropdown-toggle" href="#">
                  <i className="mdi mdi-bell"></i>
                  <span className="count bg-danger"></span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  <div className="navbar-profile">
                    <img className="img-xs rounded-circle" src={userImg} alt="" />
                    <p className="mb-0 d-none d-sm-block navbar-profile-name">User Name</p>
                    <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                  </div>
                </a>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button">
              <span className="mdi mdi-format-line-spacing"></span>
            </button>
          </div>
        </nav>

        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <ul className="navbar-nav width40">
                <li className="nav-item dropdown d-none d-lg-block add-user-button">
                  <a className="nav-link btn btn-inverse-primary btn-fw border-r50 create-new-button" href="#">+ Add New Staff</a>
                </li>
              </ul>

              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Add New User</h4>
                    <form className="forms-sample">
                      <div className="row">
                        {['First Name', 'Last Name', 'Email address', 'Mobile Number', 'Password', 'Confirm Password'].map((label, i) => (
                          <div className="form-group col-6" key={i}>
                            <label>{label}<span className="text-danger">*</span></label>
                            <input type={label.includes('Password') ? 'password' : 'text'} className="form-control" placeholder={label} />
                          </div>
                        ))}
                      </div>
                      <button type="submit" className="btn btn-primary me-2">Create</button>
                      <button className="btn btn-dark">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="display-head-search d-flex justify-content-between align-items-center">
                      <h4 className="card-title">Staff Dashboard</h4>
                      <form className="nav-link d-none d-lg-flex search">
                        <input type="text" className="form-control border-r50" placeholder="Search staff" />
                      </form>
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
                              <button className="btn btn-inverse-primary btn-fw border-r50">View</button>
                              <button className="btn btn-inverse-success btn-fw border-r50">Edit</button>
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
          {/* <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2025 Magic Pay. All rights reserved.</span>
            </div>
          </footer> */}
        </div>
      </div>
    </div>
  );
};

export default StaffManagementDashboard;
