import React, { Component } from "react";
import logo from "../Images/Logo.png";
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

class Navbar extends Component {
  state={clicked:false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <div>
      <nav>
        <a href="/" className="nav-logo" target="_blank">
          <img  src={logo} alt="" />
        </a>
        <div>
          <ul id="navbar" className={this.state.clicked?"#navbar active":"#navbar"}>
            <li>
              <a className="active" href="/" target="_blank">Home</a>
            </li>
            <li>
              <a href="/financing" target="_blank">Financing</a>
            </li>
            <li>
              <a href="/purchasing"target="_blank">Purchasing</a>
            </li>
            <li>
              <a href="/contract" target="_blank">Selling</a>
            </li>
            <li>
              <a href="/repair"target="_blank">Repair</a>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i id="bar">{this.state.clicked?<CloseIcon/>:<MenuIcon/>}</i>
        </div>
      </nav>
    </div>
  );
}
}

export default Navbar;
