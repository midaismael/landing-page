import React from "react";
import Data from "../../Data";
import Servitem from "./Servitem";
import "./services.css";
import mobimg from '../../assets/online-world-ba029cf8887f4299446296263ab79b61.svg'

const Services = () => {
    const item = Data.serv.map((itembox)=>{
        return(
            <div className="col-md-4">
                <Servitem title={itembox.title} text={itembox.text}
                icons={itembox.icons} />
            </div>
        )
    })
    
    return(
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>OUR SERVICES</h2>
                        <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that
                            <br/> have meaning and add a value for our clients.</p>
                    </div>
                </div>
                <div className="row">
                    {item}
                </div>
                <div className="row lastserv">
                    <div className="col-md-6">
                        <h3>A digital web design studio creating modern & engaging online experiences</h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the 
                            <br/>Semantics, a large language ocean. A small river named Duden
                            <br/>flows by their place and supplies it with the necessary regelialia.</p>
                            <ul>
                                <li>We put a lot of effort in design.</li>
                                <li>The most important ingredient of successful website.</li>
                                <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                                <li>Submit Your Orgnization.</li>
                            </ul>
                            <button>Learn More</button>
                    </div>
                    <div className="col-md-6">
                        <img src={mobimg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;