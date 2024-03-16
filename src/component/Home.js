import React from "react"
import Opening from "./Opening";
import { useEffect,useState } from "react";
import "./Home.css";

const Home = () => {
    const[count,setcount]=useState(0)
  useEffect(()=>{
       setTimeout(()=>{
        setcount((count)=>count+1)
       },1000)
  });
  return (
    <div>
  <Opening/>
      {/* <div className='home-opening'>
          <img src={logo} alt="Logo" />
        </div> */}
      <div className="home-container">
        <div className="home-box">
          <div className="home-div1 home-innerbox">
            <a href="/financing" target="_blank">
              <img
                src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </a>
          </div>
          <div className="home-div2 home-innerbox" target="_blank">
            <a href="/purchasing">
              <img
                src="https://plus.unsplash.com/premium_photo-1661768507909-f961fcff0d45?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </a>
          </div>
          <div className="home-div3 home-innerbox">
            <a href="/contract" target="_blank">
              <img
                src="https://images.unsplash.com/photo-1554252116-30abdf759321?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </a>
          </div>
          <div className="home-div4 home-innerbox" target="_blank">
            <a href="repair">
              <img
                src="https://images.unsplash.com/photo-1576613109753-27804de2cba8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
