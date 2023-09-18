import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import HomeStyle from "../../styles/home.css"
import ProgressBar from "../Components/ProgressBar";

class Home extends Component {

    render() {
        return (
            <section id="home">
                <NavBar currentPage="Accueil"></NavBar>
                <h1 className="title">Ricassou Trophy Team</h1>
                <section className="main">
                    <p>Aidez nous à atteindre notre objectif en faisant un don</p>
                    <ProgressBar></ProgressBar>
                </section>
            </section>
        )
    }
}

export default Home;
