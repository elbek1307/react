
import "./hero.css"

import hero_img from "../hero/heroimg.png"

function Hero(){
    return(
        <>
         <section className="hero">
            <div className="container">
                <div className="hero_content">
                    <h1 className="hero_title">Humanizing <br />your insurance.</h1>
                    <p className="hero_text">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                    <button className="hero_btn">VIEW PLANS</button>
                </div>
                <img src={hero_img} alt="" className="hero_img" />
            </div>
         </section>
        </>
    )
}

export default Hero