import React from "react";
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

const ApiUserDashboard = () => {
  return (
       <div class="container-scroller">
        
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <ul className="navbar-nav width40">
            <li className="nav-item dropdown d-none d-lg-block add-user-button">
              <a className="nav-link btn btn-inverse-primary btn-fw border-r50 create-new-button">
                + Add New User
              </a>
              {/* Will display the form after click on this icon only || also will disappear after click again on the icon */}
            </li>
          </ul>

          {/* Form Design Just like filter */}
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add New User</h4>
                <p className="card-description">Company Basic Information</p>
                <form className="forms-sample">
                  <div className="row">
                    <div className="form-group col-6">
                      <label>Company Name<span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Company Name" />
                    </div>
                    <div className="form-group col-6">
                      <label>Mobile Number<span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="Mobile Number" />
                    </div>
                    <div className="form-group col-6">
                      <label>Email address<span className="text-danger">*</span></label>
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group col-6">
                      <label>Upload Pan Card</label>
                      <input type="file" className="file-upload-default" />
                      <div className="input-group col-xs-12 d-flex align-items-center">
                        <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Pan Card" />
                        <span className="input-group-append ms-2">
                          <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                        </span>
                      </div>
                    </div>
                    <div className="form-group col-6">
                      <label>Upload Aadhaar Card</label>
                      <input type="file" className="file-upload-default" />
                      <div className="input-group col-xs-12 d-flex align-items-center">
                        <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Aadhaar Card" />
                        <span className="input-group-append ms-2">
                          <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                        </span>
                      </div>
                    </div>

                    <p className="card-description">Tax Information</p>
                    <div className="form-group col-6">
                      <label>GST Number<span className="text-danger">*</span></label>
                      <input type="text" className="form-control" placeholder="GST Number" />
                    </div>
                    <div className="form-group col-6">
                      <label>PAN Number</label>
                      <input type="text" className="form-control" placeholder="PAN Number" />
                    </div>
                    <div className="form-group col-6">
                      <label>PAN Holder Number</label>
                      <input type="text" className="form-control" placeholder="PAN Holder Number" />
                    </div>
                    <div className="form-group col-6">
                      <label>Upload GST Document</label>
                      <input type="file" className="file-upload-default" />
                      <div className="input-group col-xs-12 d-flex align-items-center">
                        <input type="text" className="form-control file-upload-info" disabled placeholder="Upload GST Document" />
                        <span className="input-group-append ms-2">
                          <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                        </span>
                      </div>
                    </div>

                    <p className="card-description">Contact Information</p>
                    <div className="form-group col-6">
                      <label>Contact Person Name</label>
                      <input type="text" className="form-control" placeholder="Contact Person Name" />
                    </div>
                    <div className="form-group col-6">
                      <label>Contact Person Mobile Number</label>
                      <input type="text" className="form-control" placeholder="Contact Person Mobile Number" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary me-2">Submit</button>
                  <button className="btn btn-dark" type="button">Cancel</button>
                </form>
              </div>
            </div>
          </div>
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
                        <input type="text" className="form-control border-r50" placeholder="Search user" />
                      </form>
                    </li>
                  </ul>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Agent</th>
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <div className="template-demo">
                            <a href="api-user-view.html">
                              <button type="button" className="btn btn-inverse-primary btn-fw border-r50">View</button>
                            </a>
                            <a href="">
                              <button type="button" className="btn btn-inverse-success btn-fw border-r50">Edit</button>
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

        {/* <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright © 2025 <a href="#" target="_blank">Magic Pay</a>. All rights reserved.
            </span>
          </div>
        </footer> */}
      </div>
    </div>
    </div>
  );
};

export default ApiUserDashboard;