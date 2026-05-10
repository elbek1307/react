import { useState } from 'react'

import { IoMdExit } from "react-icons/io";

import logo from "../header/INSURE.svg"
import "./header.css"

function Header(){

   const [modal, setmodal] = useState(false)


  return (
    <>
    <nav>
      <div className="container">
       <a href="#"> <img src={logo} alt="sie logo" className="nav_logo" /></a>

        <div className="nav_box">
          <div className="nav_list">
           <a href="#" className="nav_item">HOW WE WORK</a>
           <a href="#" className="nav_item">BLOG</a>
           <a href="#" className="nav_item" onClick={()=> setmodal(true)}>ACCOUNT</a>
          </div>

          <button className="nav_btn">VIEW PLANS</button>

          {modal && (
            <div className="mod_back">
              but
            </div>
          )}
        </div>
      </div>
    </nav>
    
    </>)}

export default Header