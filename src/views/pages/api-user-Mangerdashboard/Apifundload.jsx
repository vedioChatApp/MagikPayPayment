
import "../../../assets/css/style.css";
import React, { useState } from 'react'
import userImg from "../../../assets/images/user.png";

const Apifundload = () => {
   const [showForm, setShowForm] = useState(false)
  return (
<div className="container-fluid page-body-wrapper">
  {/* partial:partials/_navbar.html */}
  {/* partial */}
  <div className="main-panel">
    <div className="content-wrapper">
      <div className="row">
        {/* Modal form start */}
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Fund Load (Top-up/Deduct)</h4>
              <p className="card-description">
                Add or Deduct balance from the user's wallet{" "}
              </p>
              <form className="forms-sample ">
                <div className="row">
                  <div className="form-group col-6">
                    <label htmlFor="">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Company Name"
                      defaultValue="Company Name"
                      disabled=""
                    />
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="">Person Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      disabled=""
                      placeholder="Person Name"
                      defaultValue="Suraiya Parvin"
                    />
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="">Current Balance</label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      disabled=""
                      placeholder="Current Balance"
                      defaultValue="₹35352.00"
                    />
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="">Type</label>
                    <select className="form-select" name="" id="">
                      <option value="">Select Type</option>
                      <option value="">Debit</option>
                      <option value="">Credit</option>
                    </select>
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="">
                      Amount<span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      placeholder="Amount"
                    />
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="">
                      Remarks<span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id=""
                      rows={4}
                      placeholder="Remarks"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="">MPIN (Optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="MPIN"
                      defaultValue={33255}
                    />
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="">Staff ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Staff ID"
                      defaultValue={33255}
                      disabled=""
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

  );
};

export default Apifundload;