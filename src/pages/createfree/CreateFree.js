import React, { useState } from "react";
import "./CreateFree.css";

const CreateFree = () => {
  const [count, setCount] = useState(10);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <div><h3>Create Free test</h3>
      <div className="container" style={{background:"#FFFFFF"}}>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mt-4" style={{fontSize:"18px", fontWeight:"400"}}>
            Select Stream and Respective Subject
            <div className="mt-5 ml-4">
              Select Course
              <select
                className="course form-select form-select-md  col-8 "
                aria-label=".form-select-lg example"
              >
                <option value="1">JEE</option>
                <option value="2">UPSE</option>
                <option value="3">NEET</option>
                <option value="4">GMAT</option>
                <option value="3">GATE</option>
              </select>
            </div>
            <div className="mt-5 ml-4">
              Select Subject
              <select
                className="form-select form-select-md col-8 "
                aria-label=".form-select-lg example"
              >
                <option value="1">Mathematics</option>
                <option value="2">Biology</option>
                <option value="3">Chemistry</option>
                {/* <option value="4">G</option>
  <option value="3">GATE</option> */}
              </select>
            </div>
            <div className="mt-5 ml-4">
              Select Chapter
              <select
                className="form-select form-select-md col-8"
                aria-label=".form-select-lg example"
              >
                <option value="1">Trigonometry</option>
                <option value="2">Trigonometry</option>
                <option value="3">Trigonometry</option>
                <option value="4">Trigonometry</option>
                <option value="3">Trigonometry</option>
              </select>
            </div>
            <div className="mt-5 ml-4">
              Choose slots <br />
              <div className="mt-1 d-flex justify-content-start align-items-center">
                <button className="btn" onClick={increment}>-</button>
                <span>{count}</span>
                <button className="btn mx-2" onClick={decrement}>+</button>
              </div>
            </div>
            <div className=" m-4 ">
              <button className="secondary col-9">Create Test</button>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="d-md-flex justify-content-md-end mt-4">
              <button
                type="button"
                className="btn col-8"
                style={{ color: "#7F01FC", border: " 1px solid #7F01FC", background:"#FFFFFF" }}
              >
                Add subject
              </button>
            </div>
            <div className="mt-5">
              <span className="card One__One float-left d-flex justify-content-center align-items-center" style={{width:"300px",height:"50px"}}>
              <div className=" form-check">
                              
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    One vs One Test
  </label>

                {/* <label className="form-check-label" for="flexRadioDefault1">
    One vs One Test
  </label> */}
              </div>
              </span>
              <span className="card One__One d-flex justify-content-center align-items-center" style={{width:"300px",height:"50px"}}>
              <div className="form-check ">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
   Group Test
  </label>
              </div>
              </span>
            </div>
            <div className="box mt-5">
              <span className="target">Target Audience</span>
              <div className="container" style={{background:"#FFFFFF"}}>
                <p className="mt-3">Select Batch  </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label" 
                        for="flexRadioDefault1"
                      >
                        SELECT ALL TESTWIN STUDENT
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        BATCH A (WIN)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        BATCH B (LOSS)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        BATCH C (MAX REEFER)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        BATCH D (MIN BAL.)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        BATCH E ( MAX BAL.)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                       BATCH K ( FAV SUTDENTS)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        BATCH I (CUSTOM-4)
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        BATCH F (CUSTOM-1)
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        BATCH G (CUSTOM-2)
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        BATCH L (CUSTOM-3)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CreateFree;
