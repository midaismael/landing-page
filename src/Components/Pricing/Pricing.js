import React from "react";
import Data from "../../Data";
import '../Pricing/pricing.css';

const Pricing = () =>{

    const itemprice = Data.pricing.map((itembox)=>{
        return(
            <div className="col-md-4 col-sm-4">
                <div className="box">
                        <h6>{itembox.title}</h6>
                        <h4>{itembox.price}</h4>
                        <span>{itembox.time}</span>
                        <hr/>
                    <ul>
                        <li><span>Bandwidth:</span>{itembox.Bandwidth}</li>
                        <li><span>Onlinespace:</span>{itembox.Onlinespace}</li>
                        <li><span>Support:</span>{itembox.Support}</li>
                        <li><span>Domain:</span>{itembox.Domin}</li>
                        <li><span>Hidden Fees:</span>{itembox.Hiddenfees}</li>
                    </ul>
                    <button>Join Now</button>
                </div>
            </div>
        )
    })

    return(
        <section className="prices">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h2>OUR PRICING</h2>
                        <p>Call to action pricing table is really crucial to your for your business <br/> website. Make your bids stand-out with amazing options.</p>
                    </div> 
                </div>
                <div className="row">
                    {itemprice}
                </div>
            </div>
        </section>
    )
} 

export default Pricing;