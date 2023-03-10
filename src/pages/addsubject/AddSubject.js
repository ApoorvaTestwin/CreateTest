import React from "react";
import "./addSubject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpload} from "@fortawesome/free-solid-svg-icons"


const AddSubject = () => {
  return (
    <>
      <div>
        <h3>Create Free test</h3>
        <div className="container" style={{ background: "#FFFFFF" }}>
          <div className="row">
            <div
              className="col-lg-12 mt-4"
              style={{ fontSize: "24px", fontWeight: "500" }}
            >
              JEE - Maths - trigonometry
            </div>
            <div className="mt-4">
            <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="flexRadioDefault"/>
  <label className="form-check-label" for="flexRadioDefault1">
    English
  </label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="flexRadioDefault"/>
  <label className="form-check-label" for="flexRadioDefault1">
    Hindi
    </label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="flexRadioDefault"/>
  <label className="form-check-label" for="flexRadioDefault1">
    Gujarati
  </label>
</div></div>
<div className="mt-4" style={{ fontSize: "20px", fontWeight: "500" }}><FontAwesomeIcon icon={faUpload} /> Upload CSV</div>
<My
           </div>
        </div>
      </div>
    </>
  );
};

export default AddSubject;
