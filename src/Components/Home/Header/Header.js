import React from "react";
import './Header.css';

const Header = () => {
    return(
        <header>
            <div className="header-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>We help startsup launch their <br/> products</h2>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used <br/>
                            to demonstrate the visual form a typeface without relying on meaningful content.</p>
                            <form>
                                <input type="email" placeholder="Email" />
                                <button type="submit">subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;