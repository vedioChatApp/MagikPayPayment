
import "../../../assets/css/style.css";
import React, { useState } from 'react'
import userImg from "../../../assets/images/user.png";

const ChargeManagement = () => {
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
                <h4 className="card-title">Charge Management</h4>
                <form className="forms-sample ">
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="">Type</label>
                      <select className="form-select" id="">
                        <option value="">Select Type</option>
                        <option>QR</option>
                        <option>IMPS</option>
                        <option value="">RTGS</option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th> Amount Range </th>
                                    <th> Charges </th>
                                    <th> GST </th>
                                    <th> IGST </th>
                                    <th> CGST </th>
                                    <th>Total (Auto-fetcch)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>₹1 - ₹1,000</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="Charges"
                                        defaultValue="₹5"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="GST"
                                        defaultValue="18%"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="IGST"
                                        defaultValue="9%"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="CGST"
                                        defaultValue="9%"
                                      />
                                    </td>
                                    <td>₹565667</td>
                                  </tr>
                                  <tr>
                                    <td>₹1001 - ₹3,000</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="Charges"
                                        defaultValue="₹5"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="GST"
                                        defaultValue="18%"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="IGST"
                                        defaultValue="9%"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="CGST"
                                        defaultValue="9%"
                                      />
                                    </td>
                                    <td>₹565667</td>
                                  </tr>
                                  <tr>
                                    <td>₹3001 - </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="Charges"
                                        defaultValue="₹5"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="GST"
                                        defaultValue="18%"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="IGST"
                                        defaultValue="9%"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="CGST"
                                        defaultValue="9%"
                                      />
                                    </td>
                                    <td>₹565667</td>
                                  </tr>
                                  <tr>
                                    <td>₹10,000 </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="Charges"
                                        defaultValue="₹5"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="GST"
                                        defaultValue="18%"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="IGST"
                                        defaultValue="9%"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="CGST"
                                        defaultValue="9%"
                                      />
                                    </td>
                                    <td>₹565667</td>
                                  </tr>
                                  <tr>
                                    <td>₹10,001 - </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="Charges"
                                        defaultValue="₹5"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="GST"
                                        defaultValue="18%"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="IGST"
                                        defaultValue="9%"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="CGST"
                                        defaultValue="9%"
                                      />
                                    </td>
                                    <td>₹565667</td>
                                  </tr>
                                  <tr>
                                    <td>Above</td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="Charges"
                                        defaultValue="₹5"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="GST"
                                        defaultValue="18%"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="IGST"
                                        defaultValue="9%"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        placeholder="CGST"
                                        defaultValue="9%"
                                      />
                                    </td>
                                    <td>₹565667</td>
                                  </tr>
                                </tbody>
                              </table>
                              <a
                                className="nav-link btn btn-success create-new-button py-3"
                                id=""
                                href="#"
                              >
                                + Add More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="card-description">
                      QR Code Charges Information
                    </p>
                    <div className="form-group col-6">
                      <label htmlFor="">QR Code Charge Applied</label>
                      <select className="form-select" id="">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">Charged Type</label>
                      <select className="form-select" id="">
                        <option>Fixed</option>
                        <option>Percent</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">QR Code GST Applied</label>
                      <select className="form-select" id="">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">QR Code TDS Applied</label>
                      <select className="form-select" id="">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">QR Code TDS Rate</label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="QR Code TDS Rate"
                        defaultValue="₹676.00"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">QR Code Charge</label>
                      <input
                        type="text"
                        className="form-control"
                        disabled=""
                        id=""
                        placeholder="QR Code Charge"
                        defaultValue="₹676.00 (Auto-fetcch)"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary me-2">
                    Update
                  </button>
                  <button className="btn btn-dark">Cancel</button>
                </form>
                <form className="forms-sample py-3">
                  <div className="row">
                    <p className="card-description">
                      Bank Transfer &amp; CMS Online
                    </p>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Bank Transfer &amp; CMS Online Charge Applied
                      </label>
                      <select className="form-select" id="">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Bank Transfer &amp; CMS Online Changes Type
                      </label>
                      <select className="form-select" id="">
                        <option>Fixed</option>
                        <option>Percent</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">QR Code TDS Applied</label>
                      <select className="form-select" id="">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">QR Code TDS Rate</label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="QR Code TDS Rate"
                        defaultValue="₹676.00"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Bank Transfer &amp; CMS Online Changes - IMPS
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        disabled=""
                        id=""
                        placeholder="Bank Transfer & CMS Online Changes - IMPS"
                        defaultValue="₹676.00 (Auto-fetcch)"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="">
                        Bank Transfer &amp; CMS Online Changes - RTGS
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        disabled=""
                        id=""
                        placeholder="Bank Transfer & CMS Online Changes - RTGS"
                        defaultValue="₹676.00 (Auto-fetcch)"
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

export default ChargeManagement;