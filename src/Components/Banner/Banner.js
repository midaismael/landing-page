import React from "react";
import '../Banner/Banner.css';

const Banner = () =>{
    return(
        <section className="banner">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>Build your dream website today</h2>
                            <p>But nothing the copy said could convince her and so it didn’t take long <br/> until a few insidious Copy Writers ambushed her.</p>
                            <button>View Plan & Pricing</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;