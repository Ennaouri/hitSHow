import React, { Component } from 'react'
import Hero from "../components/Hero";
import Categorie from "../components/Categorie";
import Equipe from "../components/Equipe";
import Header from '../components/Header';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Hero />
                <Categorie />
                <Equipe />
            </div>
        )
    }
}
