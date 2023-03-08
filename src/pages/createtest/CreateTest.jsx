import React,{useState} from 'react'
import {Table, Button} from 'react-bootstrap'
import "./CreateTest.css";
const CreateTest = () => {
    const users=[
{creator: 'Testwin', name:'UPSE', date:'15 Jan,2023 20:00PM',entry:'₹ 20',winning:'₹ 40',participant:'26/30',test:'15:00 min',vouchers:'Swiggy'},
{creator: 'Testwin', name:'UPSE', date:'15 Jan,2023 20:00PM',entry:'₹ 20',winning:'₹ 40',participant:'26/30',test:'15:00 min',vouchers:'Swiggy'},
{creator: 'Testwin', name:'UPSE', date:'15 Jan,2023 20:00PM',entry:'₹ 20',winning:'₹ 40',participant:'26/30',test:'15:00 min',vouchers:'Swiggy'},
{creator: 'Testwin', name:'UPSE', date:'15 Jan,2023 20:00PM',entry:'₹ 20',winning:'₹ 40',participant:'26/30',test:'15:00 min',vouchers:'Swiggy'},
{creator: 'Testwin', name:'UPSE', date:'15 Jan,2023 20:00PM',entry:'₹ 20',winning:'₹ 40',participant:'26/30',test:'15:00 min',vouchers:'Swiggy'},
{creator: 'Testwin', name:'UPSE', date:'15 Jan,2023 20:00PM',entry:'₹ 20',winning:'₹ 40',participant:'26/30',test:'15:00 min',vouchers:'Swiggy'},
{creator: 'Testwin', name:'UPSE', date:'15 Jan,2023 20:00PM',entry:'₹ 20',winning:'₹ 40',participant:'26/30',test:'15:00 min',vouchers:'Swiggy'} 
]
    
const[state, setState]=useState(false);

    
  return (
   <div className="container ">
    <div class='mt-5'>
        <div style={{fontSize:"40px"}}>Create Test</div>
    
        <div className=" m-4 justify-content-between d-flex flex-wrap ">
        <button class="primary" size='lg'>Create a free test </button>
      <button class="secondary" size='lg'>Create a paid test</button>
      </div>
      <div className="table"><span>Test created history</span>
      <select class="form-select form-select-md m-3 " style={{width:"100px"}} aria-label=".form-select-lg example">
  
  <option value="1">Today</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
      <div class="d-flex flex-row">
      <div class="dropdown m-4 ">
  <button class="btn btn-light dropdown-toggle text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Subject
  </button>
  <ul class="dropdown-menu" >
    <li><a class="dropdown-item" href="#">Mathematics</a></li>
    <li><a class="dropdown-item" href="#">Reasoning</a></li>
    <li><a class="dropdown-item" href="#">Biology</a></li>
  </ul>
  
</div>
<div class="dropdown m-4">
  <button class="btn btn-light dropdown-toggle text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="">
   Course
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">JEE</a></li>
    <li><a class="dropdown-item" href="#">UPSE</a></li>
    <li><a class="dropdown-item" href="#">NEET</a></li>
  </ul>
  
</div>
<div class="dropdown m-4">
  <button class="btn btn-light dropdown-toggle text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Participants
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">1</a></li>
    <li><a class="dropdown-item" href="#">2</a></li>
    <li><a class="dropdown-item" href="#">3</a></li>
  </ul>
  
</div>
<div class="dropdown m-4">
  <button class="btn btn-light dropdown-toggle text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Vouchers
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Swiggy</a></li>
    <li><a class="dropdown-item" href="#">Zomato</a></li>
    <li><a class="dropdown-item" href="#">Swiggy</a></li>
  </ul>
  
</div>
</div>
      <Table hover responsive='md' justify-start>
      <thead>
        <tr>
          <th>Action</th>
          <th>Creator</th>
          <th>Name</th>
          <th>Date Created</th>
          <th>Entry Amount</th>
          <th>Winning</th>
          <th>Participant</th>
          <th>Test  Duration</th>
          <th>Vouchers</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map((item,i)=>
           
            <tr key={i}>
          <td><div class="d-flex input-text justify-content-center">
    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
  </div></td>
          <td>{item.creator}</td>
          <td>{item.name}</td>
          <td>{item.date}</td>
          <td class="d-flex justify-content-center">{item.entry}</td>
          <td>{item.winning}</td>
          <td>{item.participant}</td>
          <td>{item.test}</td>
          <td>{item.vouchers}</td>
         
        </tr> )}
        </tbody></Table>
    </div>
    </div>
    </div>
  )
}

export default CreateTest

