
import "../../../assets/css/style.css";
import React, { useState } from 'react'
import userImg from '../../../assets/images/user.png';

const RecentLoginActivies = () => {
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
          <div className="display-head-search">
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
            <div className="form-group">
              <select className="form-select" id="">
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option value="">100</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="display-head-search">
                  <h4 className="card-title">Recent Login Activies</h4>
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
                      <tr>
                        <td>
                          <span className="highlight-text">Login</span> from
                          windows 10, <br /> Chrome ABC
                        </td>
                        <td>10th July 2025, 10:30 AM</td>
                        <td>5674435435353</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="highlight-text">Login</span> from
                          windows 10, <br /> Chrome ABC
                        </td>
                        <td>10th July 2025, 10:30 AM</td>
                        <td>5674435435353</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="highlight-text">Login</span> from
                          windows 10, <br /> Chrome ABC
                        </td>
                        <td>10th July 2025, 10:30 AM</td>
                        <td>5674435435353</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="highlight-text">Login</span> from
                          windows 10, <br /> Chrome ABC
                        </td>
                        <td>10th July 2025, 10:30 AM</td>
                        <td>5674435435353</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="highlight-text">Login</span> from
                          windows 10, <br /> Chrome ABC
                        </td>
                        <td>10th July 2025, 10:30 AM</td>
                        <td>5674435435353</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="highlight-text">Login</span> from
                          windows 10, <br /> Chrome ABC
                        </td>
                        <td>10th July 2025, 10:30 AM</td>
                        <td>5674435435353</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="highlight-text">Login</span> from
                          windows 10, <br /> Chrome ABC
                        </td>
                        <td>10th July 2025, 10:30 AM</td>
                        <td>5674435435353</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="highlight-text">Login</span> from
                          windows 10, <br /> Chrome ABC
                        </td>
                        <td>10th July 2025, 10:30 AM</td>
                        <td>5674435435353</td>
                      </tr>
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

export default RecentLoginActivies;