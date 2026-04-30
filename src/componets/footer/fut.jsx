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
          <img src={logoFoot} alt="logo" />
          <div className="fut_top_box">
            <img src={facebook} alt="" className="fut_icon" />
            <img src={twiter} alt="" className="fut_icon" />
            <img src={pinter} alt="" className="fut_icon" />
            <img src={insta} alt="" className="fut_icon" />
          </div>
        </div>
        <hr className="fut_hr" />
        <div className="fut_bottom"></div>
      </div>
    </footer>
  );
}

export default Footer;