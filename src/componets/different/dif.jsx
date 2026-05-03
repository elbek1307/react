
import dif1 from "../different/dif2.svg"


import "./dif.css"

function Dif ({data}){
    return <>
     <section className="dif">
        <div className="container">
            <hr className="dif_hr" />
            <h2 className="dif_title">We’re different</h2>
            <div className="dif_list">


              {data.map((item)=>(
                  <div key={item.id} className="dif_item">
                    <img src={item.url} alt="" className="dif_itm_img" />
                    <h3 className="dif_item_title">{item.title}</h3>
                    <p className="dif_item_text">{item.text}</p>
                </div> 
              ))}


               
                {/* <div className="dif_item">
                    <img src={dif2} alt="" className="dif_itm_img" />
                    <h3 className="dif_item_title">Affordable Prices</h3>
                    <p className="dif_item_text">We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                </div> */}
                {/* <div className="dif_item">
                    <img src={dif3} alt="" className="dif_itm_img" />
                    <h3 className="dif_item_title">People First</h3>
                    <p className="dif_item_text">Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need </p>
                </div> */}
            </div>
        </div>
     </section>

    </>
}

export default Dif