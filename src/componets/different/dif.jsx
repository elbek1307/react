
import dif1 from "../different/dif2.svg"


import "./dif.css"

function Dif ({data}){
    return <>
     <section className="dif">
        <div className="container">
            <hr className="dif_hr" />
            <h2 className="dif_title">We’re different</h2>
            <div className="dif_list">


              {data && data.map((item)=>(
                  <div key={item.id} className="dif_item">
                    <img src={item.url} alt="" className="dif_itm_img" />
                    <h3 className="dif_item_title">{item.title}</h3>
                    <p className="dif_item_text">{item.text}</p>
                </div> 
              ))}

            </div>
        </div>
     </section>

    </>
}

export default Dif