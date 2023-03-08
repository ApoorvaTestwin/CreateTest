import React from 'react'
import "./CreateTest.css";

const CreateFree = () => {
  return (<>
<h2>Create Free test</h2>
<div class="container  ">
  <div class="row ">
    <div class="col-lg-6 col-sm-12">
      Select Stream and Respective Subject
      <div class="mt-5">Select Course
      <select class="form-select form-select-md m-3 "  aria-label=".form-select-lg example">
  
  <option value="1">JEE</option>
  <option value="2">UPSE</option>
  <option value="3">NEET</option>
  <option value="4">GMAT</option>
  <option value="3">GATE</option>
</select></div>
<div class="mt-5">Select Subject
      <select class="form-select form-select-md m-3 "  aria-label=".form-select-lg example">
  
  <option value="1">Mathematics</option>
  <option value="2">Biology</option>
  <option value="3">Chemistry</option>
  {/* <option value="4">G</option>
  <option value="3">GATE</option> */}
</select></div>
<div class="mt-5">Select Chapter
      <select class="form-select form-select-md m-3 "  aria-label=".form-select-lg example">
  
  <option value="1">Trigonometry</option>
  <option value="2">Trigonometry</option>
  <option value="3">Trigonometry</option>
  <option value="4">Trigonometry</option>
  <option value="3">Trigonometry</option>
</select></div>
<div class="mt-5">Choose slots</div>
    </div>
    
    
    
    <div class="col-lg-6 col-sm-12 d-flex justify-content-center">
      Add subject
    </div>
  </div>
  </div>
  </>
  )
}

export default CreateFree
