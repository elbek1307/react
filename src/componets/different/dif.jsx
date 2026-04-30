import dif2 from "../different/dif1.svg"
import dif1 from "../different/dif2.svg"
import dif3 from "../different/dif3.svg"

import "./dif.css"

function Dif (){
    return <>
     <section className="dif">
        <div className="container">
            <hr className="dif_hr" />
            <h2 className="dif_title">We’re different</h2>
            <div className="dif_list">
                <div className="dif_item">
                    <img src={dif1} alt="" className="dif_itm_img" />
                    <h3 className="dif_item_title">Snappy Process</h3>
                    <p className="dif_item_text">Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
                </div>
                <div className="dif_item">
                    <img src={dif2} alt="" className="dif_itm_img" />
                    <h3 className="dif_item_title">Affordable Prices</h3>
                    <p className="dif_item_text">We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                </div>
                <div className="dif_item">
                    <img src={dif3} alt="" className="dif_itm_img" />
                    <h3 className="dif_item_title">People First</h3>
                    <p className="dif_item_text">Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.

                    </p>
                </div>
            </div>
        </div>
     </section>

    </>
}

export default Dif