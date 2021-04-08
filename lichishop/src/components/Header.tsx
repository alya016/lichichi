import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import header from "../styles/Header.module.css"
import Menu from "../svg/bars-solid.svg"
import Close from "../svg/times-solid.svg"
import CartImage from "../svg/shopping-cart-solid.svg"

export default class Header extends Component {
    state = {
        toggle: false,
    }

    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }
 

    render() {
        const {toggle} =  this.state;

        return (
            <header className = {header.navbar}>
                    
                    <div className={header.menu} onClick = {this.menuToggle}>
                        <img src={Menu} alt="" width = "20"/>
                    </div>
                    <div className={header.logo}>
                        <Link to={'/'}><img src="https://lichi.com/statics/images/new_logo.png" alt="" width = "100"/></Link>
                    </div>
                    <nav>
                        <ul className = {toggle? header.toggle : ""}>
                            <li><Link to={'/allClothes'}>All Items</Link></li>
                            <li><Link to={'/categories'}>Categories</Link></li>
                            <li><Link to={'/newClothes'}>New Clothes</Link></li>
                            <li><Link to={'/login'}>Login</Link></li>
                            <li><Link to={'/registration'}>Register</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li className={header.close}><img src={Close} alt="" width = "20" onClick = {this.menuToggle}/>                                    </li>   
                            <li className={header.nav_card}><Link to = {"/card"}><img src={CartImage} alt="" width = "25"/></Link></li> 
                        </ul>                
                    </nav>
            </header >
            
        )
    }
}
