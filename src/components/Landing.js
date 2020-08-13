import React, { Component } from 'react'
import './Landing.css'
import data from  "../data.json"
import Products from "./Products";

export default class Landing extends Component {
    constructor(){
        super();
        this.state={
            products: data.products,
            size:"",
            sort: ""
        }
    }
    render() {
        return (
            <div className="grid-container">
                <header>
                    <a href="/">React Shopping Cart</a>
                </header>
                <main>
                <div className="content">
                    <div className="main">
                        <Products products={this.state.products}></Products>
                    </div>
                <div className="sidebar"> Cart Items</div>
                </div>
                </main>
                <footer>
                    All Rights Reserved
                </footer>
                
            </div>
        )
    }
}
