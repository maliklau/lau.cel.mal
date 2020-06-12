import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './base.css';

const dropDownNavContent =
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
const myName =
  <div>
    <div class="topNav">
      <a class="notLeftLink" href="#About">About</a>
      <a href="#Travel">Travel</a>
      <a href="#Coding">Coding</a>
      <a href="#Fashion">Fashion</a>
      <a href="#Fashion">Lifestyle</a>
      <a href="#Contact">Contact</a>
    </div>
    <div class="borderBox">
      <h1>Lauren Malik</h1>
    </div>
    <div class="footer">
      <p>© Lauren Malik | Site made by Lauren Malik | Contact</p>
    </div>
  </div>


ReactDOM.render(myName, document.getElementById('root'));
