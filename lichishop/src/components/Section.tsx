import React, { Component, Profiler } from 'react'
import { Route } from 'react-router'
import Categories from './categories'
import Home from './Home'
import ProductDetail from './ProductDetail'
import Products from './Products'
import Cart from './Cart'
import "../index.css"
import Registration from "./registration";
import AllClothes from "./AllClothes";
import Login from './Login'
import About from './About'
import NewClothes from "./newClothes"

const callback = (
    id: string,
    phase: "mount" | "update",
    actualTime: number,
    baseTime: number,
    startTime: number,
    commitTime: number
) => {
    console.log(`${id}'s ${phase} phase:`);
    console.log(`Actual time: ${actualTime}`);
    console.log(`Base time: ${baseTime}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
};


export default class Section extends Component {

    

    render() {
        return (
            <section>
                <Route path = "/" exact component = {Home}/>
                <Route path = "/categories" exact component = {Categories} />
                <Route path = "/categories/:id/products" exact component = {Products}/>
                <Route path = "/categories/:id/products/:prodId" exact component = {ProductDetail}/>
                <Route path = "/card" exact component = {Cart} />
                <Route path = "/registration/" exact component = {Registration} />
                <Route path = "/allClothes/" exact component = {AllClothes} />
                <Route path = "/login/" exact component = {Login} />

                <Profiler id="newProducts" onRender={callback}>
                    <Route path = "/newClothes/" exact component = {NewClothes} />
                </Profiler>

                <Route path = "/about/" exact component = {About} />
            </section>
        )
    }
}
