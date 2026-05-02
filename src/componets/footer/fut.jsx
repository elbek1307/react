import logoFoot from "./INSURE.svg"
import facebook from "./facebook.svg"
import insta from "./insta.svg"
import twiter from "./twiiter.svg"
import pinter from "./pinterest.svg"

import "./fut.css"

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="fut_top">
          <img src={logoFoot} alt="logo" className="fut_logo" />
          <div className="fut_top_box">
            <a target="blank" href="https://www.facebook.com/"><img src={facebook} alt="facebook" className="fut_icon" /></a>
            <a href="https://x.com/" target="blank"><img src={twiter} alt="twiiter" className="fut_icon" /></a>
            <a href="https://www.pinterest.com/" target="blank"><img src={pinter} alt="pinterest" className="fut_icon" /></a>
           <a href="https://www.instagram.com/?hl=en" target="blank"> <img src={insta} alt="instagram" className="fut_icon" /></a>
          </div>
        </div>
        <hr className="fut_hr" />
        <div className="fut_bottom">
            <div className="fut_list">
                <h3 className="fut_bot_title">OUR COMPANY</h3>
                <a href="" className="fut_bot_link">HOW WE WORK</a>
                <a href="" className="fut_bot_link">WHY INSURE?</a>
            </div>
            <div className="fut_list">
                <h3 className="fut_bot_title">HELP ME</h3>
                <a href="" className="fut_bot_link">FAQ</a>
                <a href="" className="fut_bot_link">TERMS OF USE</a>
            </div>
            <div className="fut_list">
                <h3 className="fut_bot_title">CONTACT</h3>
                <a href="" className="fut_bot_link">SALES</a>
                <a href="" className="fut_bot_link">SUPPORT</a>
            </div>
            <div className="fut_list">
                <h3 className="fut_bot_title">OTHERS</h3>
                <a href="" className="fut_bot_link">CAREERS</a>
                <a href="" className="fut_bot_link">PRESS</a>
            </div>
    
        </div>
      </div>
    </footer>
  );
}

export default Footer;