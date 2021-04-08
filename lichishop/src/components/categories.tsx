import React, { Component } from "react";
import { Link } from "react-router-dom";
import catStyle from"../styles/Categories.module.css"
import HoverImage from 'react-hover-image'
import 'react-medium-image-zoom/dist/styles.css'
import axios from "../api/axios"

interface State {
    userEmail: string,
    categories: []
}
interface Props {

}


export default class Categories extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            categories: [],
            userEmail: ''
        };

        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    } 
    emailInput = React.createRef<HTMLInputElement>();

    componentDidMount() {
        if(this.emailInput.current){
            this.emailInput.current.focus();
        }
        axios.get(`http://localhost:3000/categories`)
        .then(res => {
          const categories = res.data;
          this.setState({ categories });
        })
    }

    handleEmailChange(e: any) {
        this.setState({
            userEmail: e.target.value
        });
    }

    handleSubmit(){
        if(!this.state.userEmail.includes("@"))
            alert("Email address is not valid")
        else 
            alert("Thank you for subscription")
      }   

    
    render() {
        

        return (
            <div id = {catStyle.category}>
                <div >
                <ul className = {catStyle.subscription}>
                    <li><input type="email" className={catStyle.search_input} onChange={this.handleEmailChange} id={catStyle.search_input} ref={this.emailInput} placeholder="Your email" /></li>
                    <li><span id={catStyle.subscribe_button_span}><button id={catStyle.subscribe_button_home} onClick={this.handleSubmit}>Subscrible</button></span></li>
                </ul>
                </div>
                    
                <div className = {catStyle.topCategories}>
                    <nav>
                        { this.state.categories.map((cat: { id: number; cat_name: string; cat_image: string; cat_image2: string}) =>  (
                           <ul className = {catStyle.topCategoriesList} key = {cat.id}>
                                <Link to={`categories/${cat.id}/products`}><li>{cat.cat_name}</li></Link>
                            </ul>
                        ))
                        }    
                    </nav>    
                </div>
                { 
                    this.state.categories.map((cat: { id: number; cat_name: string; cat_image: string; cat_image2: string}) =>  (
                        <div className={catStyle.card} key = {cat.id}>
                            <Link to = {`categories/${cat.id}/products`}>
                               <HoverImage className = {catStyle.catImages} src={cat.cat_image} hoverSrc = {cat.cat_image2}/>
                            </Link>
                            <div className={catStyle.content}>
                                <h3>
                                    <Link to = {`categories/${cat.id}/products`}>{cat.cat_name}</Link>
                                </h3>
                            </div>
                        </div>
                    ))
                    
                }
            </div>
        )
    }
}
