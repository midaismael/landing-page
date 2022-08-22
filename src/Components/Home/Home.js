import React from "react";
import Banner from "../Banner/Banner";
import Pricing from "../Pricing/Pricing";
import Services from "../Services/services";
import Header from "./Header/Header";
import './Home.css';

const Home = () => {
    return (
        <>
        <Header/>
        <Services />
        <Banner />
        <Pricing />
        </>
    )
}

export default Home;