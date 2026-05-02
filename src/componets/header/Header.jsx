import logo from "../header/INSURE.svg"

import "./header.css"

function Header(){
  return (
    <>
    <nav>
      <div className="container">
       <a href=""> <img src={logo} alt="" className="nav_logo" /></a>

        <div className="nav_box">
          <div className="nav_list">
           <a href="" className="nav_item">HOW WE WORK</a>
           <a href="" className="nav_item">BLOG</a>
           <a href="" className="nav_item">ACCOUNT</a>
          </div>

          <button className="nav_btn">VIEW PLANS</button>
        </div>
      </div>
    </nav>
    
    </>)}

export default Header